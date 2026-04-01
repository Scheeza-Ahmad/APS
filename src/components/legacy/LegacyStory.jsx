import React from 'react';
import { FaBookReader, FaUserTie, FaSchool } from 'react-icons/fa';

import founderImg from "../../assets/images/pages/founder.jpeg";

const LegacyStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* --- Chapter 1: The Beginning --- */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
          <div className="w-full md:w-1/3">
            <div className="bg-light p-8 rounded-2xl border-l-4 border-secondary shadow-sm">
              <FaBookReader className="text-4xl text-primary mb-4" />
              <h3 className="font-heading text-2xl text-primary font-bold mb-2">Humble Roots</h3>
              <p className="text-gray-600 text-sm">A commitment born from personal experience.</p>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="font-heading text-3xl text-primary font-bold mb-6">The Dream of a Son</h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
              The story of Ali Public School is not just about buildings or books; it is a story of grit and determination.
              Our founder grew up in a household where education was a distant dream. His father, a hardworking man,
              could not read or write. He saw the struggles of a life without education firsthand.
            </p>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              But he had a vision. He promised himself that he would not only educate himself but would one day
              make quality education accessible to every child in his community, regardless of their background.
            </p>
          </div>
        </div>

        {/* --- Chapter 2: Bridging Continents & Founder's Vision --- */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2">
            {/* 📸 FOUNDER PICTURE PLACEHOLDER ✅ */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white bg-gray-100 group">
              
              {/* --- Asal Image Lagane Ki Jagah --- */}
              <img
                src={founderImg} // Asal image ke liye is line ko uncomment karein aur niche wali ko comment
                alt="Ali Afridi FCA - Founder Ali Public School"
                className="w-full h-auto min-h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Designation Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6 pt-12">
                <div className="flex items-center gap-3">
                    <FaUserTie className="text-secondary text-2xl"/>
                    <div>
                        <p className="text-white font-bold font-heading text-lg">Ali Afridi FCA</p>
                        <p className="text-secondary text-sm font-medium">Founder, Ali Public School</p>
                    </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                 <FaSchool className="text-white text-xl"/>
              </div>
            </div>
            <p className="text-center text-gray-500 text-xs mt-4 italic">Mr. Ali Afridi FCA, Chartered Accountant & Educational Visionary</p>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="font-heading text-3xl text-primary font-bold mb-6">Bridging Continents</h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
              Ali Afridi FCA is the Founder of Ali Public School – Premier Campus and a British-educated Chartered Accountant with extensive international professional experience.
              Mr. Afridi completed his education in the United Kingdom, progressing through the IGCSE academic framework before qualifying as a Chartered Accountant. His professional formation in the UK instilled in him a deep appreciation for structured learning, disciplined institutional standards, and the role that high-quality schooling plays in shaping future leaders.
              He began his professional career with KPMG, one of the world’s leading professional services firms. Over the course of his career he has held senior leadership positions with globally recognised organisations including Cisco Systems and Saudi Telecom Company (stc).
              Through these roles he gained significant experience in governance, strategy, and organisational leadership across international environments in the United Kingdom and the Middle East.
              Inspired by these experiences, Mr. Afridi established Ali Public School – Premier Campus with the goal of bringing high standards of education, discipline, and institutional integrity to young learners in Peshawar.
            </p>
            <p className="font-body text-gray-600 text-lg leading-relaxed border-l-4 border-primary pl-4 italic text-primary">
              “Our goal is to nurture confident learners, strong thinkers, and responsible future leaders.”
            </p>
          </div>
        </div>

        {/* --- New Section: Admissions & Features --- */}
        <div className="mt-24 border-t border-gray-100 pt-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 tracking-tight">ADMISSIONS 2026</h2>
            <div className="inline-block bg-secondary text-primary px-6 py-2 rounded-full font-bold text-lg animate-pulse">
              LIMITED SEATS NOW AVAILABLE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Oxford Curriculum", desc: "International academic standards for global competitiveness." },
              { title: "Qualified Faculty", desc: "Highly experienced teachers dedicated to student growth." },
              { title: "Secure Environment", desc: "A safe and nurturing space for focused learning." },
              { title: "Co-Curricular", desc: "Balanced development through sports and activities." }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow border-b-4 border-primary">
                <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LegacyStory;