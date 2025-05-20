
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "ماكينة فرم اللحوم",
    price: 299,
    rating: 4.8,
    image: "/lovable-uploads/6121b5e2-dacd-4bc8-9d43-e00f2be3470d.png",
    category: "أجهزة المطبخ"
  },
  {
    id: 2,
    name: "مفرمة الخضار متعددة الاستخدامات",
    price: 149,
    rating: 4.6,
    image: "/lovable-uploads/2afa8b27-718d-44f1-a8e0-7bce9c252f5f.png",
    category: "أدوات التقطيع"
  },
  {
    id: 3,
    name: "موقد الغاز المحمول",
    price: 199,
    rating: 4.7,
    image: "/lovable-uploads/7419aa6d-89e3-44d6-b843-32f18666de08.png",
    category: "أجهزة الطبخ"
  },
  {
    id: 4,
    name: "صانع الفشار",
    price: 129,
    rating: 4.5,
    image: "/lovable-uploads/993f39da-cc06-45dd-9edc-79bf3907244d.png",
    category: "أجهزة المطبخ"
  },
  {
    id: 5,
    name: "مفرمة الثوم الكهربائية",
    price: 89,
    rating: 4.9,
    image: "/lovable-uploads/7aee7be7-edcb-4652-90ae-22adf7c5316c.png",
    category: "أدوات التقطيع"
  },
  {
    id: 6,
    name: "ممسحة الأرضيات الجديدة",
    price: 179,
    rating: 4.4,
    image: "/lovable-uploads/d69581d6-9ebc-45ef-9763-f155be24c641.png",
    category: "أدوات التنظيف"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text">منتجاتنا المميزة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">اكتشف مجموعتنا المميزة من أدوات المطبخ العصرية التي تجمع بين الأناقة والعملية</p>
        </div>

        <div className="flex flex-wrap mb-8 justify-center gap-4">
          <Button variant="ghost" className="hover:bg-shop-primary hover:text-white rounded-full">الكل</Button>
          <Button variant="ghost" className="hover:bg-shop-primary hover:text-white rounded-full">أجهزة المطبخ</Button>
          <Button variant="ghost" className="hover:bg-shop-primary hover:text-white rounded-full">أدوات التقطيع</Button>
          <Button variant="ghost" className="hover:bg-shop-primary hover:text-white rounded-full">أجهزة الطبخ</Button>
          <Button variant="ghost" className="hover:bg-shop-primary hover:text-white rounded-full">أدوات التنظيف</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card animate-fade-in">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4 flex-grow">
                <span className="text-sm text-gray-500">{product.category}</span>
                <h3 className="text-xl font-semibold mb-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-4 w-4 fill-shop-accent text-shop-accent" />
                  <span className="text-gray-700">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xl font-bold text-shop-primary">{product.price} ر.س</span>
                  <Button size="sm" className="bg-shop-primary hover:bg-shop-primary/90">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    إضافة للسلة
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-shop-primary hover:bg-shop-primary/90 px-8">
            عرض جميع المنتجات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
