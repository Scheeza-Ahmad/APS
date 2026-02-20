import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserGraduate, FaTasks, FaBrain, FaUserFriends, FaLaptop } from 'react-icons/fa';

const TeachingApproachSection = () => {
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

    const approaches = [
        {
            icon: <FaUserGraduate className="text-2xl" />,
            title: "Student-centered methodology",
            description: "Tailored learning experiences focusing on individual student needs"
        },
        {
            icon: <FaTasks className="text-2xl" />,
            title: "Activity-based learning",
            description: "Hands-on, practical approaches for better understanding"
        },
        {
            icon: <FaBrain className="text-2xl" />,
            title: "Concept mastery",
            description: "Deep understanding over rote memorization"
        },
        {
            icon: <FaUserFriends className="text-2xl" />,
            title: "Individual attention",
            description: "Personalized support for every student"
        },
        {
            icon: <FaLaptop className="text-2xl" />,
            title: "Smart classrooms",
            description: "Technology-integrated learning with multimedia tools"
        }
    ];

    const outcomes = [
        "Readiness for secondary education",
        "Values & character education",
        "Critical thinking skills",
        "Problem-solving abilities",
        "Collaboration and teamwork"
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
                    <motion.div variants={cardVariants} className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4">
                            TEACHING APPROACH
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
                        />
                    </motion.div>

                    {/* Main Content */}
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 md:p-8 border border-secondary/20 shadow-lg">
                        {/* Approaches Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {approaches.map((approach, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-xl p-5 border border-secondary/10 shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                                            <div className="text-secondary">
                                                {approach.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-lg font-bold text-primary mb-2">
                                                {approach.title}
                                            </h3>
                                            <p className="font-body text-primary/80 text-sm">
                                                {approach.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Outcomes Section */}
                        <motion.div
                            variants={containerVariants}
                            className="bg-white rounded-xl p-6 border border-secondary/10"
                        >
                            <h3 className="font-heading text-2xl text-primary font-bold mb-6 text-center">
                                Learning Outcomes
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Left: Outcomes List */}
                                <motion.div variants={cardVariants}>
                                    <h4 className="font-heading text-lg text-primary font-bold mb-4">
                                        Key Achievements
                                    </h4>
                                    <div className="space-y-3">
                                        {outcomes.map((outcome, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 + index * 0.1 }}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-accent"></div>
                                                <span className="font-body text-primary/90">
                                                    {outcome}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Right: Success Metrics */}
                                <motion.div variants={cardVariants} className="bg-gradient-to-br from-accent/10 to-green-50 rounded-lg p-5">
                                    <h4 className="font-heading text-lg text-primary font-bold mb-4">
                                        Educational Success
                                    </h4>
                                    <div className="space-y-4">
                                        {[
                                            { metric: "98%", label: "Concept Retention" },
                                            { metric: "95%", label: "Student Engagement" },
                                            { metric: "100%", label: "Parent Satisfaction" }
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center justify-between">
                                                <div className="font-body text-primary/80">{item.label}</div>
                                                <div className="font-heading text-2xl text-accent font-bold">
                                                    {item.metric}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TeachingApproachSection;