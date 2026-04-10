import React, { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import prospectusPdf from "../../assets/prospectus.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const ProspectusFlipbook = () => {
  const containerRef = useRef(null);
  const audioContextRef = useRef(null);

  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageWidth, setPageWidth] = useState(340);
  const [flipDirection, setFlipDirection] = useState("next");
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const updatePageWidth = () => {
      if (!containerRef.current) return;
      const availableWidth = containerRef.current.clientWidth - 24;
      const isDesktop = window.innerWidth >= 1024;
      const maxWidth = isDesktop ? 360 : 860;
      setPageWidth(Math.max(220, Math.min(availableWidth, maxWidth)));
    };

    updatePageWidth();
    window.addEventListener("resize", updatePageWidth);

    return () => window.removeEventListener("resize", updatePageWidth);
  }, []);

  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  const getAudioContext = useCallback(() => {
    if (typeof window === "undefined") return null;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContextClass();
    }

    return audioContextRef.current;
  }, []);

  const playFlipSound = useCallback(() => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const emitFlipSound = () => {
        const now = ctx.currentTime;

        const noiseDuration = 0.24;
        const sampleCount = Math.floor(ctx.sampleRate * noiseDuration);
        const noiseBuffer = ctx.createBuffer(1, sampleCount, ctx.sampleRate);
        const channelData = noiseBuffer.getChannelData(0);

        for (let i = 0; i < sampleCount; i += 1) {
          const progress = i / sampleCount;
          const noise = Math.random() * 2 - 1;
          channelData[i] = noise * Math.pow(1 - progress, 1.5);
        }

        const whooshSource = ctx.createBufferSource();
        whooshSource.buffer = noiseBuffer;

        const whooshFilter = ctx.createBiquadFilter();
        whooshFilter.type = "bandpass";
        whooshFilter.frequency.value = 1100;
        whooshFilter.Q.value = 0.7;

        const whooshGain = ctx.createGain();
        whooshGain.gain.setValueAtTime(0.0001, now);
        whooshGain.gain.exponentialRampToValueAtTime(0.16, now + 0.03);
        whooshGain.gain.exponentialRampToValueAtTime(0.0001, now + noiseDuration);

        whooshSource.connect(whooshFilter);
        whooshFilter.connect(whooshGain);
        whooshGain.connect(ctx.destination);

        whooshSource.start(now);
        whooshSource.stop(now + noiseDuration + 0.02);

        const pageTap = ctx.createOscillator();
        pageTap.type = "triangle";
        pageTap.frequency.setValueAtTime(190, now + 0.03);
        pageTap.frequency.exponentialRampToValueAtTime(110, now + 0.13);

        const tapGain = ctx.createGain();
        tapGain.gain.setValueAtTime(0.0001, now + 0.02);
        tapGain.gain.exponentialRampToValueAtTime(0.07, now + 0.05);
        tapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

        pageTap.connect(tapGain);
        tapGain.connect(ctx.destination);

        pageTap.start(now + 0.02);
        pageTap.stop(now + 0.18);
      };

      if (ctx.state === "suspended") {
        ctx.resume().then(emitFlipSound).catch(() => {});
      } else {
        emitFlipSound();
      }
    } catch (_error) {
      // Ignore sound failures so page navigation always stays smooth.
    }
  }, [getAudioContext]);

  const onDocumentLoadSuccess = useCallback(({ numPages: totalPages }) => {
    setNumPages(totalPages);
    setPageNumber((current) => clamp(current, 1, totalPages));
    setLoadError("");
  }, []);

  const onDocumentLoadError = useCallback((error) => {
    const reason =
      error && typeof error.message === "string" && error.message.trim()
        ? error.message
        : "Unknown PDF loading error";

    console.error("Prospectus PDF load error:", error);
    setLoadError(`The prospectus could not be loaded. ${reason}`);
  }, []);

  const goToPage = useCallback(
    (direction) => {
      setPageNumber((currentPage) => {
        if (!numPages) return currentPage;

        const nextPage = clamp(currentPage + direction, 1, numPages);
        if (nextPage !== currentPage) {
          setFlipDirection(direction > 0 ? "next" : "prev");
          playFlipSound();
        }

        return nextPage;
      });
    },
    [numPages, playFlipSound]
  );

  const isAtFirstPage = pageNumber <= 1;
  const isAtLastPage = numPages > 0 && pageNumber >= numPages;

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-light overflow-hidden">
      <div className="absolute -top-16 -left-10 w-52 h-52 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-10 w-60 h-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 animate-on-scroll">
          <p className="text-secondary uppercase tracking-[0.18em] text-xs sm:text-sm font-bold mb-2">
            Ali Public School Premier Prospectus
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl text-primary font-bold">
            Flip Through Our Prospectus
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Use the Next and Previous buttons to turn pages and explore our school programmes in detail.
          </p>
        </div>

        <div
          ref={containerRef}
          className="w-full max-w-4xl mx-auto rounded-2xl border border-primary/10 bg-white p-3 sm:p-5 shadow-2xl"
        >
          {loadError ? (
            <div className="rounded-xl bg-red-50 border border-red-100 p-6 text-center text-red-700 text-sm sm:text-base">
              {loadError}
            </div>
          ) : (
            <Document
              file={prospectusPdf}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="py-16 text-center text-primary/80 font-semibold">
                  Loading prospectus...
                </div>
              }
            >
              <div className="rounded-xl bg-gray-50 border border-gray-100 overflow-hidden min-h-[320px] flex justify-center items-center">
                <div
                  key={pageNumber}
                  className={
                    flipDirection === "next" ? "page-flip-next" : "page-flip-prev"
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    width={pageWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    loading={
                      <div className="py-16 text-center text-primary/70 text-sm">
                        Rendering page...
                      </div>
                    }
                  />
                </div>
              </div>
            </Document>
          )}

          <div className="mt-6 flex flex-col items-center gap-4">
            <p className="text-primary font-semibold text-sm sm:text-base">
              {numPages ? `Page ${pageNumber} of ${numPages}` : "Page -- of --"}
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goToPage(-1)}
                disabled={isAtFirstPage || !numPages}
                className="px-5 py-2.5 rounded-lg border border-primary/20 bg-white text-primary font-bold hover:bg-primary hover:text-white disabled:opacity-45 disabled:cursor-not-allowed transition-all duration-300"
              >
                Previous
              </button>

              <button
                type="button"
                onClick={() => goToPage(1)}
                disabled={isAtLastPage || !numPages}
                className="px-5 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-secondary hover:text-primary disabled:opacity-45 disabled:cursor-not-allowed transition-all duration-300"
              >
                Next
              </button>
            </div>

            <a
              href={prospectusPdf}
              target="_blank"
              rel="noreferrer"
              className="text-sm sm:text-base font-semibold text-secondary hover:text-primary transition-colors"
            >
              Open full prospectus in a new tab
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pageFromRight {
          from {
            opacity: 0;
            transform: translateX(32px) rotateY(-10deg) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg) scale(1);
          }
        }

        @keyframes pageFromLeft {
          from {
            opacity: 0;
            transform: translateX(-32px) rotateY(10deg) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg) scale(1);
          }
        }

        .page-flip-next {
          animation: pageFromRight 280ms ease-out;
          transform-origin: left center;
        }

        .page-flip-prev {
          animation: pageFromLeft 280ms ease-out;
          transform-origin: right center;
        }
      `}</style>
    </section>
  );
};

export default ProspectusFlipbook;
