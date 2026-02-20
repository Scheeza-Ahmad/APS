import React from 'react';
import { FaShapes, FaBookOpen, FaUniversity, FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AcademicsSection = () => {
  // Levels data strictly from your text
  const levels = [
    {
      title: "Early Years",
      age: "Ages 3–7",
      icon: <FaShapes />
    },
    {
      title: "Junior School",
      age: "Ages 8–12",
      icon: <FaBookOpen />
    },
    {
      title: "Senior School",
      age: "Ages 13–16",
      icon: <FaUniversity />
    },
    {
      title: "College",
      age: "F.Sc. / FA / Pre-Med",
      icon: <FaGraduationCap />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-fade-in">
            Academic Pathways
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-6 uppercase">
            ACADEMICS OVERVIEW
          </h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed">
            Learning at APS is about more than books. It’s about exploration, creativity, and the confidence to think for yourself.
          </p>
        </div>

        {/* --- Levels Offered Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {levels.map((level, index) => (
            <div 
              key={index} 
              className="bg-light border border-gray-100 p-8 rounded-xl text-center group hover:shadow-xl hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-3xl text-primary mb-6 group-hover:bg-primary group-hover:text-secondary transition-colors">
                {level.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">
                {level.title}
              </h3>
              <p className="font-body text-secondary font-bold text-sm tracking-wide uppercase">
                {level.age}
              </p>
            </div>
          ))}
        </div>

        {/* --- Button --- */}
        <div className="text-center">
          <Link 
            to="/academics" 
            className="inline-flex items-center gap-3 bg-secondary text-primary font-heading font-bold py-4 px-10 rounded shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            Discover Our Academics <FaArrowRight className="text-sm" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AcademicsSection;