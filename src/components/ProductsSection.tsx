
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: "ماكينة فرم اللحوم",
    price: 299,
    originalPrice: 349,
    rating: 4.8,
    image: "/lovable-uploads/6121b5e2-dacd-4bc8-9d43-e00f2be3470d.png",
    category: "أجهزة المطبخ",
    discount: true,
    limitedStock: true
  },
  {
    id: 2,
    name: "مفرمة الخضار متعددة الاستخدامات",
    price: 199,
    originalPrice: 249,
    rating: 4.6,
    image: "/lovable-uploads/2afa8b27-718d-44f1-a8e0-7bce9c252f5f.png",
    category: "أدوات التقطيع",
    discount: true,
    limitedStock: false
  },
  {
    id: 3,
    name: "موقد الغاز المحمول",
    price: 220,
    originalPrice: 270,
    rating: 4.7,
    image: "/lovable-uploads/7419aa6d-89e3-44d6-b843-32f18666de08.png",
    category: "أجهزة الطبخ",
    discount: true,
    limitedStock: true
  },
  {
    id: 4,
    name: "صانع الفشار",
    price: 188,
    originalPrice: 230,
    rating: 4.5,
    image: "/lovable-uploads/993f39da-cc06-45dd-9edc-79bf3907244d.png",
    category: "أجهزة المطبخ",
    discount: true,
    limitedStock: false
  },
  {
    id: 5,
    name: "مفرمة الثوم الكهربائية",
    price: 189,
    originalPrice: 220,
    rating: 4.9,
    image: "/lovable-uploads/7aee7be7-edcb-4652-90ae-22adf7c5316c.png",
    category: "أدوات التقطيع",
    discount: true,
    limitedStock: true
  },
  {
    id: 6,
    name: "ممسحة الأرضيات الجديدة",
    price: 230,
    originalPrice: 280,
    rating: 4.4,
    image: "/lovable-uploads/d69581d6-9ebc-45ef-9763-f155be24c641.png",
    category: "أدوات التنظيف",
    discount: true,
    limitedStock: false
  },
  {
    id: 7,
    name: "خلاط كهربائي قوي",
    price: 249,
    originalPrice: 299,
    rating: 4.7,
    image: "/lovable-uploads/6121b5e2-dacd-4bc8-9d43-e00f2be3470d.png",
    category: "أجهزة المطبخ",
    discount: true,
    limitedStock: true
  },
  {
    id: 8,
    name: "آلة صنع العصير",
    price: 195,
    originalPrice: 240,
    rating: 4.3,
    image: "/lovable-uploads/993f39da-cc06-45dd-9edc-79bf3907244d.png",
    category: "أجهزة المطبخ",
    discount: true,
    limitedStock: false
  },
  {
    id: 9,
    name: "سكاكين الشيف",
    price: 240,
    originalPrice: 290,
    rating: 4.8,
    image: "/lovable-uploads/2afa8b27-718d-44f1-a8e0-7bce9c252f5f.png",
    category: "أدوات التقطيع",
    discount: true,
    limitedStock: true
  },
  {
    id: 10,
    name: "طقم قدور ستانلس ستيل",
    price: 389,
    originalPrice: 450,
    rating: 4.9,
    image: "/lovable-uploads/7419aa6d-89e3-44d6-b843-32f18666de08.png",
    category: "أواني الطهي",
    discount: true,
    limitedStock: false
  },
  {
    id: 11,
    name: "آلة صنع الخبز",
    price: 279,
    originalPrice: 330,
    rating: 4.6,
    image: "/lovable-uploads/7aee7be7-edcb-4652-90ae-22adf7c5316c.png",
    category: "مستلزمات الخبز",
    discount: true,
    limitedStock: true
  },
  {
    id: 12,
    name: "مكنسة كهربائية قوية",
    price: 349,
    originalPrice: 399,
    rating: 4.7,
    image: "/lovable-uploads/d69581d6-9ebc-45ef-9763-f155be24c641.png",
    category: "أدوات التنظيف",
    discount: true,
    limitedStock: false
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

  const calculateDiscount = (originalPrice: number, price: number) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
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
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
                {product.discount && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-red-500 text-white">
                      خصم {calculateDiscount(product.originalPrice, product.price)}%
                    </Badge>
                  </div>
                )}
                {product.limitedStock && (
                  <div className="absolute top-2 left-2">
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                      الكمية محدودة
                    </Badge>
                  </div>
                )}
              </div>
              <div className="p-4 flex-grow">
                <span className="text-sm text-gray-500">{product.category}</span>
                <h3 className="text-xl font-semibold mb-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-4 w-4 fill-shop-accent text-shop-accent" />
                  <span className="text-gray-700">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-shop-primary">{product.price} ر.س</span>
                    {product.discount && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice} ر.س</span>
                    )}
                  </div>
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
