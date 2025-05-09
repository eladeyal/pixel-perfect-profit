
import { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      name: "רוני כהן",
      image: "/placeholder.svg",
      text: "תודה רבה! מחיר הוגן, הגעה בזמן... שירות אדיבות מקצועיות מעל הכול אני מרוצה מאוד!",
      rating: 5
    },
    {
      name: "מיכל לוי",
      image: "/placeholder.svg",
      text: "הספה הייתה כל-כך שחורה אני עדיין בשוק שהיא חזרה לצבע שלה. אתם פשוט נותנים תודה רבה על השירות המהיר הזה שיצא נהדר ותוצאות מושלמות שהיה חג שמח.",
      rating: 5
    },
    {
      name: "דני אברהם",
      image: "/placeholder.svg",
      text: "איזה כיף תודה אני שמח שאתם מרוצים וכנ''ל ייצא טוב חג שמח",
      rating: 5
    }
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="section-container">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 bg-brand-purple/10 text-brand-purple rounded-full mb-4 font-medium">
            חוות דעת
          </span>
          <h2 className="heading-lg mb-6">
            <span className="text-gradient">מה הלקוחות</span> אומרים
            <div className="h-1 w-24 bg-gradient-to-r from-brand-purple to-brand-teal rounded-full mx-auto mt-4"></div>
          </h2>
          <p className="paragraph-lg text-brand-slate/80 max-w-3xl mx-auto">
            הסטנדרטים הגבוהים שלנו באים לידי ביטוי בחוויות המרוצות של לקוחותינו
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="premium-gradient rounded-2xl shadow-xl p-10 md:p-16">
            <div className="absolute top-8 right-8 opacity-20">
              <Quote size={60} className="text-brand-purple" />
            </div>
            <div className="absolute bottom-8 left-8 opacity-20">
              <Quote size={60} className="text-brand-teal rotate-180" />
            </div>
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-8 bg-gradient-to-r from-brand-purple to-brand-teal p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img 
                    src={testimonials[activeSlide].image} 
                    alt={testimonials[activeSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={24}
                    className={index < testimonials[activeSlide].rating ? "text-brand-teal fill-brand-teal" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-2xl italic mb-8 rtl-text font-light">"{testimonials[activeSlide].text}"</p>
              
              <h4 className="font-bold text-xl">{testimonials[activeSlide].name}</h4>
            </div>
          </div>

          <div className="flex justify-center mt-10 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-2 border-brand-purple text-brand-purple hover:bg-brand-purple/10 shadow-elegant h-14 w-14"
              onClick={handlePrevSlide}
            >
              <ArrowLeft size={24} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-2 border-brand-purple text-brand-purple hover:bg-brand-purple/10 shadow-elegant h-14 w-14"
              onClick={handleNextSlide}
            >
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
