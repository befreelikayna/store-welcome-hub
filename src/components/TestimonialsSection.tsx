
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "محمد أحمد",
    role: "طباخ محترف",
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "منتجات رائعة وذات جودة عالية، وفرت علي الكثير من الوقت والجهد في المطبخ. أنصح بها بشدة لكل محبي الطبخ.",
    rating: 5,
  },
  {
    id: 2,
    name: "سارة محمود",
    role: "ربة منزل",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "ماكينة فرم اللحوم التي اشتريتها من متجركم غيرت طريقة تحضيري للطعام. سريعة وسهلة الاستخدام ونتائجها رائعة.",
    rating: 4,
  },
  {
    id: 3,
    name: "أحمد خالد",
    role: "صاحب مطعم",
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "أدوات عالية الجودة وخدمة عملاء ممتازة. التوصيل سريع والمنتجات تستحق السعر. سأتعامل معكم دائماً.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text">آراء عملائنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">ما يقوله عملاؤنا السعداء عن تجربتهم مع منتجاتنا وخدماتنا</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-shop-accent text-shop-accent" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
