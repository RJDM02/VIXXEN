import { Truck, RefreshCcw, Award } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Truck, title: t("features.shipping.title"), description: t("features.shipping.desc") },
    { icon: RefreshCcw, title: t("features.returns.title"), description: t("features.returns.desc") },
    { icon: Award, title: t("features.quality.title"), description: t("features.quality.desc") },
  ];

  return (
    <section className="py-16 px-4 bg-card border-y border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-serif text-foreground mb-2 tracking-wide">{feature.title}</h3>
              <p className="text-sm font-sans text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
