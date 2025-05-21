
import React from 'react';
import Header from '../components/Header';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Testimonials = () => {
  // Update the page title
  React.useEffect(() => {
    document.title = "باسما شوب | آراء العملاء";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="py-10 bg-gray-50">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center gradient-text">آراء العملاء</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              ما يقوله عملاؤنا السعداء عن تجربتهم مع منتجاتنا وخدماتنا
            </p>
          </div>
        </div>
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
