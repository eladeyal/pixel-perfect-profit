
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-brand-lightorange/30 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-6 text-right lg:order-2">
            <h1 className="heading-xl mb-6 animate-fade-in-left" style={{direction: "rtl"}}>
              <span className="text-brand-orange">ניקוי מקצועי</span> לספות, ריפודים ושטיחים
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 opacity-0 animate-fade-in" style={{animationDelay: "0.2s", animationFillMode: "forwards", direction: "rtl"}}>
              שירות מקצועי וידידותי לסביבה המחזיר את הריהוט והשטיחים שלך למצב חדש. אנחנו מתמחים בזיהוי סוגי בדים ושימוש בחומרים המותאמים בדיוק לצרכים שלך.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-end opacity-0 animate-fade-in" style={{animationDelay: "0.4s", animationFillMode: "forwards"}}>
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg py-6 px-8 flex items-center justify-center gap-2">
                תיאום ניקיון
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange/10 text-lg py-6 px-8">
                מחירון שירותים
              </Button>
            </div>
            <div className="flex justify-end mt-8 space-x-6 opacity-0 animate-fade-in" style={{animationDelay: "0.6s", animationFillMode: "forwards"}}>
              <div className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 text-sm">ניסיון</p>
                  <p className="font-bold text-brand-orange text-xl">+15 שנים</p>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 text-sm">לקוחות מרוצים</p>
                  <p className="font-bold text-brand-orange text-xl">+2,500</p>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 text-sm">חומרים ידידותיים</p>
                  <p className="font-bold text-brand-orange text-xl">100%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-yellow rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-orange rounded-full opacity-30 animate-pulse" style={{animationDelay: "1s"}}></div>
              
              <div className="relative grid grid-cols-2 gap-4 opacity-0 animate-scale-in" style={{animationDelay: "0.3s", animationFillMode: "forwards"}}>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="/lovable-uploads/d046ab99-4e45-4119-a71b-aff87bbea262.png" 
                    alt="Before and after sofa cleaning" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg mt-8">
                  <img 
                    src="/lovable-uploads/0a7319fa-b7ba-4357-b2e4-cc195f62cb54.png" 
                    alt="Clean sofa" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="/lovable-uploads/95376d45-b3c5-47bd-947f-037e23bf68d6.png" 
                    alt="Clean chairs" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg mt-8">
                  <img 
                    src="/lovable-uploads/7c501da8-117c-4d01-a316-2885051e7692.png" 
                    alt="Car seat cleaning" 
                    className="w-full h-auto object-cover"
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
