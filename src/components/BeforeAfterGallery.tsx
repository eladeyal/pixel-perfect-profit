
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BeforeAfterGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryItems = [
    {
      before: '/lovable-uploads/e388edd6-89c9-49e7-8965-57139b06b2f2.png',
      after: '/lovable-uploads/cab60ca8-5925-4c49-9393-0feb3407c9e2.png',
      title: 'ניקוי ספה אפורה',
      description: 'הסרת כתמים וחידוש מראה הספה'
    },
    {
      before: '/lovable-uploads/eb28b364-d76b-4e95-ba28-ef991aa1336f.png',
      after: '/lovable-uploads/dbc66369-f44c-4ba3-bd11-536ca2a99efb.png',
      title: 'ניקוי מושבי רכב',
      description: 'הסרת כתמים והחזרת צבע המושבים למצב מקורי'
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
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
    <section className="py-32 md:py-48 bg-brand-cream/40 overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-24 reveal-on-scroll">
          <span className="inline-block px-4 py-2 bg-brand-navy/5 text-brand-navy rounded-md mb-8 font-medium">
            התוצאות מדברות
          </span>
          <h2 className="heading-lg mb-8">
            <span className="text-gradient">לפני</span> ואחרי
            <div className="h-0.5 w-24 bg-gradient-to-r from-brand-gold to-brand-blue rounded-full mx-auto mt-8"></div>
          </h2>
          <p className="paragraph-lg text-brand-charcoal/80 max-w-3xl mx-auto">
            תוצאות מרשימות שמדברות בעד עצמן - ראו את ההבדל בעצמכם
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto reveal-on-scroll">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-elegant">
              <div className="relative group">
                <img 
                  src={galleryItems[activeIndex].before} 
                  alt="Before cleaning" 
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-md shadow-elegant">
                  <span className="text-brand-charcoal font-bold">לפני</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-elegant">
              <div className="relative group">
                <img 
                  src={galleryItems[activeIndex].after} 
                  alt="After cleaning" 
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-gold to-brand-blue px-5 py-2 rounded-md shadow-elegant">
                  <span className="text-white font-bold">אחרי</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-elegant rtl-text">
            <h3 className="text-2xl font-bold">{galleryItems[activeIndex].title}</h3>
            <p className="text-brand-charcoal/80 mt-4 text-lg">{galleryItems[activeIndex].description}</p>
          </div>

          <div className="flex justify-center mt-12 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border border-brand-navy text-brand-navy hover:bg-brand-navy/5 shadow-elegant h-14 w-14"
              onClick={handlePrev}
            >
              <ArrowLeft size={24} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border border-brand-navy text-brand-navy hover:bg-brand-navy/5 shadow-elegant h-14 w-14"
              onClick={handleNext}
            >
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
