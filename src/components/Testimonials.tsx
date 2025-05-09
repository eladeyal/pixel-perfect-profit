
import { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
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
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">מה הלקוחות אומרים</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            הסטנדרטים הגבוהים שלנו באים לידי ביטוי בחוויות המרוצות של לקוחותינו
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 bg-gray-200">
                <img 
                  src={testimonials[activeSlide].image} 
                  alt={testimonials[activeSlide].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className={index < testimonials[activeSlide].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-xl italic mb-6">"{testimonials[activeSlide].text}"</p>
              
              <h4 className="font-bold text-lg">{testimonials[activeSlide].name}</h4>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-brand-orange text-brand-orange hover:bg-brand-orange/10"
              onClick={handlePrevSlide}
            >
              <ArrowLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-brand-orange text-brand-orange hover:bg-brand-orange/10"
              onClick={handleNextSlide}
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
