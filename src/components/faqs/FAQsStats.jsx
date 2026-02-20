import React from 'react';

const FAQsStats = () => {
    const stats = [
        { label: "Years of Experience", value: "13+" },
        { label: "Student Strength", value: "2000+" },
        { label: "Faculty Members", value: "150+" },
        { label: "Success Rate", value: "98%" }
    ];

    return (
        <div className="mt-16 bg-gradient-to-r from-cream to-cream/90 rounded-2xl p-8 border border-primary/20">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8 text-center">
                Quick Facts About Ali Public School
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="text-center p-6 bg-primary/5 rounded-xl border border-primary/10 hover:bg-primary/10 transition-all duration-300"
                    >
                        <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                        <div className="text-primary">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQsStats;