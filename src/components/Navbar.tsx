
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
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/c58045be-860f-4ffb-a191-204509d2196b.png"
            alt="ImperialFresh Logo"
            className="h-12 md:h-14"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="font-medium text-gray-800 hover:text-brand-orange hover-underline"
          >
            בית
          </Link>
          <Link
            to="/services"
            className="font-medium text-gray-800 hover:text-brand-orange hover-underline"
          >
            שירותים
          </Link>
          <Link
            to="/pricing"
            className="font-medium text-gray-800 hover:text-brand-orange hover-underline"
          >
            מחירים
          </Link>
          <Link
            to="/gallery"
            className="font-medium text-gray-800 hover:text-brand-orange hover-underline"
          >
            גלריה
          </Link>
          <Link
            to="/about"
            className="font-medium text-gray-800 hover:text-brand-orange hover-underline"
          >
            אודות
          </Link>
          <Link
            to="/contact"
            className="font-medium text-gray-800 hover:text-brand-orange hover-underline"
          >
            צור קשר
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white flex items-center gap-2">
            <Phone size={18} />
            <span className="font-medium">התקשרו עכשיו</span>
          </Button>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-brand-orange focus:outline-none"
          >
            {isMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 z-50 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              onClick={toggleMenu}
              className="font-medium text-gray-800 hover:text-brand-orange py-2 text-right"
            >
              בית
            </Link>
            <Link
              to="/services"
              onClick={toggleMenu}
              className="font-medium text-gray-800 hover:text-brand-orange py-2 text-right"
            >
              שירותים
            </Link>
            <Link
              to="/pricing"
              onClick={toggleMenu}
              className="font-medium text-gray-800 hover:text-brand-orange py-2 text-right"
            >
              מחירים
            </Link>
            <Link
              to="/gallery"
              onClick={toggleMenu}
              className="font-medium text-gray-800 hover:text-brand-orange py-2 text-right"
            >
              גלריה
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="font-medium text-gray-800 hover:text-brand-orange py-2 text-right"
            >
              אודות
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="font-medium text-gray-800 hover:text-brand-orange py-2 text-right"
            >
              צור קשר
            </Link>
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white w-full flex items-center justify-center gap-2 mt-2">
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
