
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">متجر المطبخ</h3>
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
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">منتجاتنا</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">مميزاتنا</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">آراء العملاء</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">فئات المنتجات</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">أجهزة المطبخ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">أدوات التقطيع</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">أجهزة الطبخ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">أدوات التنظيف</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">مستلزمات الخبز</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">أواني الطهي</a></li>
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
                <span className="text-gray-400">+966 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-shop-accent" />
                <span className="text-gray-400">info@kitchen-shop.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} متجر المطبخ. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
