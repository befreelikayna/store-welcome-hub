
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-shop-light to-white py-16 md:py-24 hero-pattern">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-in mt-10 md:mt-0 text-right">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              أدوات المطبخ الحديثة
            </h1>
            <p className="text-xl text-gray-700">
              وفر الوقت والجهد مع أحدث أدوات المطبخ العصرية. منتجات عالية الجودة لتجربة طهي مثالية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-shop-primary hover:bg-shop-primary/90 flex items-center gap-2">
                تسوق الآن <ShoppingCart className="h-4 w-4 mr-1" />
              </Button>
              <Button variant="outline" className="text-shop-primary border-shop-primary hover:bg-shop-primary/10 flex items-center gap-2">
                استكشف المنتجات <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>
            <div className="pt-4 flex items-center justify-start gap-6">
              <div>
                <p className="text-3xl font-bold text-shop-primary">1000+</p>
                <p className="text-gray-600">منتج</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-shop-primary">24/7</p>
                <p className="text-gray-600">دعم</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-shop-primary">100%</p>
                <p className="text-gray-600">ضمان</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-up">
            <img 
              src="/lovable-uploads/d69581d6-9ebc-45ef-9763-f155be24c641.png" 
              alt="أدوات المطبخ" 
              className="max-w-full h-auto rounded-lg shadow-xl"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
