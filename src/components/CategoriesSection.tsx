import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Shapewear",
    description: "Sculpting and shaping",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
  },
  {
    id: 2,
    name: "Activewear",
    description: "Performance and comfort",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
  },
  {
    id: 3,
    name: "Accessories",
    description: "Complete your outfit",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-light text-center text-foreground mb-4 tracking-wide">
          Our Collections
        </h2>
        <p className="text-center text-muted-foreground font-sans mb-16">
          Discover your perfect fit
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to="/shop"
              className="group relative aspect-[3/4] overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent transition-opacity duration-300 group-hover:opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-2 tracking-wide">
                  {category.name}
                </h3>
                <p className="text-sm font-sans text-muted-foreground tracking-wider uppercase mb-4">
                  {category.description}
                </p>
                <span className="inline-block px-6 py-2 border border-primary text-primary font-sans text-xs tracking-widest uppercase opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
