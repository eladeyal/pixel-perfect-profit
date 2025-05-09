
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-32 md:py-48 bg-white">
      <div className="section-container">
        <div className="text-center mb-24 reveal-on-scroll">
          <span className="inline-block px-4 py-2 bg-brand-navy/5 text-brand-navy rounded-md mb-8 font-medium">
            חוות דעת
          </span>
          <h2 className="heading-lg mb-8">
            <span className="text-gradient">מה הלקוחות</span> אומרים
            <div className="h-0.5 w-24 bg-gradient-to-r from-brand-gold to-brand-blue rounded-full mx-auto mt-8"></div>
          </h2>
          <p className="paragraph-lg text-brand-charcoal/80 max-w-3xl mx-auto">
            הסטנדרטים הגבוהים שלנו באים לידי ביטוי בחוויות המרוצות של לקוחותינו
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto reveal-on-scroll">
          <div className="premium-gradient rounded-xl shadow-xl p-16 md:p-24">
            <div className="absolute top-12 right-12 opacity-20">
              <Quote size={64} className="text-white" />
            </div>
            <div className="absolute bottom-12 left-12 opacity-20">
              <Quote size={64} className="text-white rotate-180" />
            </div>
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-10 bg-gradient-to-r from-brand-gold to-brand-blue p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img 
                    src={testimonials[activeSlide].image} 
                    alt={testimonials[activeSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex mb-8">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={24}
                    className={index < testimonials[activeSlide].rating ? "text-brand-gold fill-brand-gold" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-2xl italic mb-10 rtl-text font-light text-white">""{testimonials[activeSlide].text}""</p>
              
              <h4 className="font-bold text-xl text-white">{testimonials[activeSlide].name}</h4>
            </div>
          </div>

          <div className="flex justify-center mt-12 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border border-brand-navy text-brand-navy hover:bg-brand-navy/5 shadow-elegant h-14 w-14"
              onClick={handlePrevSlide}
            >
              <ArrowLeft size={24} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border border-brand-navy text-brand-navy hover:bg-brand-navy/5 shadow-elegant h-14 w-14"
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
