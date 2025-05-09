
import { Shield, Leaf, Award, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Shield size={24} className="text-brand-orange" />,
      title: "ניסיון וידע בתחום",
      description: "ניסיון רב בתחום הריפוד והבדים מאפשר לנו לזהות במדויק את סוג הבד ולהתאים את חומרי הניקוי הטובים ביותר"
    },
    {
      icon: <Leaf size={24} className="text-brand-orange" />,
      title: "חומרים אקולוגיים",
      description: "שימוש בחומרים ידידותיים לסביבה, לבעלי חיים ולבני אדם, מאושרים על ידי משרד הבריאות"
    },
    {
      icon: <Award size={24} className="text-brand-orange" />,
      title: "איכות ללא פשרות",
      description: "שימוש במכונות המתקדמות ביותר בשוק כדי לשמור על איכות הבד ואפילו לשפר אותה"
    },
    {
      icon: <Clock size={24} className="text-brand-orange" />,
      title: "שירות מהיר ויעיל",
      description: "עמידה בזמנים, עבודה מקצועית ומהירה שמכבדת את הזמן של הלקוחות שלנו"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="about">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  style={{direction: "rtl"}}
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange/10">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 text-right">
            <h2 className="heading-lg mb-6">אודות העסק</h2>
            <div style={{direction: "rtl"}}>
              <p className="text-lg text-gray-700 mb-4">
                אימפריאל פרש הוקמה עם החזון לספק את שירותי ניקוי הריפודים והשטיחים הטובים ביותר, תוך שמירה על הסביבה ועל בריאות לקוחותינו.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                הניסיון הרב שלנו בתחום הריפוד והבדים מאפשר לנו לזהות את סוגי הבדים השונים ולהשתמש בחומרים האיכותיים והמותאמים ביותר לכל סוג בד.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                אנו גאים להשתמש אך ורק בחומרים אקולוגיים וידידותיים לסביבה, לבעלי חיים, לבני אדם ולתינוקות, המאושרים על ידי משרד הבריאות.
              </p>
              <p className="text-lg text-gray-700">
                הטכנולוגיה המתקדמת שבה אנו משתמשים מבטיחה לא רק ניקיון מושלם, אלא גם שמירה על איכות הבד ואף שיפור שלו לאורך זמן.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
