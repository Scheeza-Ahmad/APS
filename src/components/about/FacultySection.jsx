import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaStar, FaAward, FaBook, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FacultyCard = ({ faculty, index }) => {
    const facultyCardVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.15
            }
        },
        hover: {
            y: -5,
            scale: 1.02,
            boxShadow: "0 10px 25px rgba(41, 35, 75, 0.1)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        }
    };

    const iconMap = {
        "Academic Director": <FaGraduationCap className="text-lg" />,
        "Head of Sciences": <FaBook className="text-lg" />,
        "Head of Humanities": <FaAward className="text-lg" />
    };

    const getIconColor = (role) => {
        switch (role) {
            case "Academic Director": return "text-primary";
            case "Head of Sciences": return "text-accent";
            case "Head of Humanities": return "text-secondary";
            default: return "text-secondary";
        }
    };

    return (
        <motion.div
            variants={facultyCardVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            custom={index}
            className="flex-shrink-0 w-72 md:w-80 bg-white rounded-xl shadow-lg border border-secondary/20 hover:shadow-xl transition-all duration-300 mx-2"
        >
            {/* Faculty Header */}
            <div className="p-5 border-b border-secondary/10">
                <div className="flex items-start justify-between mb-3">
                    <motion.div
                        className={`w-12 h-12 rounded-full ${getIconColor(faculty.role)}/20 flex items-center justify-center`}
                        whileHover={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className={getIconColor(faculty.role)}>
                            {iconMap[faculty.role] || <FaGraduationCap />}
                        </div>
                    </motion.div>
                    <motion.div
                        className="text-secondary text-xs font-bold px-2 py-1 rounded-full bg-secondary/10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        {faculty.experience}
                    </motion.div>
                </div>

                <h3 className="font-heading text-lg font-bold text-primary mb-1">
                    {faculty.name}
                </h3>

                <p className={`font-body ${getIconColor(faculty.role)} font-medium text-sm`}>
                    {faculty.role}
                </p>
            </div>

            {/* Faculty Details */}
            <div className="p-5">
                <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                        <FaGraduationCap className={`text-secondary mt-0.5 flex-shrink-0 ${getIconColor(faculty.role)}`} />
                        <div>
                            <p className="font-body text-primary/90 text-xs font-semibold mb-0.5">
                                Qualification:
                            </p>
                            <p className="font-body text-primary/80 text-xs leading-relaxed">
                                {faculty.qualification}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                        <FaStar className={`text-secondary mt-0.5 flex-shrink-0 ${getIconColor(faculty.role)}`} />
                        <div>
                            <p className="font-body text-primary/90 text-xs font-semibold mb-0.5">
                                Expertise:
                            </p>
                            <p className="font-body text-primary/80 text-xs leading-relaxed">
                                {faculty.expertise}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="border-t border-secondary/10 pt-4">
                    <div className="flex items-center gap-2 mb-3">
                        <div className={`h-0.5 w-6 ${getIconColor(faculty.role)}`}></div>
                        <h4 className="font-heading text-sm font-bold text-primary">
                            Notable Achievements
                        </h4>
                    </div>

                    <ul className="space-y-2">
                        {faculty.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${getIconColor(faculty.role)}`}></div>
                                <span className="font-body text-primary/80 text-xs leading-relaxed">
                                    {achievement}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

const FacultySection = () => {
    const scrollContainerRef = useRef(null);

    const facultyMembers = [
        {
            name: "Dr. Sarah Khan",
            role: "Academic Director",
            qualification: "PhD in Education, Oxford University",
            expertise: "Curriculum Development & Pedagogical Innovation",
            experience: "18 Years",
            achievements: ["Published 15+ Research Papers", "International Speaker", "Curriculum Design Expert"]
        },
        {
            name: "Mr. Ahmed Raza",
            role: "Head of Sciences",
            qualification: "MSc Physics, Cambridge University",
            expertise: "STEM Education & Research Methodology",
            experience: "22 Years",
            achievements: ["National Science Award Winner", "Patent Holder", "STEM Workshop Leader"]
        },
        {
            name: "Ms. Fatima Noor",
            role: "Head of Humanities",
            qualification: "MA English Literature, Harvard University",
            expertise: "Critical Thinking & Creative Writing",
            experience: "16 Years",
            achievements: ["Author of 3 Books", "Debate Champion Trainer", "Literature Festival Organizer"]
        },
        {
            name: "Dr. Hassan Ali",
            role: "Head of Mathematics",
            qualification: "PhD in Mathematics, MIT",
            expertise: "Advanced Mathematics & Problem Solving",
            experience: "20 Years",
            achievements: ["International Math Olympiad Coach", "Published 10+ Research Papers", "Math Curriculum Developer"]
        },
        {
            name: "Ms. Amina Shah",
            role: "Head of Languages",
            qualification: "MA Linguistics, Stanford University",
            expertise: "Multilingual Education & Language Acquisition",
            experience: "15 Years",
            achievements: ["Certified Language Examiner", "Bilingual Program Director", "Published Author"]
        },
        {
            name: "Mr. Omar Farooq",
            role: "Head of Physical Education",
            qualification: "MSc Sports Science, University of Sydney",
            expertise: "Sports Psychology & Athletic Development",
            experience: "12 Years",
            achievements: ["National Level Coach", "Sports Psychology Expert", "Youth Development Specialist"]
        }
    ];

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center gap-3 mb-3">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <FaGraduationCap className="text-2xl text-secondary" />
                            </motion.div>
                            <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold">
                                Distinguished Faculty
                            </h2>
                        </div>
                        <p className="font-subheading text-lg text-primary/70 max-w-3xl mx-auto">
                            Meet our team of exceptional educators
                        </p>
                    </div>

                    {/* Scroll Controls */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="text-left">
                            <p className="font-body text-sm text-primary/60">
                                Scroll horizontally to view all faculty members
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <motion.button
                                onClick={scrollLeft}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full bg-white border border-secondary/20 flex items-center justify-center text-primary hover:bg-secondary/10 transition-colors shadow-sm"
                            >
                                <FaChevronLeft />
                            </motion.button>
                            <motion.button
                                onClick={scrollRight}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full bg-white border border-secondary/20 flex items-center justify-center text-primary hover:bg-secondary/10 transition-colors shadow-sm"
                            >
                                <FaChevronRight />
                            </motion.button>
                        </div>
                    </div>

                    {/* Horizontal Scroll Container */}
                    <div className="relative">
                        {/* Gradient Fade Effects */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto pb-6 gap-6 scrollbar-hide"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {/* Custom scrollbar style */}
                            <style>{`
                                .scrollbar-hide::-webkit-scrollbar {
                                    display: none;
                                }
                                .scrollbar-hide {
                                    -ms-overflow-style: none;
                                    scrollbar-width: none;
                                }
                            `}</style>

                            {facultyMembers.map((faculty, index) => (
                                <FacultyCard key={index} faculty={faculty} index={index} />
                            ))}
                        </div>

                        {/* Scroll Indicators */}
                        <div className="flex justify-center gap-1 mt-4">
                            {[...Array(6)].map((_, idx) => (
                                <motion.div
                                    key={idx}
                                    className="w-2 h-2 rounded-full bg-secondary/30"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        backgroundColor: ["rgba(212, 175, 55, 0.3)", "#D4AF37", "rgba(212, 175, 55, 0.3)"]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: idx * 0.2
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Faculty Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        {[
                            { label: "Advanced Degrees", value: "95%", icon: <FaGraduationCap /> },
                            { label: "Years Experience", value: "15+", icon: <FaStar /> },
                            { label: "Intl. Certifications", value: "80%", icon: <FaAward /> },
                            { label: "Research Papers", value: "50+", icon: <FaBook /> }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="bg-white rounded-lg p-4 shadow-lg border border-secondary/20 text-center"
                            >
                                <div className="text-2xl text-secondary mb-1">
                                    {stat.icon}
                                </div>
                                <div className="font-heading text-2xl font-bold text-primary">
                                    {stat.value}
                                </div>
                                <div className="font-body text-primary/80 text-xs">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacultySection;