import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaHeart, FaBrain, FaUsers, FaChartLine } from 'react-icons/fa';

const OutcomesSection = () => {
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

    const outcomes = [
        {
            icon: <FaGraduationCap className="text-2xl" />,
            title: "Readiness for Secondary Education",
            description: "Strong academic foundation ensuring smooth transition to higher education",
            color: "from-primary/20 to-primary/10",
            points: [
                "Comprehensive curriculum coverage",
                "Exam preparation skills",
                "Independent learning abilities"
            ]
        },
        {
            icon: <FaHeart className="text-2xl" />,
            title: "Values & Character Education",
            description: "Development of moral values and ethical decision-making",
            color: "from-secondary/20 to-secondary/10",
            points: [
                "Integrity & honesty",
                "Respect & empathy",
                "Responsibility & accountability"
            ]
        },
        {
            icon: <FaBrain className="text-2xl" />,
            title: "Cognitive Development",
            description: "Enhanced thinking, reasoning, and problem-solving skills",
            color: "from-accent/20 to-accent/10",
            points: [
                "Critical thinking",
                "Analytical reasoning",
                "Creative problem-solving"
            ]
        },
        {
            icon: <FaUsers className="text-2xl" />,
            title: "Social & Emotional Skills",
            description: "Development of interpersonal skills and emotional intelligence",
            color: "from-green-100 to-green-50",
            points: [
                "Effective communication",
                "Teamwork & collaboration",
                "Emotional regulation"
            ]
        }
    ];

    const successMetrics = [
        { metric: "98%", label: "Secondary Readiness", icon: "🎯" },
        { metric: "95%", label: "Character Development", icon: "🌟" },
        { metric: "100%", label: "Parent Satisfaction", icon: "👨‍👩‍👧‍👦" },
        { metric: "90%+", label: "Holistic Growth", icon: "📈" }
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
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 5, 0, -5, 0]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <FaChartLine className="text-3xl text-secondary" />
                            </motion.div>
                            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">
                                LEARNING OUTCOMES
                            </h2>
                        </div>
                        <p className="font-subheading text-lg md:text-xl text-primary/70 max-w-3xl mx-auto mb-6">
                            Measurable achievements and holistic development indicators
                        </p>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "120px" }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
                        />
                    </motion.div>

                    {/* Outcomes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {outcomes.map((outcome, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className={`bg-gradient-to-r ${outcome.color} rounded-xl p-6 border border-secondary/10 shadow-lg`}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-white/80 flex items-center justify-center">
                                        <div className="text-primary">
                                            {outcome.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-lg font-bold text-primary mb-1">
                                            {outcome.title}
                                        </h3>
                                        <p className="font-body text-primary/80 text-sm">
                                            {outcome.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {outcome.points.map((point, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + (index * 0.1) + (idx * 0.1) }}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                            <span className="font-body text-primary/90 text-sm">
                                                {point}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Success Metrics */}
                    <motion.div
                        variants={containerVariants}
                        className="mb-10"
                    >
                        <h3 className="font-heading text-2xl text-primary font-bold mb-6 text-center">
                            Success Metrics
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {successMetrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-xl p-4 text-center border border-secondary/10 shadow-sm"
                                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                >
                                    <div className="text-2xl mb-1">{metric.icon}</div>
                                    <div className="font-heading text-3xl text-primary font-bold mb-1">
                                        {metric.metric}
                                    </div>
                                    <div className="font-body text-primary/80 text-xs">
                                        {metric.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Final Impact Statement */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-secondary/20"
                    >
                        <div className="text-center">
                            <h3 className="font-heading text-2xl text-primary font-bold mb-4">
                                Holistic Development Approach
                            </h3>
                            <p className="font-subheading text-lg text-primary/70 mb-6 max-w-3xl mx-auto">
                                Our educational outcomes ensure students are not only academically prepared but also
                                morally grounded, emotionally resilient, and socially responsible citizens.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default OutcomesSection;