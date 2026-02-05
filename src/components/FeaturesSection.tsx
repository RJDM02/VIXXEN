import { Truck, RefreshCcw, Award } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $50",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "30 days to exchange",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "First-class materials",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-card border-y border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-serif text-foreground mb-2 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-sm font-sans text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
