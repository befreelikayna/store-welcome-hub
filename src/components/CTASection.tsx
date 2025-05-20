
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-shop-primary text-white py-16">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">احصل على خصم 20% على أول طلب لك</h2>
          <p className="text-white/80 mb-8">اشترك في نشرتنا الإخبارية للحصول على آخر العروض والمنتجات الجديدة</p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="أدخل بريدك الإلكتروني" 
              className="px-4 py-3 rounded-lg text-gray-800 w-full md:w-auto md:flex-1 max-w-sm focus:outline-none"
            />
            <Button className="bg-white text-shop-primary hover:bg-white/90 flex items-center gap-2">
              اشترك الآن <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
