
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    <section className="pt-40 pb-24 md:pt-48 md:pb-40 bg-brand-cream/40 overflow-hidden">
      <div className="container max-w-content mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-16 items-center">
          <div className="lg:col-span-13 text-right lg:order-2 rtl-text">
            <span 
              className="inline-block px-4 py-2 bg-brand-gold/10 text-brand-gold rounded-md mb-8 font-medium reveal-on-scroll"
              ref={el => elementsRef.current[0] = el}
            >
              המקצוענים בניקיון ריפודים
            </span>
            <h1 className="heading-xl mb-8 reveal-on-scroll" style={{animationDelay: "0.1s"}} ref={el => elementsRef.current[1] = el}>
              <span className="text-gradient">ניקוי מקצועי</span> לספות, ריפודים ושטיחים
            </h1>
            <p className="paragraph-lg mb-12 text-brand-charcoal/80 reveal-on-scroll" style={{animationDelay: "0.2s"}} ref={el => elementsRef.current[2] = el}>
              שירות מקצועי וידידותי לסביבה המחזיר את הריהוט והשטיחים שלך למצב חדש. אנחנו מתמחים בזיהוי סוגי בדים ושימוש בחומרים המותאמים בדיוק לצרכים שלך.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-end reveal-on-scroll" style={{animationDelay: "0.3s"}} ref={el => elementsRef.current[3] = el}>
              <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white text-lg py-7 px-10 flex items-center justify-center gap-3 rounded-md shadow-lg shadow-brand-navy/10 hover:shadow-xl hover:shadow-brand-navy/15 transition-all duration-500">
                תיאום ניקיון
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="border border-brand-navy text-brand-navy hover:bg-brand-navy/5 text-lg py-7 px-10 rounded-md">
                מחירון שירותים
              </Button>
            </div>
            <div className="flex justify-end mt-16 space-x-6 reveal-on-scroll" style={{animationDelay: "0.4s"}} ref={el => elementsRef.current[4] = el}>
              <div className="glass-card p-6 flex items-center justify-center floating-element" style={{animationDelay: "0.1s"}}>
                <div className="text-center">
                  <p className="text-brand-charcoal/60 text-sm">ניסיון</p>
                  <p className="font-bold text-brand-gold text-2xl">+15 שנים</p>
                </div>
              </div>
              <div className="glass-card p-6 flex items-center justify-center floating-element" style={{animationDelay: "0.3s"}}>
                <div className="text-center">
                  <p className="text-brand-charcoal/60 text-sm">לקוחות מרוצים</p>
                  <p className="font-bold text-brand-gold text-2xl">+2,500</p>
                </div>
              </div>
              <div className="glass-card p-6 flex items-center justify-center floating-element" style={{animationDelay: "0.5s"}}>
                <div className="text-center">
                  <p className="text-brand-charcoal/60 text-sm">חומרים ידידותיים</p>
                  <p className="font-bold text-brand-gold text-2xl">100%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-11 lg:order-1">
            <div className="relative">
              {/* Abstract shapes */}
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-r from-brand-gold/20 to-brand-blue/20 blur-3xl"></div>
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-gold/20 blur-3xl"></div>
              
              <div className="relative grid grid-cols-2 gap-8 reveal-on-scroll" style={{animationDelay: "0.5s"}} ref={el => elementsRef.current[5] = el}>
                <div className="overflow-hidden rounded-xl shadow-elegant group">
                  <img 
                    src="/lovable-uploads/d046ab99-4e45-4119-a71b-aff87bbea262.png" 
                    alt="Before and after sofa cleaning" 
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-elegant mt-16">
                  <img 
                    src="/lovable-uploads/0a7319fa-b7ba-4357-b2e4-cc195f62cb54.png" 
                    alt="Clean sofa" 
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-elegant">
                  <img 
                    src="/lovable-uploads/95376d45-b3c5-47bd-947f-037e23bf68d6.png" 
                    alt="Clean chairs" 
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-elegant mt-16">
                  <img 
                    src="/lovable-uploads/7c501da8-117c-4d01-a316-2885051e7692.png" 
                    alt="Car seat cleaning" 
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
