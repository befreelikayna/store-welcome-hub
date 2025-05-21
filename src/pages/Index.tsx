
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProductsSection from '../components/ProductsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  // Update the page title
  React.useEffect(() => {
    document.title = "باسما شوب | أفضل أدوات المطبخ";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
