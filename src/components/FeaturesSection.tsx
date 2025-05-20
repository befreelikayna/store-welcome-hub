
import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    icon: "📦",
    title: "التوصيل بالمجان",
    description: "توصيل سريع ومجاني لجميع المنتجات"
  },
  {
    icon: "💰",
    title: "الدفع عند الإستلام",
    description: "ادفع عند استلام المنتج مباشرة"
  },
  {
    icon: "🔄",
    title: "سهولة الإرجاع",
    description: "استرجاع المنتج خلال 14 يوم"
  },
  {
    icon: "🛡️",
    title: "سلامة الطلبية",
    description: "منتجات آمنة وعالية الجودة"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text">لماذا تختارنا؟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">نحن نقدم أفضل المنتجات للمطبخ بجودة عالية وأسعار مناسبة، مع خدمة عملاء مميزة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card animate-fade-in">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-shop-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/993f39da-cc06-45dd-9edc-79bf3907244d.png" 
                alt="صانع الفشار" 
                className="rounded-lg mx-auto"
                style={{ maxHeight: '400px' }}
              />
            </div>
            <div className="md:w-1/2 md:pr-8 space-y-4">
              <h3 className="text-2xl font-bold text-shop-primary">تجربة طهي مميزة</h3>
              <p className="text-gray-600">استمتع بأفضل تجربة طهي مع أدواتنا المبتكرة. صممت خصيصاً لتوفير الوقت والجهد مع نتائج احترافية.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="text-shop-primary h-5 w-5 flex-shrink-0" />
                  <span>سهولة الاستخدام والتنظيف</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-shop-primary h-5 w-5 flex-shrink-0" />
                  <span>مواد آمنة وصديقة للبيئة</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-shop-primary h-5 w-5 flex-shrink-0" />
                  <span>توفير الوقت والجهد في المطبخ</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-shop-primary h-5 w-5 flex-shrink-0" />
                  <span>تصميم عصري وأنيق</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
