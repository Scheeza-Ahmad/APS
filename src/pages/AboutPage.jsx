import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/about/HeroSection';
import HeritageSection from '../components/about/HeritageSection';
import PremierDifference from '../components/about/PremierDifference';
import LeadershipSection from '../components/about/LeadershipSection';
import FacultySection from '../components/about/FacultySection';
import WhyChooseUs from '../components/about/WhyChooseUs';
import BranchTimeline from '../components/about/BranchTimeline';

const AboutPage = () => {
    return (
        <div className="min-h-screen w-full overflow-x-hidden">
            {/* Header with cream background */}
            {/* 'relative z-50' ensures header stays above other sections on mobile */}
            <div className="bg-cream relative z-50">
                <Header />
            </div>

            {/* Main Content wrapper */}
            <main className="flex flex-col">
                
                {/* Hero section: Usually handles its own padding internally */}
                <HeroSection />

                {/* Content Sections */}
                <div className="bg-white">
                    {/* Aapke components (HeritageSection, etc.) ke andar 
                        'container mx-auto px-4 md:px-8' lazmi hona chahiye 
                        taake sides se space barqarar rahe.
                    */}
                    <div className="space-y-0 md:space-y-4">
                        <HeritageSection />
                        <PremierDifference />
                        {/* <LeadershipSection /> */}
                        <FacultySection />
                        {/* <BranchTimeline /> */}
                        <WhyChooseUs />
                    </div>
                </div>
            </main>

            {/* <Footer /> */}
        </div>
    );
};

export default AboutPage;