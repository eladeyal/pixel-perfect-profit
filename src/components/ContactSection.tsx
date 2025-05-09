
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-lightorange/30" id="contact">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">צרו איתנו קשר</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            לתיאום ניקיון, הצעת מחיר או כל שאלה אחרת, אנחנו כאן לשירותכם
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8" style={{direction: "rtl"}}>
            <h3 className="heading-sm mb-6 text-right">השאירו פרטים</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-right">שם מלא</label>
                  <Input id="name" placeholder="הכנס את שמך המלא" className="text-right" />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-right">טלפון</label>
                  <Input id="phone" placeholder="הכנס את מספר הטלפון" type="tel" className="text-right" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-right">אימייל</label>
                <Input id="email" placeholder="הכנס את כתובת האימייל" type="email" className="text-right" />
              </div>

              <div>
                <label htmlFor="service" className="block mb-2 text-right">שירות מבוקש</label>
                <select id="service" className="w-full rounded-md border border-input bg-transparent px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-ring text-right">
                  <option value="">בחר שירות</option>
                  <option value="sofa">ניקוי ספות</option>
                  <option value="carpet">ניקוי שטיחים</option>
                  <option value="mattress">ניקוי מזרנים</option>
                  <option value="car">ניקוי ריפודי רכב</option>
                  <option value="package">חבילת ניקיון</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-right">הודעה</label>
                <Textarea id="message" placeholder="כתוב את ההודעה שלך כאן" rows={5} className="text-right" />
              </div>

              <Button type="submit" className="bg-brand-orange hover:bg-brand-orange/90 text-white w-full py-6 flex items-center justify-center gap-2">
                <span>שלח פנייה</span>
                <Send size={18} />
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8" style={{direction: "rtl"}}>
              <h3 className="heading-sm mb-6 text-right">פרטי התקשרות</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-full">
                    <Phone size={24} className="text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-right">טלפון</h4>
                    <p className="text-gray-600">050-123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-full">
                    <Mail size={24} className="text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-right">אימייל</h4>
                    <p className="text-gray-600">contact@imperialfresh.co.il</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-full">
                    <MapPin size={24} className="text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-right">אזורי שירות</h4>
                    <p className="text-gray-600">מרכז הארץ והסביבה</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-orange to-brand-yellow rounded-xl shadow-lg p-8 text-white" style={{direction: "rtl"}}>
              <h3 className="heading-sm mb-4 text-white text-right">חבילות ניקיון בהנחה</h3>
              <p className="mb-6 text-right">
                אנחנו היחידים בתחום שמציעים חבילות ניקיון בהנחות משמעותיות של 20% עד 40% ללקוחותינו!
              </p>
              <Button className="bg-white hover:bg-white/90 text-brand-orange w-full flex items-center justify-center gap-2">
                <span>לפרטים והזמנה</span>
                <Phone size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
