
import React from 'react';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import BenefitsSection from '../components/BenefitsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import GuaranteeSection from '../components/GuaranteeSection';
import UrgencySection from '../components/UrgencySection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black overflow-x-hidden">
      {/* Background blur effects - mais sutis e escuros */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-blue-600/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 md:w-80 h-48 md:h-80 bg-purple-600/5 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-48 md:w-72 h-48 md:h-72 bg-indigo-600/3 rounded-full blur-3xl animate-float delay-2000"></div>
      </div>
      
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <UrgencySection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
