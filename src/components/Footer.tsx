
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  MapPin,
  Phone,
  MessageCircle
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">باسما شوب</h3>
            <p className="text-gray-400 mb-4">
              نوفر لكم أفضل أدوات المطبخ بجودة عالية وأسعار مناسبة، لتجربة طهي مميزة.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white hover:text-shop-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-shop-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-shop-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-shop-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">الرئيسية</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">منتجاتنا</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">مميزاتنا</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">آراء العملاء</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">فئات المنتجات</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">أجهزة المطبخ</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">أدوات التقطيع</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">أجهزة الطبخ</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">أدوات التنظيف</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">مستلزمات الخبز</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">أواني الطهي</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-shop-accent" />
                <span className="text-gray-400">الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-shop-accent" />
                <a href="tel:+447308658080" className="text-gray-400 hover:text-white">+44 7308 658080</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-shop-accent" />
                <a href="mailto:bbassmashop@gmail.com" className="text-gray-400 hover:text-white">bbassmashop@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} باسما شوب. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
