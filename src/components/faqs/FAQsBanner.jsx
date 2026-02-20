import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaArrowLeft } from 'react-icons/fa';

const FAQsBanner = () => {
    return (
        <div className="relative bg-cream pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">
            {/* Top decorative element */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-emerald"></div>
            
            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button - With proper spacing from header */}
               <div className="flex items-center mb-8 animate-slide-in-left">
            
          </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
                            <FaQuestionCircle className="mr-2 text-secondary" />
                            <span className="font-semibold text-secondary">Quick Answers</span>
                        </div>
                        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
                            Find answers to common questions about admissions, academics, facilities, and more at Ali Public School.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-secondary/20 shadow-sm">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                                <FaQuestionCircle className="text-secondary text-xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-primary">Quick Stats</h3>
                                <p className="text-secondary font-semibold">15+ Questions Answered</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Can't find your answer? Contact our support team for personalized assistance.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
    );
};

export default FAQsBanner;