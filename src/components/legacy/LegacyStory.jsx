import React from 'react';
import { FaBookReader } from 'react-icons/fa';

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

        {/* --- Chapter 2: The Journey to UK --- */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1548685913-fe6678babe8d?q=80&w=800" 
                alt="UK Education" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 bg-secondary text-primary px-6 py-2 font-bold font-heading">
                Global Standards
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-heading text-3xl text-primary font-bold mb-6">Bridging Continents</h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
              Driven by an unyielding passion, our founder journeyed to the <strong>United Kingdom</strong>. 
              There, he immersed himself in world-class educational systems, understanding how the best institutions 
              nurture young minds. He didn't just study for a degree; he studied for a purpose.
            </p>
            <p className="font-body text-gray-600 text-lg leading-relaxed border-l-4 border-primary pl-4 italic text-primary">
              "I wanted to bring the Oxford standard of learning back home, but without the exclusive price tag."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LegacyStory;