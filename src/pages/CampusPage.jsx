import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSchool, 
  FaBook, 
  FaPaintBrush, 
  FaTree, 
  FaTint,
  FaLaptop,
  FaUserMd,
  FaUserTie,
  FaChalkboardTeacher,
  FaDoorOpen,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaParking,
  FaArrowLeft,
  FaCheckCircle,
  FaImages,
  FaMap,
  FaVideo,
  FaExpand,
  FaChevronLeft,
  FaChevronRight,
  FaChild
} from 'react-icons/fa';
import { GiTeacher, GiSecurityGate, GiBabyFace } from 'react-icons/gi';
import { MdClass, MdMeetingRoom, MdHealthAndSafety, MdToys } from 'react-icons/md';
import schoolOverview from "../assets/images/pages/schooloverview.jpeg";
import schoolInterior from "../assets/images/pages/interior.jpeg";
import schoolGarden from "../assets/images/pages/garden.jpeg";
import schoolartStudio from "../assets/images/pages/artstudio.jpeg";
import schoolPlayArea from "../assets/images/pages/playarea.jpeg";
import schoolActivityArea from "../assets/images/pages/activity.jpeg";
import principalOffice from "../assets/images/pages/office.jpeg";





const CampusPage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const campusHighlights = [
    {
      title: "8 Bright Classrooms",
      icon: MdClass,
      description: "Spacious, well-lit classrooms with modern furniture and learning aids",
      features: ["Natural lighting", "Smart boards", "Comfortable seating", "Learning corners"],
      color: "from-[#29234B] to-[#3D366A]"
    },
    {
      title: "Early Years Discovery Room",
      icon: MdToys,
      description: "Specialized space for sensory play and early childhood development",
      features: ["Sensory toys", "Soft play area", "Interactive walls", "Creative zones"],
      color: "from-[#D4AF37] to-[#C19C2E]"
    },
    {
      title: "Reading Loft/Library",
      icon: FaBook,
      description: "Cozy reading space with extensive collection of age-appropriate books",
      features: ["Comfortable seating", "Digital catalog", "Storytelling area", "Quiet zones"],
      color: "from-[#10B981] to-[#0DA271]"
    },
    {
      title: "Art & Imagination Studio",
      icon: FaPaintBrush,
      description: "Creative space for artistic expression with various art materials",
      features: ["Art supplies", "Display walls", "Wash stations", "Project space"],
      color: "from-[#29234B] to-[#3D366A]"
    },
    {
      title: "Outdoor Learning Garden",
      icon: FaTree,
      description: "Safe outdoor area with eco-grass, rubber flooring, and shaded deck",
      features: ["Eco-friendly grass", "Rubber safety flooring", "Shaded areas", "Learning stations"],
      color: "from-[#D4AF37] to-[#C19C2E]"
    },
    {
      title: "AI & Digital Learning Corner",
      icon: FaLaptop,
      description: "Technology hub with interactive boards and supervised learning",
      features: ["Interactive whiteboards", "Tablet stations", "Coding tools", "Supervised access"],
      color: "from-[#10B981] to-[#0DA271]"
    },
    {
      title: "Medical & Wellness Room",
      icon: FaUserMd,
      description: "Fully equipped medical facility with trained staff",
      features: ["First aid supplies", "Resting beds", "Health monitoring", "Emergency protocols"],
      color: "from-[#29234B] to-[#3D366A]"
    },
    {
      title: "Teacher Workroom",
      icon: FaChalkboardTeacher,
      description: "Dedicated space for teacher planning and collaboration",
      features: ["Planning stations", "Resource library", "Meeting area", "Technology access"],
      color: "from-[#D4AF37] to-[#C19C2E]"
    }
  ];

  const additionalFacilities = [
    {
      title: "Principal's Office",
      icon: FaUserTie,
      description: "Administrative center for school leadership",
      image:principalOffice
    },
    {
      title: "Elegant Entrance Porch",
      icon: FaDoorOpen,
      description: "Welcoming entrance with secure access control",
      image:schoolOverview
    },
    {
      title: "Green-play Corner",
      icon: FaTint,
      description: "Safe water play area for sensory development",
      image:schoolGarden
    },
    {
      title: "Dedicated Drop-off Lane",
      icon: GiSecurityGate,
      description: "Secure drop-off and pick-up zone for parents"
    },
    {
      title: "CCTV & Security Systems",
      icon: FaShieldAlt,
      description: "24/7 surveillance and controlled campus access"
    },
    {
      title: "Admin Office",
      icon: MdMeetingRoom,
      description: "Reception and administrative support area"
    }
  ];

  const safetyFeatures = [
    {
      title: "Controlled Access",
      description: "Secure entry points with access control systems"
    },
    {
      title: "24/7 CCTV Surveillance",
      description: "Comprehensive camera coverage throughout campus"
    },
    {
      title: "Emergency Protocols",
      description: "Regular drills and trained response teams"
    },
    {
      title: "Safe Materials",
      description: "Child-friendly, non-toxic materials in all areas"
    },
    {
      title: "Trained Security Staff",
      description: "Certified security personnel on duty"
    },
    {
      title: "First Aid Certified",
      description: "All staff trained in pediatric first aid"
    }
  ];

  const campusImages = [
    {
      id: 1,
      title: "Main Entrance",
      description: "Elegant entrance porch with secure access",
      image: schoolOverview
    },
    {
      id: 2,
      title: "Classroom Interior",
      description: "Bright and spacious learning environment",
      image: schoolInterior
    },
    {
      id: 3,
      title: "Outdoor Garden",
      description: "Eco-friendly outdoor learning space",
      image: schoolGarden
    },
    {
      id: 4,
      title: "Art Studio",
      description: "Creative space for artistic expression",
      image: schoolartStudio
    },
    {
      id: 5,
      title: "Activity Area",
      description: "An activity Area for grooming of students",
      image: schoolActivityArea
    },
    {
      id: 6,
      title: "PlayArea",
      description: "A green play area for physical activity of students",
      image: schoolPlayArea
    }
  ];

  const handleNextImage = () => {
    setActiveImage((prev) => (prev + 1) % campusImages.length);
  };

  const handlePrevImage = () => {
    setActiveImage((prev) => (prev - 1 + campusImages.length) % campusImages.length);
  };

  const handleImageClick = (index) => {
    setActiveImage(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-[#FAFAFA] via-white to-[#FAFAFA] text-[#29234B] py-20 px-4 md:px-8 overflow-hidden border-b border-[#E5E7EB]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#D4AF37]/10 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#10B981]/10 animate-float"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center mb-8 animate-slide-in-left">
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 animate-pulse-gentle border border-[#D4AF37]/30 shadow-sm">
              <FaSchool className="mr-2 text-[#D4AF37]" />
              <span className="font-semibold text-[#D4AF37]">Premier Campus</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-text-focus text-[#29234B]">
              CAMPUS & FACILITIES
            </h1>
            <p className="text-xl text-[#29234B]/70 mb-6 leading-relaxed animate-text-slide">
              A Purpose-Built Modern Primary School
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto mb-8 animate-fade-in-up border border-gray-200">
              <p className="text-lg text-[#29234B] leading-relaxed">
                Designed to feel safe, warm, and inspiring — <span className="font-bold text-[#29234B]">APS Premier</span> offers a premium early-years environment in University Town. Our campus combines modern facilities with child-centered design for optimal learning and development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Campus Highlights Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
              Campus Highlights
            </h2>
            <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
              State-of-the-art facilities designed for holistic development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-section-enter group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="text-white text-2xl" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#29234B] mb-3 text-center">
                  {highlight.title}
                </h3>
                <p className="text-[#29234B]/70 mb-4 text-sm text-center">
                  {highlight.description}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-[#29234B] text-sm mb-2">Features:</h4>
                  <ul className="space-y-2">
                    {highlight.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-[#29234B]/60">
                        <FaCheckCircle className="text-[#10B981] mr-2 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Facilities Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
              Additional Facilities
            </h2>
            <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
              Comprehensive infrastructure supporting every aspect of school life
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalFacilities.map((facility, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 border border-gray-200 rounded-xl hover:border-[#D4AF37] hover:shadow-md transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={`w-10 h-10 rounded-lg ${
                    index % 3 === 0 ? 'bg-gradient-to-br from-[#29234B]/10 to-[#29234B]/5' :
                    index % 3 === 1 ? 'bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5' :
                    'bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5'
                  } flex items-center justify-center mr-4 flex-shrink-0`}>
                    <facility.icon className={`text-lg ${
                      index % 3 === 0 ? 'text-[#29234B]' :
                      index % 3 === 1 ? 'text-[#D4AF37]' :
                      'text-[#10B981]'
                    }`} />
                  </div>
                  <div className="w-full">
                    <h4 className="font-bold text-[#29234B] mb-1">{facility.title}</h4>
                    <p className="text-[#29234B]/60 text-sm">{facility.description}</p>
                    {facility.image && (
                      <img 
                        src={facility.image} 
                        alt={facility.title} 
                        className="mt-3 w-full h-32 object-cover rounded-lg shadow-sm border border-gray-100" 
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety & Security Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
              Safety & Safeguarding
            </h2>
            <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
              Comprehensive security measures for complete peace of mind
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#29234B] to-[#3D366A] rounded-2xl p-8 text-white">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mr-4">
                <FaShieldAlt className="text-[#D4AF37] text-xl" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                Security Features
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-all duration-300 animate-slide-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mr-3">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                    </div>
                    <h4 className="font-bold text-white text-lg">{feature.title}</h4>
                  </div>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center">
                  <MdHealthAndSafety className="text-[#10B981] text-2xl mr-3" />
                  <div>
                    <h4 className="font-bold text-white">Health & Wellness</h4>
                    <p className="text-white/60 text-sm">Regular health checks and wellness programs</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaShieldAlt className="text-[#D4AF37] text-2xl mr-3" />
                  <div>
                    <h4 className="font-bold text-white">Parent Access Control</h4>
                    <p className="text-white/60 text-sm">Secure pick-up and drop-off procedures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Gallery */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
              Campus Gallery
            </h2>
            <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
              Explore our modern learning spaces and facilities
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-6">
              <img 
                src={campusImages[activeImage].image} 
                alt={campusImages[activeImage].title} 
                className="w-full h-full object-cover rounded-xl"
              />

              {/* Navigation Buttons */}
              <button 
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <FaChevronRight />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-bold text-white text-lg">{campusImages[activeImage].title}</h3>
                  <p className="text-white/80 text-sm">{campusImages[activeImage].description}</p>
                </div>
              </div>

              {/* Expand Button */}
              <button 
                onClick={() => setIsGalleryOpen(true)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <FaExpand />
              </button>
            </div>
          </div>
        </div>

        {/* Campus Location Map */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
              Campus Location
            </h2>
            <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
              Find us easily in University Town, Peshawar
            </p>
          </div>
          <div className="md:w-2/3 p-8 mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105663.07842777124!2d71.45873760447192!3d33.95758253683669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637f8ce148!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1716301323363!5m2!1sen!2s" 
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Campus Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusPage;