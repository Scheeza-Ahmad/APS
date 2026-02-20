import React from 'react';
import { Link } from 'react-router-dom';

const ExploreGrid = () => {
  // Content sourced strictly from APS Premier Document [cite: 153, 150]
  const cards = [
    { 
      title: "Early Years (Ages 3–7)", 
      img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800", // Young kid playing/learning
      link: "/academicspage",
      desc: "Phonics, nature play, and creative expression."
    },
    { 
      title: "Junior Primary (Ages 7–10)", 
      img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800", // Older kids discussing
      link: "/academicspage",
      desc: "Inquiry-based science, digital literacy, and mindfulness."
    },
    { 
      title: "Campus & Facilities", 
      img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800", // Modern library/space
      link: "/campuspage",
      desc: "AI corners, reading lofts, and outdoor learning gardens."
    },
    { 
      title: "Admissions 2025", 
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800", // Welcoming/Handshake
      link: "/campusadmissionspage",
      desc: "Join a community grounded in kindness and confidence."
    },
  ];

  return (
    // Bg-cream for Deep Purple text readability
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-3 tracking-wide">
            EXPLORE OUR PROGRAMS
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Link 
              to={card.link} 
              key={index} 
              className="group relative h-80 overflow-hidden rounded-xl shadow-lg cursor-pointer block border-2 border-white"
            >
              {/* Image */}
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Gradient Overlay (Purple Theme) */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent flex flex-col justify-end p-6 transition-all duration-300">
                
                {/* Card Title */}
                <h3 className="font-heading text-lg font-bold text-white tracking-wider border-l-4 border-secondary pl-3 mb-2 group-hover:text-secondary transition-colors">
                  {card.title}
                </h3>
                
                {/* Short Description (Visible on Hover/Always visible based on preference, here distinct text) */}
                <p className="font-body text-xs text-cream/90 opacity-90 transform translate-y-0 transition-transform">
                  {card.desc}
                </p>
                
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreGrid;