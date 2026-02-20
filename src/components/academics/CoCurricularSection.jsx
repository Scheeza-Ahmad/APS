import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFutbol, FaPalette, FaUsers, FaMusic, FaTheaterMasks, FaRobot } from 'react-icons/fa';

const CoCurricularSection = () => {
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

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 15
            }
        },
        hover: {
            y: -10,
            scale: 1.03,
            boxShadow: "0 20px 40px rgba(41, 35, 75, 0.15)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 17
            }
        }
    };

    const sports = [
        { name: "Cricket", icon: "🏏" },
        { name: "Football", icon: "⚽" },
        { name: "Basketball", icon: "🏀" },
        { name: "Badminton", icon: "🏸" },
        { name: "Table Tennis", icon: "🏓" },
        { name: "Athletics", icon: "🏃" }
    ];

    const arts = [
        { name: "Drawing & Painting", icon: "🎨" },
        { name: "Music", icon: "🎵" },
        { name: "Dance", icon: "💃" },
        { name: "Drama", icon: "🎭" },
        { name: "Pottery", icon: "🏺" },
        { name: "Photography", icon: "📸" }
    ];

    const clubs = [
        { name: "Science Club", icon: "🔬" },
        { name: "Debate Society", icon: "🗣️" },
        { name: "Robotics Club", icon: "🤖" },
        { name: "Literary Society", icon: "📚" },
        { name: "Environmental Club", icon: "🌿" },
        { name: "Community Service", icon: "🤝" }
    ];

    return (
        <section ref={ref} className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <div className="inline-flex items-center justify-center gap-3 mb-4">
                            <motion.div
                                animate={{ 
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <FaFutbol className="text-3xl text-secondary" />
                            </motion.div>
                            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">
                                CO-CURRICULAR ACTIVITIES
                            </h2>
                        </div>
                        <p className="font-subheading text-lg md:text-xl text-primary/70 max-w-3xl mx-auto mb-6">
                            Holistic development through sports, arts, and specialized clubs
                        </p>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "120px" }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
                        />
                    </motion.div>

                    {/* Main Content Card */}
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 md:p-8 border border-secondary/20 shadow-lg">
                        {/* Sports Section */}
                        <motion.div variants={itemVariants} className="mb-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-full bg-gradient-to-r from-red-100 to-red-50">
                                    <FaFutbol className="text-2xl text-red-500" />
                                </div>
                                <h3 className="font-heading text-2xl text-primary font-bold">
                                    Sports & Physical Education
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {sports.map((sport, index) => (
                                    <motion.div
                                        key={index}
                                        variants={cardVariants}
                                        whileHover="hover"
                                        className="bg-white rounded-xl p-4 text-center border border-secondary/10 shadow-sm"
                                    >
                                        <div className="text-3xl mb-2">{sport.icon}</div>
                                        <div className="font-body text-primary/90 text-sm font-semibold">
                                            {sport.name}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Arts Section */}
                        <motion.div variants={itemVariants} className="mb-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-purple-50">
                                    <FaPalette className="text-2xl text-purple-500" />
                                </div>
                                <h3 className="font-heading text-2xl text-primary font-bold">
                                    Arts & Creative Expression
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {arts.map((art, index) => (
                                    <motion.div
                                        key={index}
                                        variants={cardVariants}
                                        whileHover="hover"
                                        className="bg-white rounded-xl p-4 text-center border border-secondary/10 shadow-sm"
                                    >
                                        <div className="text-3xl mb-2">{art.icon}</div>
                                        <div className="font-body text-primary/90 text-sm font-semibold">
                                            {art.name}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Clubs Section */}
                        <motion.div variants={itemVariants}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-blue-50">
                                    <FaUsers className="text-2xl text-blue-500" />
                                </div>
                                <h3 className="font-heading text-2xl text-primary font-bold">
                                    Specialized Clubs & Societies
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {clubs.map((club, index) => (
                                    <motion.div
                                        key={index}
                                        variants={cardVariants}
                                        whileHover="hover"
                                        className="bg-white rounded-xl p-4 text-center border border-secondary/10 shadow-sm"
                                    >
                                        <div className="text-3xl mb-2">{club.icon}</div>
                                        <div className="font-body text-primary/90 text-sm font-semibold">
                                            {club.name}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Benefits Section */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-10 pt-8 border-t border-secondary/20"
                        >
                            <h4 className="font-heading text-xl text-primary font-bold mb-4 text-center">
                                Benefits of Co-curricular Participation
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { title: "Physical Health", desc: "Improved fitness & coordination" },
                                    { title: "Creative Skills", desc: "Enhanced artistic expression" },
                                    { title: "Leadership", desc: "Teamwork & organizational skills" }
                                ].map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        className="bg-white rounded-lg p-5 border border-secondary/10 text-center"
                                    >
                                        <h5 className="font-heading text-lg text-primary font-bold mb-2">
                                            {benefit.title}
                                        </h5>
                                        <p className="font-body text-primary/80 text-sm">
                                            {benefit.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CoCurricularSection;