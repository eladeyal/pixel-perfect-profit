
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 48);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-elegant py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-content mx-auto px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="font-display font-bold text-2xl">
              <span className="bg-gradient-to-r from-brand-gold to-brand-blue bg-clip-text text-transparent">Imperial</span>
              <span className="text-brand-navy">Fresh</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className="font-medium text-brand-navy hover:text-brand-gold hover-underline transition-colors duration-300"
            >
              בית
            </Link>
            <Link
              to="#services"
              className="font-medium text-brand-navy hover:text-brand-gold hover-underline transition-colors duration-300"
            >
              שירותים
            </Link>
            <Link
              to="#pricing"
              className="font-medium text-brand-navy hover:text-brand-gold hover-underline transition-colors duration-300"
            >
              מחירים
            </Link>
            <Link
              to="#gallery"
              className="font-medium text-brand-navy hover:text-brand-gold hover-underline transition-colors duration-300"
            >
              גלריה
            </Link>
            <Link
              to="#about"
              className="font-medium text-brand-navy hover:text-brand-gold hover-underline transition-colors duration-300"
            >
              אודות
            </Link>
            <Link
              to="#contact"
              className="font-medium text-brand-navy hover:text-brand-gold hover-underline transition-colors duration-300"
            >
              צור קשר
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-brand-gold to-brand-blue hover:opacity-90 text-white flex items-center gap-3 py-6 px-8 rounded-md shadow-lg shadow-brand-gold/10 hover:shadow-xl hover:shadow-brand-gold/15 transition-all duration-300">
              <Phone size={18} />
              <span className="font-medium">התקשרו עכשיו</span>
            </Button>
          </div>

          {/* Mobile navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-brand-navy hover:text-brand-gold focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-elegant absolute top-full left-0 right-0 py-8 px-6 z-50 animate-fade-in">
          <nav className="flex flex-col space-y-5">
            <Link
              to="/"
              onClick={toggleMenu}
              className="font-medium text-brand-navy hover:text-brand-gold py-2 text-right transition-colors duration-300"
            >
              בית
            </Link>
            <Link
              to="#services"
              onClick={toggleMenu}
              className="font-medium text-brand-navy hover:text-brand-gold py-2 text-right transition-colors duration-300"
            >
              שירותים
            </Link>
            <Link
              to="#pricing"
              onClick={toggleMenu}
              className="font-medium text-brand-navy hover:text-brand-gold py-2 text-right transition-colors duration-300"
            >
              מחירים
            </Link>
            <Link
              to="#gallery"
              onClick={toggleMenu}
              className="font-medium text-brand-navy hover:text-brand-gold py-2 text-right transition-colors duration-300"
            >
              גלריה
            </Link>
            <Link
              to="#about"
              onClick={toggleMenu}
              className="font-medium text-brand-navy hover:text-brand-gold py-2 text-right transition-colors duration-300"
            >
              אודות
            </Link>
            <Link
              to="#contact"
              onClick={toggleMenu}
              className="font-medium text-brand-navy hover:text-brand-gold py-2 text-right transition-colors duration-300"
            >
              צור קשר
            </Link>
            <Button className="bg-gradient-to-r from-brand-gold to-brand-blue hover:opacity-90 text-white w-full flex items-center justify-center gap-2 mt-4 py-6 rounded-md shadow-lg">
              <Phone size={18} />
              <span className="font-medium">התקשרו עכשיו</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
