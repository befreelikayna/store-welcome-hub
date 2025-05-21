
import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-shop-primary" : "text-gray-700 hover:text-shop-primary";
  };
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Menu className="h-6 w-6 md:hidden" />
          <Link to="/" className="text-2xl font-bold text-shop-primary">باسما شوب</Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={isActive('/')}>الرئيسية</Link>
          <Link to="/products" className={isActive('/products')}>المنتجات</Link>
          <Link to="/features" className={isActive('/features')}>المميزات</Link>
          <Link to="/testimonials" className={isActive('/testimonials')}>آراء العملاء</Link>
          <Link to="/contact" className={isActive('/contact')}>اتصل بنا</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-700 hover:text-shop-primary">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/products">
            <Button variant="ghost" size="icon" className="relative text-gray-700 hover:text-shop-primary">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-shop-secondary rounded-full w-4 h-4 text-white text-xs flex items-center justify-center">
                3
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
