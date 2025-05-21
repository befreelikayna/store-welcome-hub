
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    price: 199,
    rating: 4.6,
    image: "/lovable-uploads/2afa8b27-718d-44f1-a8e0-7bce9c252f5f.png",
    category: "أدوات التقطيع"
  },
  {
    id: 3,
    name: "موقد الغاز المحمول",
    price: 220,
    rating: 4.7,
    image: "/lovable-uploads/7419aa6d-89e3-44d6-b843-32f18666de08.png",
    category: "أجهزة الطبخ"
  },
  {
    id: 4,
    name: "صانع الفشار",
    price: 188,
    rating: 4.5,
    image: "/lovable-uploads/993f39da-cc06-45dd-9edc-79bf3907244d.png",
    category: "أجهزة المطبخ"
  },
  {
    id: 5,
    name: "مفرمة الثوم الكهربائية",
    price: 189,
    rating: 4.9,
    image: "/lovable-uploads/7aee7be7-edcb-4652-90ae-22adf7c5316c.png",
    category: "أدوات التقطيع"
  },
  {
    id: 6,
    name: "ممسحة الأرضيات الجديدة",
    price: 230,
    rating: 4.4,
    image: "/lovable-uploads/d69581d6-9ebc-45ef-9763-f155be24c641.png",
    category: "أدوات التنظيف"
  },
  {
    id: 7,
    name: "خلاط كهربائي قوي",
    price: 249,
    rating: 4.7,
    image: "/lovable-uploads/6121b5e2-dacd-4bc8-9d43-e00f2be3470d.png",
    category: "أجهزة المطبخ"
  },
  {
    id: 8,
    name: "آلة صنع العصير",
    price: 195,
    rating: 4.3,
    image: "/lovable-uploads/993f39da-cc06-45dd-9edc-79bf3907244d.png",
    category: "أجهزة المطبخ"
  },
  {
    id: 9,
    name: "سكاكين الشيف",
    price: 240,
    rating: 4.8,
    image: "/lovable-uploads/2afa8b27-718d-44f1-a8e0-7bce9c252f5f.png",
    category: "أدوات التقطيع"
  },
  {
    id: 10,
    name: "طقم قدور ستانلس ستيل",
    price: 389,
    rating: 4.9,
    image: "/lovable-uploads/7419aa6d-89e3-44d6-b843-32f18666de08.png",
    category: "أواني الطهي"
  },
  {
    id: 11,
    name: "آلة صنع الخبز",
    price: 279,
    rating: 4.6,
    image: "/lovable-uploads/7aee7be7-edcb-4652-90ae-22adf7c5316c.png",
    category: "مستلزمات الخبز"
  },
  {
    id: 12,
    name: "مكنسة كهربائية قوية",
    price: 349,
    rating: 4.7,
    image: "/lovable-uploads/d69581d6-9ebc-45ef-9763-f155be24c641.png",
    category: "أدوات التنظيف"
  }
];

interface ProductsSectionProps {
  showAllProducts?: boolean;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ showAllProducts = false }) => {
  const [activeCategory, setActiveCategory] = useState<string>("الكل");
  const categories = ["الكل", "أجهزة المطبخ", "أدوات التقطيع", "أجهزة الطبخ", "أدوات التنظيف", "مستلزمات الخبز", "أواني الطهي"];
  
  const filteredProducts = activeCategory === "الكل" 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  // Display only 6 products on the homepage, or all products on the products page
  const displayProducts = showAllProducts ? filteredProducts : filteredProducts.slice(0, 6);

  const handleWhatsAppClick = (productName: string) => {
    const message = `مرحباً، أنا مهتم بشراء ${productName}. هل يمكنني معرفة المزيد؟`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/447308658080?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto">
        {!showAllProducts && (
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">منتجاتنا المميزة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">اكتشف مجموعتنا المميزة من أدوات المطبخ العصرية التي تجمع بين الأناقة والعملية</p>
          </div>
        )}

        <div className="flex flex-wrap mb-8 justify-center gap-4">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "ghost"} 
              className={activeCategory === category ? "bg-shop-primary text-white rounded-full" : "hover:bg-shop-primary hover:text-white rounded-full"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => (
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
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => handleWhatsAppClick(product.name)}
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    طلب عبر واتساب
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAllProducts && (
          <div className="text-center mt-12">
            <Link to="/products">
              <Button 
                className="bg-shop-primary hover:bg-shop-primary/90 px-8"
              >
                عرض جميع المنتجات
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
