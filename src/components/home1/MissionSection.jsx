import React from 'react';
import { FaHandHoldingHeart, FaAward, FaUsers, FaLightbulb, FaShieldAlt, FaHandsHelping } from 'react-icons/fa';

const MissionSection = () => {
  // Core Values from Document
  const values = [
    { icon: <FaShieldAlt />, title: "Integrity" },
    { icon: <FaUsers />, title: "Respect" },
    { icon: <FaHandHoldingHeart />, title: "Compassion" },
    { icon: <FaAward />, title: "Excellence" },
    { icon: <FaLightbulb />, title: "Courage" },
    { icon: <FaHandsHelping />, title: "Service" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decor (Subtle Purple Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- PART 1: MISSION STATEMENT --- */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-fade-in">
            Our Purpose
          </span>
          
          <h2 className="font-heading text-3xl md:text-5xl text-primary font-bold mb-8">
            OUR MISSION
          </h2>
          
          <div className="relative">
            {/* Decorative Quotes */}
            <span className="absolute -top-8 -left-4 text-6xl text-secondary/20 font-serif">“</span>
            
            <p className="font-body text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic">
              To inspire every child to become a learner for life — curious, confident, and guided by values that build strong character and sound judgment.
            </p>
            
            <span className="absolute -bottom-12 -right-4 text-6xl text-secondary/20 font-serif transform rotate-180">“</span>
          </div>
        </div>

        {/* --- PART 2: CORE VALUES --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {values.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-light rounded-xl border border-transparent hover:border-secondary/30 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary text-xl mb-3 shadow-sm group-hover:bg-primary group-hover:text-secondary transition-colors">
                {item.icon}
              </div>
              <h4 className="font-heading text-sm font-bold text-primary tracking-wide">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MissionSection;