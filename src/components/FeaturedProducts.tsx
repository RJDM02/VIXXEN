import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Sculpting Bodysuit",
    price: 89,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
    category: "Shapewear",
    badge: "NEW",
  },
  {
    id: 2,
    name: "High-Waist Leggings",
    price: 65,
    originalPrice: 85,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80",
    category: "Activewear",
    badge: "SALE",
  },
  {
    id: 3,
    name: "Sports Bra Elite",
    price: 55,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
    category: "Activewear",
  },
  {
    id: 4,
    name: "Waist Trainer Pro",
    price: 79,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80",
    category: "Shapewear",
    badge: "BESTSELLER",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-4 bg-cream">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-light text-center text-background mb-4 tracking-wide italic">
          New Products
        </h2>
        <p className="text-center text-background/60 font-sans mb-16">
          Discover our latest arrivals
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
