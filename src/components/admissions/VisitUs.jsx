import React from 'react';
import campusTour from "../../assets/videos/campustour.mp4";
import { Link } from 'react-router-dom';
const VisitUs = () => {
    return (
        <div className="py-12 md:py-16 lg:py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="animate-slide-up">
                        <div className="inline-flex items-center mb-4 md:mb-6">
                            <div className="w-8 h-1 md:w-12 md:h-1 bg-secondary mr-2 md:mr-3"></div>
                            <span className="text-secondary font-semibold text-sm md:text-base">VISIT US</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-4 md:mb-6">
                            Explore Our <span className="text-secondary">Purpose-Built</span> Campus
                        </h2>

                        <p className="text-gray-600 mb-6 md:mb-8 font-body text-sm md:text-base lg:text-lg leading-relaxed">
                            Schedule an appointment to tour our modern facilities designed for 21st-century learning.
                        </p>

                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-start space-x-3 md:space-x-4 animate-fade-in animation-delay-300">
                                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-xl md:text-2xl text-primary">📍</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1 md:mb-2 text-base md:text-lg">Multiple Locations</h4>
                                    <p className="text-gray-600 text-xs md:text-sm">8 campuses across Lahore, Gujranwala, and Islamabad</p>
                                    <button className="mt-1 md:mt-2 text-secondary font-medium hover:underline flex items-center text-xs md:text-sm">
                                        View all locations
                                        <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 md:space-x-4 animate-fade-in animation-delay-400">
                                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-xl md:text-2xl text-secondary">🕒</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1 md:mb-2 text-base md:text-lg">Flexible Timings</h4>
                                    <div className="space-y-1">
                                        <p className="text-gray-600 text-xs md:text-sm flex items-center">
                                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary rounded-full mr-1 md:mr-2"></span>
                                            Mon-Fri: 8:00 AM - 4:00 PM
                                        </p>
                                        <p className="text-gray-600 text-xs md:text-sm flex items-center">
                                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary rounded-full mr-1 md:mr-2"></span>
                                            Saturday: 9:00 AM - 1:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 md:space-x-4 animate-fade-in animation-delay-500">
                                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-emerald/5 to-emerald/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-xl md:text-2xl text-emerald">📞</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1 md:mb-2 text-base md:text-lg">Get in Touch</h4>
                                    <div className="space-y-1">
                                        <p className="text-gray-600 text-xs md:text-sm flex items-center">
                                            <span className="w-2 h-2 md:w-3 md:h-3 bg-emerald/20 rounded-full mr-1 md:mr-2 flex items-center justify-center">
                                                <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-emerald rounded-full"></span>
                                            </span>
                                            +92 91 5700035
                                        </p>
                                        <p className="text-gray-600 text-xs md:text-sm flex items-center">
                                            <span className="w-2 h-2 md:w-3 md:h-3 bg-emerald/20 rounded-full mr-1 md:mr-2 flex items-center justify-center">
                                                <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-emerald rounded-full"></span>
                                            </span>
                                            principal@apspremier.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="/campuspage" className="inline-block">
                            <button className="mt-6 md:mt-8 group px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary to-navy-80 text-white font-subheading font-semibold rounded-lg hover:shadow-xl md:hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-sm md:text-base animate-scale-in animation-delay-700">
                                <span>See Our Campus Highlights</span>
                                <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </a>
                    </div>

                    <div className="relative animate-slide-up animation-delay-300 mt-8 lg:mt-0">
                        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border border-gold-10 overflow-hidden">
                            {/* Virtual Tour Header */}
                            <div className="bg-gradient-to-r from-primary to-navy-80 p-4 md:p-6 text-center">
                                <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
                                    Virtual Campus Tour
                                </h3>
                                <p className="text-white/90 mt-1 md:mt-2 text-sm md:text-base">Experience our campus from anywhere</p>
                            </div>

                            {/* Tour Preview with Actual Video */}
                            <div className="p-4 md:p-6 lg:p-8">
                                <div className="aspect-video bg-black rounded-lg md:rounded-xl border border-gold-20 overflow-hidden mb-4 md:mb-6">
                                    <video
                                        className="w-full h-full object-cover"
                                        src={campusTour}
                                        autoPlay
                                        loop
                                        muted
                                        controls // Yeh volume, play/pause aur full screen ka option dega
                                        playsInline // Mobile pe theek chalne ke liye
                                    />
                                </div>

                                <div className="space-y-3 md:space-y-4">
                                    {/* Yahan se Start Virtual Tour ka button remove kar diya gaya hai */}

                                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                                        {/* Photo Gallery Link */}
                                        <Link to="/campuspage" className="w-full">
                                            <button className="w-full py-2 md:py-3 bg-white border border-gold-10 text-gray-700 rounded-lg hover:border-secondary hover:text-primary transition-all duration-300 text-xs md:text-sm font-medium">
                                                Photo Gallery
                                            </button>
                                        </Link>

                                        {/* Brochure ke liye a tag hi behtar hai kyunke wo external file hoti hai */}
                                        <a href="/brochure.pdf" download className="w-full">
                                            <button className="w-full py-2 md:py-3 bg-white border border-gold-10 text-gray-700 rounded-lg hover:border-secondary hover:text-primary transition-all duration-300 text-xs md:text-sm font-medium">
                                                Download Brochure
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitUs;