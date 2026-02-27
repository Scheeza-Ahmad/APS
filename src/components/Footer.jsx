import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaFilePdf,
  FaDownload,
  FaChevronRight
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import logo from '../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(null);

  return (
    // CHANGE 1: Background WHITE, Text DARK (Primary)
    <footer className="bg-white text-primary relative overflow-hidden border-t border-gray-200">

      {/* Animated background elements (Subtle for white bg) */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-secondary blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary blur-3xl"></div>
      </div>

      {/* --- ENHANCED CTA STRIP --- */}
      {/* Keeping CTA strip dark for contrast as per standard design, or change to white if strictly needed */}
     

      {/* --- MAIN FOOTER CONTENT --- */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand Info (Logo Updated) */}
          <div className="space-y-6 animate-fade-in-up">
            <Link to="/" className="flex flex-col items-start gap-4 group">
              {/* CHANGE 2: Logo Bigger, No Animation */}
              <img
                src={logo}
                alt="APS Logo"
                className="h-24 w-auto filter drop-shadow-md" 
              />
              
              <div>
                <span className="block font-heading text-2xl font-bold tracking-wider text-primary">
                  ALI PUBLIC SCHOOL
                </span>
                <span className="block font-subheading text-xs text-secondary font-bold tracking-[0.3em] uppercase mt-1">
                  Premier Campus
                </span>
              </div>
            </Link>

            <p className="font-body text-gray-600 text-sm leading-relaxed border-l-2 border-secondary pl-4 py-2">
              Nurturing future leaders with excellence. Providing holistic education that empowers students to excel academically and personally.
            </p>

            {/* Social Icons (Colors updated for white bg) */}
            <div className="flex gap-3 pt-4">
              {[
                { icon: FaFacebookF, href: '#' },
                { icon: FaInstagram, href: '#' },
                { icon: FaLinkedinIn, href: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h3 className="font-heading text-xl font-bold text-primary mb-8 relative pb-3">
              <span className="relative">
                Quick Links
                <span className="absolute -bottom-3 left-0 w-12 h-1 bg-secondary rounded-full"></span>
              </span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About Our Heritage', link: '/aboutpage' },
                { name: 'Academic Programs', link: '/academicspage' },
                { name: 'Admissions Process', link: '/campusadmissionspage' },
                { name: 'Campus & Facilities', link: '/campuspage' },
                { name: 'News & Updates', link: '/newsupdates' },
                { name: 'Student Life', link: '/studentlife' }
              ].map((item, idx) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="flex items-center gap-3 font-subheading text-gray-600 hover:text-secondary py-2 group transition-all duration-300"
                  >
                    <FaChevronRight size={10} className="text-secondary opacity-50 group-hover:opacity-100 transition-all" />
                    <span className="flex-1 border-b border-transparent group-hover:border-gray-200 transition-all duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Information & Downloads */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="font-heading text-xl font-bold text-primary mb-8 relative pb-3">
              <span className="relative">
                Information
                <span className="absolute -bottom-3 left-0 w-12 h-1 bg-secondary rounded-full"></span>
              </span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/academicspage" className="flex items-center gap-3 text-gray-600 hover:text-secondary group py-2 transition-colors duration-300">
                  <FaChevronRight size={10} className="text-secondary" />
                  <span>Careers at APS</span>
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="flex items-center gap-3 text-gray-600 hover:text-secondary group py-2 transition-colors duration-300">
                  <FaChevronRight size={10} className="text-secondary" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="flex items-center gap-3 text-gray-600 hover:text-secondary group py-2 transition-colors duration-300">
                  <FaChevronRight size={10} className="text-secondary" />
                  <span>FAQs</span>
                </Link>
              </li>

              {/* Download Card (Updated for White Bg) */}
              <li className="pt-6">
                <div className="relative group overflow-hidden rounded-xl border border-gray-200 hover:border-secondary transition-all duration-300 bg-gray-50 hover:shadow-md">
                  <div className="relative p-5">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <FaFilePdf className="text-red-600 text-3xl z-10 relative" />
                      </div>
                      <div className="flex-1">
                        <span className="block text-primary font-bold text-sm mb-1">Download Prospectus</span>
                        <span className="block text-gray-500 text-xs mb-3">{currentYear}-{currentYear + 1} Session</span>
                        <button className="flex items-center gap-2 text-secondary hover:text-primary text-sm font-bold group transition-colors">
                          <FaDownload />
                          <span>Download PDF</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (Updated Content from Doc) */}
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h3 className="font-heading text-xl font-bold text-primary mb-8 relative pb-3">
              <span className="relative">
                Contact Us
                <span className="absolute -bottom-3 left-0 w-12 h-1 bg-secondary rounded-full"></span>
              </span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="relative mt-1">
                  <FaMapMarkerAlt className="text-secondary text-xl z-10 relative" />
                </div>
                <div>
                  <span className="block text-primary font-bold text-sm mb-1">Our Campus</span>
                  <span className="text-gray-600 text-sm">
                    {/* Content from Doc [cite: 189-190] */}
                    29 C 17 Circular Road,<br />
                    University Town,<br />
                    Peshawar, Pakistan, 25000
                  </span>
                </div>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="relative">
                  <FaPhoneAlt className="text-secondary text-lg z-10 relative" />
                </div>
                <div>
                  <span className="block text-primary font-bold text-sm mb-1">Phone</span>
                  {/* Content from Doc [cite: 191] */}
                  <a href="tel:+92915700035" className="text-gray-600 hover:text-secondary text-sm transition-colors duration-300">
                    +92 91 5700035
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="relative">
                  <FiMail className="text-secondary text-lg z-10 relative" />
                </div>
                <div>
                  <span className="block text-primary font-bold text-sm mb-1">Email</span>
                  {/* Content from Doc [cite: 192] */}
                  <a href="mailto:principal@apspremier.com" className="text-gray-600 hover:text-secondary text-sm transition-colors duration-300">
                    principal@apspremier.com
                  </a>
                </div>
              </li>

              {/* WhatsApp Button */}
              <li className="pt-4">
                <a
                  href="https://wa.me/923408700002"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#20bd5a] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaWhatsapp size={22} />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="bg-gray-50 border-t border-gray-200 py-6 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-subheading text-gray-500 text-sm">
                © {currentYear} Ali Public School & College. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {[ 'Privacy Policy'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '')}`}
                  className="text-gray-500 hover:text-primary text-sm font-medium transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-gray-500 hover:text-secondary text-sm font-medium transition-all duration-300 group mt-4 md:mt-0"
            >
              <span>Back to Top</span>
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-secondary transition-all duration-300">
                <FaChevronRight className="transform -rotate-90 text-xs" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Animations CSS (Kept as requested) */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;