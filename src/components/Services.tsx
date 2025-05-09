
import { CheckCircle } from "lucide-react";

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

  return (
    <section className="py-24 md:py-32 bg-white" id="services">
      <div className="section-container">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 bg-brand-purple/10 text-brand-purple rounded-full mb-4 font-medium">
            השירותים שלנו
          </span>
          <h2 className="heading-lg mb-6 relative">
            <span className="text-gradient">פתרונות ניקיון</span> מקצועיים
            <div className="h-1 w-24 bg-gradient-to-r from-brand-purple to-brand-teal rounded-full mx-auto mt-4"></div>
          </h2>
          <p className="paragraph-lg text-brand-slate/80 max-w-3xl mx-auto">
            אנו מציעים מגוון רחב של שירותי ניקיון מקצועיים, תוך שימוש בחומרים אקולוגיים וטכנולוגיה מתקדמת
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col h-full">
                <div className="mb-8 rounded-xl overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="flex-grow rtl-text">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-brand-slate/80 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-brand-teal min-w-[20px]" />
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
