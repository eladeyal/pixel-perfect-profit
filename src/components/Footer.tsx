
import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, Facebook, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-4 text-right" style={{ direction: "rtl" }}>
            <Link to="/" className="block mb-4">
              <img
                src="/lovable-uploads/c58045be-860f-4ffb-a191-204509d2196b.png"
                alt="ImperialFresh Logo"
                className="h-14"
              />
            </Link>
            <p className="mb-6 text-gray-300">
              אימפריאל פרש מספקים שירותי ניקוי מקצועיים לספות, שטיחים, מזרנים ורכבים, תוך שימוש בחומרים אקולוגיים וטכנולוגיה מתקדמת.
            </p>
            <div className="flex space-x-4 justify-end">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 text-right" style={{ direction: "rtl" }}>
            <h3 className="text-lg font-bold mb-4">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  בית
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  שירותים
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  מחירים
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  גלריה
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  אודות
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 text-right" style={{ direction: "rtl" }}>
            <h3 className="text-lg font-bold mb-4">שירותים</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  ניקוי ספות וריפודים
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  ניקוי שטיחים
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  ניקוי מזרנים
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  ניקוי ריפודי רכב
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  חבילות ניקיון בהנחה
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 text-right" style={{ direction: "rtl" }}>
            <h3 className="text-lg font-bold mb-4">צור קשר</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-orange" />
                <span>050-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-orange" />
                <span>contact@imperialfresh.co.il</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm text-center md:text-right mb-4 md:mb-0">
            © {new Date().getFullYear()} אימפריאל פרש. כל הזכויות שמורות.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white px-4 py-2 rounded-full transition-colors"
          >
            <span>חזרה למעלה</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
