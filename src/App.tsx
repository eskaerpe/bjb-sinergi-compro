import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FacilitiesPage from './pages/FacilitiesPage';
import PortfolioPage from './pages/PortfolioPage';
import ExpertPage from './pages/ExpertPage';
import ContactPage from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-surface-tint text-navy-900 font-sans antialiased selection:bg-brandBlue-500 selection:text-white flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang-kami" element={<AboutPage />} />
            <Route path="/layanan" element={<ServicesPage />} />
            <Route path="/fasilitas" element={<FacilitiesPage />} />
            <Route path="/portofolio" element={<PortfolioPage />} />
            <Route path="/jaringan-ahli" element={<ExpertPage />} />
            <Route path="/kontak" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
