
import React from 'react';
import Header from '../components/Header';
import ProductsSection from '../components/ProductsSection';
import Footer from '../components/Footer';

const Products = () => {
  // Update the page title
  React.useEffect(() => {
    document.title = "باسما شوب | المنتجات";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="py-10 bg-gray-50">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center gradient-text">جميع المنتجات</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              اكتشف مجموعتنا المميزة من أدوات المطبخ العصرية بجودة عالية وأسعار مناسبة
            </p>
          </div>
        </div>
        <ProductsSection showAllProducts={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
