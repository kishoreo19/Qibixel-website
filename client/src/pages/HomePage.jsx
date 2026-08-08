import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import MetricResults from '../components/MetricResults';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyQibixel from '../components/WhyQibixel';
import ProcessTimeline from '../components/ProcessTimeline';
import CaseStudies from '../components/CaseStudies';
import IndustryMatrix from '../components/IndustryMatrix';
import InsightsSection from '../components/InsightsSection';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';
import { useNavigate } from 'react-router-dom';

export default function HomePage({ onOpenAudit }) {
  const navigate = useNavigate();

  return (
    <div>
      <Hero onOpenAudit={onOpenAudit} />
      <TrustStrip />
      <MetricResults />
      <AboutSection />
      <ServicesSection onSelectService={(service) => navigate(`/services/${service.id}`)} />
      <WhyQibixel />
      <ProcessTimeline />
      <CaseStudies onSelectCaseStudy={(cs) => navigate(`/case-studies/${cs.id}`)} />
      <IndustryMatrix />
      <InsightsSection />
      <Testimonials />
      <FAQSection />
      <FinalCTA onOpenAudit={onOpenAudit} onScrollContact={() => navigate('/contact')} />
    </div>
  );
}
