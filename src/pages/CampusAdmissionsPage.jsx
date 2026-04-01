import React from 'react';
import AdmissionHero from '../components/admissions/HeroSection';
import AdmissionSteps from '../components/admissions/AdmissionSteps';
import AdmissionEnquiry from '../components/admissions/AdmissionEnquiry';
import VisitUs from '../components/admissions/VisitUs';


const CampusAdmissionsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <AdmissionHero />
      <AdmissionSteps />
      <AdmissionEnquiry />
      <VisitUs/>
      
      {/* Important Dates section ko bhi isi tarah component bana sakte hain */}
    </div>
  );
};

export default CampusAdmissionsPage;