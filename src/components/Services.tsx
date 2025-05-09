
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
    <section className="py-16 md:py-24 bg-white" id="services">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">השירותים שלנו</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            אנו מציעים מגוון רחב של שירותי ניקיון מקצועיים, תוך שימוש בחומרים אקולוגיים וטכנולוגיה מתקדמת
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-grow text-right" style={{direction: "rtl"}}>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-brand-orange min-w-[18px]" />
                        <span>{feature}</span>
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
