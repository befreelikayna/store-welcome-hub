
import React from 'react';
import Header from '../components/Header';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

const Features = () => {
  // Update the page title
  React.useEffect(() => {
    document.title = "باسما شوب | المميزات";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="py-10 bg-gray-50">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center gradient-text">مميزاتنا</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              تعرف على ما يجعلنا مميزين ولماذا يختارنا العملاء دائماً لأدوات المطبخ عالية الجودة
            </p>
          </div>
        </div>
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
