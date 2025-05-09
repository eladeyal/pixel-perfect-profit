
import { useState } from 'react';
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

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">לפני ואחרי</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            תוצאות מרשימות שמדברות בעד עצמן - ראו את ההבדל בעצמכם
          </p>
        </div>

        <div className="relative">
          <div className="flex max-w-5xl mx-auto gap-4 md:gap-8">
            <div className="w-1/2 overflow-hidden rounded-lg shadow-lg">
              <div className="relative">
                <img 
                  src={galleryItems[activeIndex].before} 
                  alt="Before cleaning" 
                  className="w-full h-auto"
                />
                <div className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-full">
                  <span className="text-brand-orange font-bold">לפני</span>
                </div>
              </div>
            </div>

            <div className="w-1/2 overflow-hidden rounded-lg shadow-lg">
              <div className="relative">
                <img 
                  src={galleryItems[activeIndex].after} 
                  alt="After cleaning" 
                  className="w-full h-auto"
                />
                <div className="absolute top-4 right-4 bg-brand-orange/90 px-3 py-1 rounded-full">
                  <span className="text-white font-bold">אחרי</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <h3 className="text-xl font-bold">{galleryItems[activeIndex].title}</h3>
            <p className="text-gray-600">{galleryItems[activeIndex].description}</p>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-brand-orange text-brand-orange hover:bg-brand-orange/10"
              onClick={handlePrev}
            >
              <ArrowLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-brand-orange text-brand-orange hover:bg-brand-orange/10"
              onClick={handleNext}
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
