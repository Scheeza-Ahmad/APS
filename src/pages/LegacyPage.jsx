import React, { useEffect } from 'react';
// Components import kar rahe hain
import LegacyHero from '../components/legacy/LegacyHero';
import LegacyStory from '../components/legacy/LegacyStory';
import LegacyVision from '../components/legacy/LegacyVision';

const LegacyPage = () => {
  
  // Page load hote hi top par scroll karega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Banner */}
      <LegacyHero />

      {/* 2. Story Section (Father & UK) */}
      <LegacyStory />

      {/* 3. Vision & Cards */}
      <LegacyVision />

    </div>
  );
};

export default LegacyPage;