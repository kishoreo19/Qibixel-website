import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuditModal from './components/AuditModal';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import IndustriesPage from './pages/IndustriesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import InsightsPage from './pages/InsightsPage';
import InsightDetailPage from './pages/InsightDetailPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  const handleOpenAudit = () => {
    setAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setAuditModalOpen(false);
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen relative bg-background text-primary selection:bg-cyan-500/20 selection:text-cyan-600 dark:selection:text-cyan-300 flex flex-col justify-between transition-colors duration-300">
          <div className="absolute inset-0 z-0 pointer-events-none bg-grid-pattern-light dark:bg-grid-pattern opacity-50"></div>
          
        {/* Sticky Header Navigation */}
        <div className="relative z-50">
          <Navbar onOpenAudit={handleOpenAudit} />
        </div>

        {/* Dynamic Route Pages */}
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<HomePage onOpenAudit={handleOpenAudit} />} />
            <Route path="/about" element={<AboutPage onOpenAudit={handleOpenAudit} />} />
            <Route path="/services" element={<ServicesPage onOpenAudit={handleOpenAudit} />} />
            <Route path="/services/:id" element={<ServiceDetailPage onOpenAudit={handleOpenAudit} />} />
            <Route path="/industries" element={<IndustriesPage onOpenAudit={handleOpenAudit} />} />
            <Route path="/case-studies" element={<CaseStudiesPage onOpenAudit={handleOpenAudit} />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetailPage onOpenAudit={handleOpenAudit} />} />
            <Route path="/insights" element={<InsightsPage onOpenAudit={handleOpenAudit} />} />
            <Route path="/insights/:id" element={<InsightDetailPage onOpenAudit={handleOpenAudit} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage onOpenAudit={handleOpenAudit} />} />
          </Routes>
        </main>

        {/* Multi-column Footer */}
        <div className="relative z-10">
          <Footer />
        </div>

        {/* Global Instant AI SEO Audit Modal */}
        <AuditModal
          isOpen={auditModalOpen}
          onClose={handleCloseAudit}
        />

        </div>
      </Router>
    </ThemeProvider>
  );
}
