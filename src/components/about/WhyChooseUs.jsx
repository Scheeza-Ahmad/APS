import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGraduationCap, 
  FaShieldAlt, 
  FaChalkboardTeacher, 
  FaHeart,
  FaHandsHelping,
  FaComments,
  FaStar
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
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
        delayChildren: 0.2
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
        damping: 12,
        duration: 0.6
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

  const features = [
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Strong Academic Foundations",
      description: "Proven curriculum with 98%+ pass rate and comprehensive learning approach",
      color: "bg-gradient-to-br from-primary/10 to-primary/5",
      iconColor: "text-primary"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Safe, Clean, Secure Campus",
      description: "State-of-the-art security, hygienic environment and nurturing atmosphere",
      color: "bg-gradient-to-br from-secondary/10 to-secondary/5",
      iconColor: "text-secondary"
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl" />,
      title: "Experienced Faculty & Mentors",
      description: "95% faculty with advanced degrees and 15+ years average teaching experience",
      color: "bg-gradient-to-br from-accent/10 to-accent/5",
      iconColor: "text-accent"
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Values-Based Education",
      description: "Character building, ethics, and moral values integrated into curriculum",
      color: "bg-gradient-to-br from-green-100 to-green-50",
      iconColor: "text-green-500"
    },
    {
      icon: <FaComments className="text-3xl" />,
      title: "Parent Communication App",
      description: "Real-time updates, progress tracking, and direct communication platform",
      color: "bg-gradient-to-br from-blue-100 to-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "Attention to Student Wellbeing",
      description: "Comprehensive pastoral care, counseling, and mental health support",
      color: "bg-gradient-to-br from-purple-100 to-purple-50",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatDelay: 2 
                }}
                className="p-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10"
              >
                <FaStar className="text-2xl text-secondary" />
              </motion.div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary font-bold">
                Why Choose <span className="text-secondary">Ali Public School</span>
              </h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-subheading text-lg md:text-xl text-primary/70 max-w-3xl mx-auto mb-8"
            >
              Our commitment to excellence in education and holistic student development
            </motion.p>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            />
          </motion.div>

          {/* Features Grid - Exactly 6 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
                className="relative rounded-xl p-6 border border-secondary/20 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={feature.iconColor}>
                    {feature.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-body text-primary/80 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Number Badge */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-heading text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                </motion.div>

                {/* Hover Effect Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Simple Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 mb-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "25+", label: "Years Excellence", color: "from-primary/20 to-primary/10" },
                { value: "98%", label: "Academic Success", color: "from-secondary/20 to-secondary/10" },
                { value: "15:1", label: "Student Ratio", color: "from-accent/20 to-accent/10" },
                { value: "95%", label: "Qualified Faculty", color: "from-green-100 to-green-50" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`bg-gradient-to-r ${stat.color} rounded-xl p-4 text-center border border-secondary/10 shadow-sm`}
                >
                  <div className="font-heading text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-primary/80 text-xs">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Simple CTA */}
         
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;