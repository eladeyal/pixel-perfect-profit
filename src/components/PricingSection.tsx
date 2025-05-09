
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const regularPricing = [
    {
      item: "ספה עד 3 מטר מושבים קבועים",
      price: "₪250"
    },
    {
      item: "ספה 3 מטר מושבים נפרדים וכריות נפרדות",
      price: "₪300"
    },
    {
      item: "ספה 3 ו-2",
      price: "₪350"
    },
    {
      item: "כורסא",
      price: "₪100"
    },
    {
      item: "מזרון זוגי",
      price: "₪200"
    },
    {
      item: "מזרון זוגי - שני צדדים",
      price: "₪250"
    },
    {
      item: "4 כיסאות פינת אוכל",
      price: "₪80"
    },
    {
      item: "6 כיסאות פינת אוכל",
      price: "₪110"
    },
    {
      item: "10 כיסאות פינת אוכל",
      price: "₪160"
    },
    {
      item: "מושבי הרכב",
      price: "₪200"
    },
    {
      item: "מושבי רכב כולל רצפת הרכב",
      price: "₪250"
    }
  ];

  const bundleBenefits = [
    "חיסכון של 20%-40% בהזמנת חבילה",
    "חומרים אקולוגיים ידידותיים לסביבה",
    "שירות מהיר ואדיב",
    "חידוש מראה הריהוט",
    "הסרת כתמים עיקשים",
    "אחריות על העבודה"
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="pricing">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">מחירון שירותים</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            המחירים המשתלמים ביותר בשוק, עם הנחות מיוחדות בהזמנת חבילות ניקיון
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-8">
            <h3 className="heading-sm mb-6 text-center">מחירון שירותים</h3>
            <div className="space-y-4">
              {regularPricing.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100" style={{direction: "rtl"}}>
                  <span className="font-medium">{item.item}</span>
                  <span className="text-brand-orange font-bold text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-gradient-to-br from-brand-orange/90 to-brand-yellow rounded-xl shadow-lg p-8 text-white">
            <div className="absolute -top-4 -right-4 bg-white/20 w-24 h-24 rounded-full blur-2xl"></div>
            <div className="relative">
              <h3 className="heading-sm mb-6 text-center">חבילות ניקיון משתלמות</h3>
              <p className="mb-8 text-center">
                בהזמנת חבילות ניקיון הכוללות מספר פריטים, תוכלו ליהנות מהנחה של 20% עד 40% על המחיר הכולל!
              </p>
              
              <div className="space-y-3 mb-8" style={{direction: "rtl"}}>
                {bundleBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="min-w-[20px]" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button className="bg-white hover:bg-white/90 text-brand-orange text-lg py-6 px-8 flex items-center justify-center gap-2 mx-auto">
                  <span>לפרטים והזמנת חבילה</span>
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
