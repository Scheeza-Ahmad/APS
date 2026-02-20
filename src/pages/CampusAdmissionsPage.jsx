import React from 'react';
import HeroSection from '../components/admissions/HeroSection';
import ProcessSteps from '../components/admissions/ProcessSteps';
import VisitUs from '../components/admissions/VisitUs';
import ApplicationGuide from '../components/admissions/ApplicationGuide';
import DownloadSection from '../components/admissions/DownloadSection';
import Footer from '../components/Footer';
const CampusAdmissionsPage = () => {
  return (
    <div className="font-body">
      <HeroSection />
      <ProcessSteps />
      <VisitUs />
      <ApplicationGuide />
      <DownloadSection />
    </div>
  );
};
export default CampusAdmissionsPage;