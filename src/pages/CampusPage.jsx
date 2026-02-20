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
      description: "Administrative center for school leadership"
    },
    {
      title: "Elegant Entrance Porch",
      icon: FaDoorOpen,
      description: "Welcoming entrance with secure access control"
    },
    {
      title: "Water-play Corner",
      icon: FaTint,
      description: "Safe water play area for sensory development"
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
      description: "Elegant entrance porch with secure access"
    },
    {
      id: 2,
      title: "Classroom Interior",
      description: "Bright and spacious learning environment"
    },
    {
      id: 3,
      title: "Outdoor Garden",
      description: "Eco-friendly outdoor learning space"
    },
    {
      id: 4,
      title: "Art Studio",
      description: "Creative space for artistic expression"
    },
    {
      id: 5,
      title: "Reading Loft",
      description: "Cozy library and reading area"
    },
    {
      id: 6,
      title: "AI Learning Corner",
      description: "Technology hub for digital learning"
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
                  <div>
                    <h4 className="font-bold text-[#29234B] mb-1">{facility.title}</h4>
                    <p className="text-[#29234B]/60 text-sm">{facility.description}</p>
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
            {/* Main Image Display */}
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#29234B] to-[#3D366A] animate-pulse-subtle"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <FaImages className="text-white/30 text-6xl mb-4 mx-auto" />
                  <p className="text-white/60 font-heading text-xl">Campus Images Coming Soon</p>
                  <p className="text-white/40 text-sm mt-2">Photo gallery will be updated regularly</p>
                </div>
              </div>
              
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
            
            {/* Thumbnail Strip */}
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {campusImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden ${
                    activeImage === index 
                      ? 'ring-2 ring-[#D4AF37] ring-offset-2' 
                      : 'opacity-70 hover:opacity-100'
                  } transition-all duration-300`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <FaImages className="text-gray-400" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Map & Location Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#29234B] mb-4 animate-text-focus">
              Location & Directions
            </h2>
            <p className="text-lg text-[#29234B]/60 max-w-2xl mx-auto animate-text-slide">
              Conveniently located in University Town with easy access
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="md:flex">
              {/* Map Placeholder */}
              <div className="md:w-2/3 bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex flex-col items-center justify-center min-h-64">
                <div className="text-center">
                  <FaMap className="text-[#29234B]/30 text-5xl mb-4 mx-auto" />
                  <h3 className="font-heading text-2xl font-bold text-[#29234B] mb-2">Campus Location</h3>
                  <p className="text-[#29234B]/60 mb-6">University Town, Peshawar</p>
                  <div className="inline-flex items-center px-4 py-2 bg-[#29234B] text-white rounded-lg">
                    <FaMapMarkerAlt className="mr-2" />
                    View on Google Maps
                  </div>
                </div>
              </div>
              
              {/* Directions Info */}
              <div className="md:w-1/3 bg-gradient-to-b from-[#FAFAFA] to-white p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaParking className="text-[#D4AF37] text-xl mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#29234B] mb-1">Parking Facilities</h4>
                      <p className="text-[#29234B]/60 text-sm">Designated parking for parents and staff</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaShieldAlt className="text-[#10B981] text-xl mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#29234B] mb-1">Approach Notes</h4>
                      <p className="text-[#29234B]/60 text-sm">Controlled access through main gate only</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <GiSecurityGate className="text-[#29234B] text-xl mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#29234B] mb-1">Drop-off Zone</h4>
                      <p className="text-[#29234B]/60 text-sm">Dedicated lane for safe pick-up/drop-off</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-bold text-[#29234B] mb-2">Visiting Hours</h4>
                    <p className="text-[#29234B]/60 text-sm">8:00 AM - 4:00 PM (By appointment only)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#29234B] via-[#3D366A] to-[#29234B] rounded-2xl p-8 md:p-12 text-center animate-pulse-gentle">
          <div className="max-w-3xl mx-auto">
            <FaSchool className="text-[#D4AF37] text-4xl mb-6 mx-auto animate-bounce-slow" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 animate-text-focus">
              Schedule a Campus Tour
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience our premium facilities firsthand. Book a personalized tour to see how APS Premier provides the perfect environment for your child's growth and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/campusadmissionspage"
                className="bg-gradient-to-r from-[#D4AF37] to-[#C19C2E] text-[#29234B] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 shadow-lg animate-pulse-soft"
              >
                Book Campus Tour
              </Link>
              <Link 
                to="/contact"
                className="bg-white/10 backdrop-blur-sm border border-[#D4AF37]/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 animate-bounce-subtle"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-gentle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes pulse-soft {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.3);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(212, 175, 55, 0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        
        @keyframes text-focus {
          from {
            letter-spacing: -0.5px;
            opacity: 0.7;
          }
          to {
            letter-spacing: normal;
            opacity: 1;
          }
        }
        
        @keyframes text-slide {
          from {
            transform: translateX(-10px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(212, 175, 55, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
          }
        }
        
        @keyframes card-float {
          0%, 100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-5px) rotate(0.5deg);
          }
        }
        
        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes row-enter {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes section-enter {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-text-focus {
          animation: text-focus 0.8s ease-out forwards;
        }
        
        .animate-text-slide {
          animation: text-slide 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-card-float {
          animation: card-float 3s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 30s linear infinite;
        }
        
        .animate-row-enter {
          animation: row-enter 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-section-enter {
          animation: section-enter 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CampusPage;