
import React from 'react';
import { MessageCircleMore } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = `مرحباً، أنا مهتم بمنتجاتكم. هل يمكنني معرفة المزيد؟`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/447308658080?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      aria-label="تواصل معنا عبر واتساب"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-colors duration-300 animate-bounce"
    >
      <MessageCircleMore className="h-7 w-7 text-white" />
    </button>
  );
};

export default WhatsAppButton;
