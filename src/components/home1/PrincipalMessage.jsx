import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const PrincipalMessage = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-secondary blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-primary blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-light rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          
          {/* --- Image Side --- */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end relative">
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              {/* Gold Ring around Image */}
              <div className="absolute inset-0 rounded-full border-2 border-secondary scale-105 opacity-50"></div>
              
              {/* ✅ New Image: Professional Man for Mr. Ali */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800" 
                alt="Principal Mr. Ali" 
                className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
              />
              
              {/* Quote Icon Badge */}
              <div className="absolute bottom-0 right-4 bg-secondary text-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <FaQuoteLeft className="text-xl" />
              </div>
            </div>
          </div>

          {/* --- Text Side --- */}
          <div className="w-full md:w-2/3 text-center md:text-left space-y-6">
            <div>
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-2 block">
                Leadership Vision
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">
                MESSAGE FROM THE PRINCIPAL
              </h2>
            </div>
            
            {/* EXACT QUOTE FROM DOCUMENT */}
            <blockquote className="font-body text-gray-600 text-lg md:text-xl italic leading-relaxed">
              "Education is a partnership between the school, parents, and community. Our role is to inspire, guide, and nurture each child while creating an environment where learning feels joyful and meaningful."
            </blockquote>
            
            <div className="pt-4 border-t border-gray-200 inline-block md:block">
              {/* Name: Mr. Ali */}
              <h4 className="font-heading text-xl font-bold text-primary">
                Mr. Ali
              </h4>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-subheading mt-1">
                Principal, Ali Public School & College
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;