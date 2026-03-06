import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserGraduate, FaPenNib, FaBrain, FaBookOpen, FaUsers, FaGraduationCap } from 'react-icons/fa';

const JuniorSchoolSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const academicFocus = [
        {
            icon: <FaGraduationCap className="text-xl" />,
            text: "Structured academic progression"
        },
        {
            icon: <FaPenNib className="text-xl" />,
            text: "Development of writing and comprehension"
        },
        {
            icon: <FaBrain className="text-xl" />,
            text: "Logical reasoning and mathematical thinking"
        },
        {
            icon: <FaUserGraduate className="text-xl" />,
            text: "Encouraging independent study habits"
        },
        {
            icon: <FaUsers className="text-xl" />,
            text: "Confidence in classroom participation"
        }
    ];

    return (
        <section ref={ref} className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="max-w-6xl mx-auto"
                >
                    {/* Main Card with Junior School Theme */}
                    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-2xl">
                        
                        {/* Header - Navy Background */}
                        <div className="bg-[#29234B] px-8 py-10 text-center md:text-left relative">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <FaBookOpen className="text-9xl text-white" />
                            </div>
                            <div className="relative z-10">
                                <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
                                    Development Phase
                                </span>
                                <h2 className="font-heading text-3xl md:text-5xl text-white font-bold mb-4">
                                    PRIMARY YEARS PROGRAMME
                                </h2>
                                <p className="text-gray-300 font-medium text-lg tracking-wide uppercase">
                                    Grades 1 – 5
                                </p>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-8 md:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                
                                {/* Left: Visual Age Identifier */}
                                <motion.div variants={cardVariants} className="flex justify-center order-2 lg:order-1">
                                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                                        <div className="absolute inset-0 rounded-3xl border-4 border-[#29234B]/10 rotate-6 transition-transform group-hover:rotate-0"></div>
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-blue-50 flex items-center justify-center shadow-xl border border-gray-100">
                                            <div className="text-center">
                                                <div className="font-heading text-6xl md:text-7xl text-[#29234B] font-bold mb-2">
                                                    1–5
                                                </div>
                                                <div className="font-body text-[#D4AF37] font-bold text-sm tracking-widest uppercase">
                                                    Grades Offered
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Floating Achievement Dots */}
                                        <motion.div 
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg"
                                        >
                                            <span className="text-white">⭐</span>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Right: Programme Emphasis */}
                                <motion.div variants={cardVariants} className="order-1 lg:order-2">
                                    <h3 className="font-heading text-2xl text-[#29234B] font-bold mb-6">
                                        Independence in Learning
                                    </h3>
                                    <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
                                        During the primary years, students gradually develop greater independence in learning and stronger academic discipline, preparing them for future success.
                                    </p>
                                    
                                    <div className="space-y-4">
                                        {academicFocus.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                variants={cardVariants}
                                                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border-r-4 border-[#29234B] group hover:bg-[#D4AF37] transition-all duration-300"
                                            >
                                                <div className="text-[#29234B] group-hover:text-white transition-colors">
                                                    {item.icon}
                                                </div>
                                                <span className="font-body font-bold text-[#29234B] group-hover:text-white transition-colors text-sm">
                                                    {item.text}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Curriculum Note */}
                            <motion.div 
                                variants={cardVariants}
                                className="mt-16 py-6 border-t border-gray-100 text-center"
                            >
                                <p className="text-[#29234B] font-semibold">
                                    Following the <span className="text-[#D4AF37]">Oxford Curriculum</span> for Global Standards
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default JuniorSchoolSection;