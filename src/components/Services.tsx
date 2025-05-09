
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

const Services = () => {
  const services = [
    {
      title: "ניקוי ספות וריפודים",
      description: "ניקוי מקצועי ויסודי לכל סוגי הספות והריפודים, מחזיר את הבד למצב מעולה וללא כתמים",
      image: "/lovable-uploads/660ffb34-0206-4694-96fe-6ca309f74cde.png",
      features: [
        "מתאים לכל סוגי הבדים והריפודים",
        "הסרת כתמים עיקשים",
        "חומרים אקולוגיים בלבד",
        "מבטיח ניקיון יסודי ומתמשך"
      ]
    },
    {
      title: "ניקוי שטיחים",
      description: "ניקוי עמוק ויסודי לשטיחים תוך שמירה על איכות הבד ואריכות חיי השטיח",
      image: "/lovable-uploads/a6353d06-1062-4211-bb8c-bb58f31025f9.png",
      features: [
        "טכנולוגיה מתקדמת לניקוי עמוק",
        "הסרת אבק ואלרגנים",
        "טיפול בכתמים קשים",
        "ייבוש מהיר"
      ]
    },
    {
      title: "ניקוי מזרנים",
      description: "ניקוי וחיטוי מזרנים המבטיח סביבת שינה נקייה ובריאה יותר",
      image: "/lovable-uploads/b5da5eef-8bd2-49f7-9464-df20afcc4d88.png",
      features: [
        "הסרת קרדית האבק",
        "חיטוי והרחקת חיידקים",
        "טיפול בכתמים ולכלוך",
        "חומרים בטוחים לשימוש"
      ]
    },
    {
      title: "ניקוי ריפודי רכב",
      description: "ניקוי מקיף ומקצועי למושבי הרכב ולרצפת הרכב",
      image: "/lovable-uploads/86c69bb2-202c-4484-bb19-db8335eb7ccc.png",
      features: [
        "טיפול במושבי הרכב",
        "ניקוי שטיחי הרכב",
        "הסרת כתמים קשים",
        "חומרים ידידותיים לסביבה"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-24 md:py-40 bg-white" id="services">
      <div className="section-container">
        <div className="text-center mb-24 reveal-on-scroll">
          <span className="inline-block px-4 py-2 bg-brand-navy/5 text-brand-navy rounded-md mb-8 font-medium">
            השירותים שלנו
          </span>
          <h2 className="heading-lg mb-8 relative">
            <span className="text-gradient">פתרונות ניקיון</span> מקצועיים
            <div className="h-0.5 w-24 bg-gradient-to-r from-brand-gold to-brand-blue rounded-full mx-auto mt-8"></div>
          </h2>
          <p className="paragraph-lg text-brand-charcoal/80 max-w-3xl mx-auto">
            אנו מציעים מגוון רחב של שירותי ניקיון מקצועיים, תוך שימוש בחומרים אקולוגיים וטכנולוגיה מתקדמת
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group reveal-on-scroll"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex flex-col h-full">
                <div className="mb-8 rounded-xl overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-72 object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="flex-grow rtl-text">
                  <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                  <p className="text-brand-charcoal/80 mb-8">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <CheckCircle size={20} className="text-brand-gold min-w-[20px]" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
