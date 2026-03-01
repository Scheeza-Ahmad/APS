import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import studioImg from "../../assets/images/pages/studio.jpeg";
import classroom from "../../assets/images/pages/interior.jpeg";
import greenry from "../../assets/images/pages/greenry.png";
import learningCorner from "../../assets/images/pages/learningcorner.png";



const CampusGallery = () => {
  // Aapki batayi hui 4 nayi facilities
  const facilities = [
    {
      title: "State-of-the-Art Classrooms",
      desc: "Bright, spacious, and modern learning environments",
      img: classroom, // Yahan aap apni classroom ki image laga sakti hain
      colSpan: "md:col-span-2 md:row-span-2", // Big Main Image
      height: "h-96"
    },
    {
      title: "Modern Cafeteria",
      desc: "Clean, hygienic, and healthy food options",
      img: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=800", // Canteen ki dummy image
      colSpan: "md:col-span-1",
      height: "h-48"
    },
    {
      title: "Spacious Playground",
      desc: "Safe and fun outdoor sports activities",
      img: greenry, // Yahan playground ki image lagayein
      colSpan: "md:col-span-1",
      height: "h-48"
    },
    {
      title: "Interactive Learning Corners",
      desc: "Dedicated spaces for creative activities",
      img: learningCorner, // Learning corner ki dummy image
      colSpan: "md:col-span-2",
      height: "h-48"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
              Our Environment
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">
              A PURPOSE-BUILT MODERN SCHOOL
            </h2>
            <p className="text-gray-600 font-body text-lg leading-relaxed">
              Designed to feel safe, warm, and inspiring. From modern classrooms to spacious playgrounds, every corner fosters curiosity.
            </p>
          </div>
          
          {/* View Gallery Button */}
          <Link to="/campuspage" className="hidden md:flex items-center gap-2 text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors group">
            View Full Gallery 
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {facilities.map((item, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-xl cursor-pointer shadow-md ${item.colSpan} ${item.height}`}
            >
              {/* Image with Zoom Effect */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Overlay with Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-heading font-bold text-xl mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm font-body opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View Button */}
        <div className="mt-8 text-center md:hidden">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-secondary pb-1">
            View Full Gallery <FaArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CampusGallery;