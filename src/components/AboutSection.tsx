
import { Shield, Leaf, Award, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Shield size={24} className="text-brand-teal" />,
      title: "ניסיון וידע בתחום",
      description: "ניסיון רב בתחום הריפוד והבדים מאפשר לנו לזהות במדויק את סוג הבד ולהתאים את חומרי הניקוי הטובים ביותר"
    },
    {
      icon: <Leaf size={24} className="text-brand-teal" />,
      title: "חומרים אקולוגיים",
      description: "שימוש בחומרים ידידותיים לסביבה, לבעלי חיים ולבני אדם, מאושרים על ידי משרד הבריאות"
    },
    {
      icon: <Award size={24} className="text-brand-teal" />,
      title: "איכות ללא פשרות",
      description: "שימוש במכונות המתקדמות ביותר בשוק כדי לשמור על איכות הבד ואפילו לשפר אותה"
    },
    {
      icon: <Clock size={24} className="text-brand-teal" />,
      title: "שירות מהיר ויעיל",
      description: "עמידה בזמנים, עבודה מקצועית ומהירה שמכבדת את הזמן של הלקוחות שלנו"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-lightGray" id="about">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 hover:shadow-hover transition-all duration-300"
                  style={{direction: "rtl"}}
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-secondary/20">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-brand-slate/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 rtl-text">
            <span className="inline-block px-4 py-1 bg-brand-purple/10 text-brand-purple rounded-full mb-4 font-medium">
              אודות העסק
            </span>
            <h2 className="heading-lg mb-6">המומחיות שלנו, הנוחות שלכם</h2>
            <div>
              <p className="paragraph-lg text-brand-slate/80 mb-4">
                אימפריאל פרש הוקמה עם החזון לספק את שירותי ניקוי הריפודים והשטיחים הטובים ביותר, תוך שמירה על הסביבה ועל בריאות לקוחותינו.
              </p>
              <p className="paragraph-lg text-brand-slate/80 mb-4">
                הניסיון הרב שלנו בתחום הריפוד והבדים מאפשר לנו לזהות את סוגי הבדים השונים ולהשתמש בחומרים האיכותיים והמותאמים ביותר לכל סוג בד.
              </p>
              <p className="paragraph-lg text-brand-slate/80 mb-4">
                אנו גאים להשתמש אך ורק בחומרים אקולוגיים וידידותיים לסביבה, לבעלי חיים, לבני אדם ולתינוקות, המאושרים על ידי משרד הבריאות.
              </p>
              <p className="paragraph-lg text-brand-slate/80">
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
