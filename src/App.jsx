// App.jsx - FIXED VERSION (All pages show Header)
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import ALL pages
import Home from "./pages/Home";
import Home1 from "./pages/home1";
import AboutPage from "./pages/AboutPage";
import CampusAdmissionsPage from "./pages/CampusAdmissionsPage";
import CampusPage from "./pages/CampusPage";
import AcademicsPage from "./pages/AcademicsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQs from "./pages/FAQs";
import LegacyPage from "./pages/LegacyPage";
import CharacterValues from "./pages/CharacterValues";
import StudentLife from "./pages/StudentLife";
import NewsUpdates from "./pages/NewsUpdates";

// Placeholder for Contact
const ContactPage = () => (
  <div className="min-h-screen flex items-center justify-center py-20">
    <div className="text-center">
      <h1 className="text-4xl text-secondary mb-4">Contact Page</h1>
      <p className="text-gray-300">Coming Soon</p>
    </div>
  </div>
);

// Simple Layout jo har page ke liye header aur footer show kare
const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-primary text-light font-body">
      <Header /> {/* ✅ ALWAYS SHOW HEADER */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer /> {/* ✅ ALWAYS SHOW FOOTER */}
    </div>
  );
};

// Layout for Home pages with different styling if needed
const HomeLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header /> {/* ✅ Home pages par bhi Header show hoga */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home pages with HomeLayout (Header aur Footer dono show) */}
        <Route path="/" element={
          <HomeLayout>
            <Home />
          </HomeLayout>
        } />
        
        <Route path="/home1" element={
          <HomeLayout>
            <Home1 />
          </HomeLayout>
        } />

        {/* All other pages with DefaultLayout */}
        <Route path="/aboutpage" element={
          <DefaultLayout>
            <AboutPage />
          </DefaultLayout>
        } />
        
        <Route path="/campuspage" element={
          <DefaultLayout>
            <CampusPage />
          </DefaultLayout>
        } />
        
        <Route path="/campusadmissionspage" element={
          <DefaultLayout>
            <CampusAdmissionsPage />
          </DefaultLayout>
        } />
        
        <Route path="/academicspage" element={
          <DefaultLayout>
            <AcademicsPage />
          </DefaultLayout>
        } />
        
        <Route path="/contact" element={
          <DefaultLayout>
            <ContactPage />
          </DefaultLayout>
        } />
        
        <Route path="/privacypolicy" element={
          <DefaultLayout>
            <PrivacyPolicy />
          </DefaultLayout>
        } />
        
        <Route path="/faqs" element={
          <DefaultLayout>
            <FAQs />
          </DefaultLayout>
        } />

        {/* Alternative paths */}
        <Route path="/academics" element={
          <DefaultLayout>
            <AcademicsPage />
          </DefaultLayout>
        } />
        
        <Route path="/admissions" element={
          <DefaultLayout>
            <CampusAdmissionsPage />
          </DefaultLayout>
        } />
        
        <Route path="/privacy" element={
          <DefaultLayout>
            <PrivacyPolicy />
          </DefaultLayout>
        } />
        <Route path="/legacypage" element={
          <DefaultLayout>
            <LegacyPage/>
          </DefaultLayout>
        }/>

        <Route path="/charactervalues" element={
          <DefaultLayout>
            <CharacterValues/>
          </DefaultLayout>
        }/>
        <Route path="/studentlife" element={
          <DefaultLayout>
            <StudentLife/>
          </DefaultLayout>
        }/>

        <Route path="/newsupdates" element={
          <DefaultLayout>
            <NewsUpdates/>
          </DefaultLayout>
        }/>
        {/* 404 Page */}
        <Route path="*" element={
          <DefaultLayout>
            <div className="min-h-screen flex items-center justify-center py-20">
              <div className="text-center">
                <h1 className="text-5xl text-secondary mb-4">404</h1>
                <p className="text-gray-300">Page Not Found</p>
              </div>
            </div>
          </DefaultLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;