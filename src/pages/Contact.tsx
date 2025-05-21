
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  // Update the page title
  React.useEffect(() => {
    document.title = "باسما شوب | اتصل بنا";
  }, []);

  const handleWhatsAppClick = () => {
    const message = `مرحباً، أرغب في التواصل معكم بخصوص منتجاتكم`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/447308658080?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="py-10 bg-gray-50">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center gradient-text">اتصل بنا</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              نحن هنا للإجابة على استفساراتك ومساعدتك في اختيار المنتج المناسب
            </p>
          </div>
        </div>
        
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-shop-primary mb-6">معلومات التواصل</h2>
              
              <div className="flex items-center gap-4">
                <div className="bg-shop-primary/10 p-4 rounded-full">
                  <Phone className="h-6 w-6 text-shop-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">رقم الهاتف</h3>
                  <p className="text-gray-600 ltr:text-left" dir="ltr">+44 7308 658080</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-shop-primary/10 p-4 rounded-full">
                  <Mail className="h-6 w-6 text-shop-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">البريد الإلكتروني</h3>
                  <p className="text-gray-600">bbassmashop@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-shop-primary/10 p-4 rounded-full">
                  <MapPin className="h-6 w-6 text-shop-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">العنوان</h3>
                  <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
              
              <div className="pt-6">
                <Button 
                  className="bg-green-600 hover:bg-green-700 px-6 py-6 text-lg"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  تواصل معنا عبر واتساب
                </Button>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-shop-primary/20 focus:border-shop-primary"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-shop-primary/20 focus:border-shop-primary"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-shop-primary/20 focus:border-shop-primary"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-shop-primary/20 focus:border-shop-primary h-32"
                  placeholder="أدخل رسالتك هنا..."
                ></textarea>
              </div>
              
              <div>
                <Button className="w-full bg-shop-primary hover:bg-shop-primary/90">
                  إرسال الرسالة
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
