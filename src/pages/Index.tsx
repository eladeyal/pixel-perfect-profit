
import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PricingSection from "@/components/PricingSection";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <div className="py-16 md:py-24 bg-gradient-to-r from-brand-navy/5 to-brand-blue/5">
          <div className="max-w-content mx-auto flex flex-wrap justify-center gap-16 md:gap-32 px-8 reveal-on-scroll">
            {/* Trust badges/logos */}
            <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-500">
              <span className="text-xl text-brand-charcoal/70 font-medium">איכות מובטחת</span>
            </div>
            <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-500">
              <span className="text-xl text-brand-charcoal/70 font-medium">15 שנות ניסיון</span>
            </div>
            <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-500">
              <span className="text-xl text-brand-charcoal/70 font-medium">מעל 2,500 לקוחות מרוצים</span>
            </div>
            <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-500">
              <span className="text-xl text-brand-charcoal/70 font-medium">חומרים ידידותיים לסביבה</span>
            </div>
          </div>
        </div>
        <Services />
        <BeforeAfterGallery />
        <AboutSection />
        <PricingSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
