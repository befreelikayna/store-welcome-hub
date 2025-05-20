
import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Menu className="h-6 w-6 md:hidden" />
          <h1 className="text-2xl font-bold text-shop-primary">باسما شوب</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-700 hover:text-shop-primary">الرئيسية</a>
          <a href="#products" className="text-gray-700 hover:text-shop-primary">المنتجات</a>
          <a href="#features" className="text-gray-700 hover:text-shop-primary">المميزات</a>
          <a href="#testimonials" className="text-gray-700 hover:text-shop-primary">آراء العملاء</a>
          <a href="#contact" className="text-gray-700 hover:text-shop-primary">اتصل بنا</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-700 hover:text-shop-primary">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative text-gray-700 hover:text-shop-primary">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-shop-secondary rounded-full w-4 h-4 text-white text-xs flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
