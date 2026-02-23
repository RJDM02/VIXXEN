import ProductCard from "./ProductCard";
import { useLanguage } from "@/i18n/LanguageContext";
import { allProducts } from "@/data/products";

const products = allProducts.slice(0, 4);

const FeaturedProducts = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-light text-center text-background mb-4 tracking-wide italic">
          {t("featured.title")}
        </h2>
        <p className="text-center text-background/60 font-sans mb-16">
          {t("featured.subtitle")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                category={product.category}
                badge={product.badgeKey ? t(product.badgeKey) : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
