import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/about/HeroSection';
import HeritageSection from '../components/about/HeritageSection';
import PremierDifference from '../components/about/PremierDifference';
import LeadershipSection from '../components/about/LeadershipSection';
import FacultySection from '../components/about/FacultySection';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/about/WhyChooseUs';
import BranchTimeline from '../components/about/BranchTimeline';

const AboutPage = () => {
    return (
        <div className="min-h-screen">
            {/* Header with cream background */}
            <div className="bg-cream">
                <Header />
            </div>

            {/* Hero section with cream background */}
            <HeroSection />

            {/* Rest of the page with white background */}
            <div className="bg-white">
                <HeritageSection />
                <PremierDifference />
                <LeadershipSection />
                <FacultySection />
                <BranchTimeline/>
                <WhyChooseUs />
            </div>
        </div>
    );
};

export default AboutPage;