
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
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <div className="py-12 bg-gradient-to-r from-brand-purple/5 to-brand-teal/5">
          <div className="max-w-content mx-auto flex flex-wrap justify-center gap-12 md:gap-24 px-4">
            {/* Trust badges/logos would go here */}
            <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
              <span className="text-xl text-brand-slate/60 font-medium">איכות מובטחת</span>
            </div>
            <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
              <span className="text-xl text-brand-slate/60 font-medium">15 שנות ניסיון</span>
            </div>
            <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
              <span className="text-xl text-brand-slate/60 font-medium">מעל 2,500 לקוחות מרוצים</span>
            </div>
            <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
              <span className="text-xl text-brand-slate/60 font-medium">חומרים ידידותיים לסביבה</span>
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
