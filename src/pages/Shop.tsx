import { useState } from "react";
import { ChevronDown, SlidersHorizontal, Grid3X3, LayoutGrid } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/i18n/LanguageContext";
import { allProducts } from "@/data/products";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [gridCols, setGridCols] = useState<3 | 4>(4);
  const { t } = useLanguage();

  const categories = [
    { key: "All", label: t("shop.all") },
    { key: "Shapewear", label: t("categories.shapewear") },
    { key: "Activewear", label: t("categories.activewear") },
    { key: "Accessories", label: t("categories.accessories") },
  ];

  const filteredProducts = selectedCategory === "All" ? allProducts : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="flex flex-col lg:flex-row">
          <aside className={`w-full lg:w-64 bg-card border-r border-border p-6 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] overflow-y-auto transition-all duration-300 ${isSidebarOpen ? "block" : "hidden lg:block"}`}>
            <div className="mb-8">
              <h3 className="text-primary font-sans text-xs tracking-widest uppercase mb-4 flex items-center justify-between">
                {t("shop.categories")}
                <ChevronDown size={16} />
              </h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <label key={cat.key} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="category" checked={selectedCategory === cat.key} onChange={() => setSelectedCategory(cat.key)} className="w-4 h-4 accent-primary cursor-pointer" />
                    <span className="text-sm font-sans text-muted-foreground group-hover:text-foreground transition-colors">{cat.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-primary font-sans text-xs tracking-widest uppercase mb-4 flex items-center justify-between">
                {t("shop.size")}
                <ChevronDown size={16} />
              </h3>
              <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <button key={size} className="px-4 py-2 border border-border text-sm font-sans text-muted-foreground hover:border-primary hover:text-primary transition-colors">{size}</button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-primary font-sans text-xs tracking-widest uppercase mb-4 flex items-center justify-between">
                {t("shop.priceRange")}
                <ChevronDown size={16} />
              </h3>
              <input type="range" min="0" max="200" defaultValue="200" className="w-full accent-primary" />
              <div className="flex justify-between text-xs font-sans text-muted-foreground mt-2">
                <span>$0</span>
                <span>$200</span>
              </div>
            </div>
          </aside>

          <div className="flex-1 p-6 lg:p-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4 tracking-wide">{t("shop.title")}</h1>
              <p className="text-muted-foreground font-sans">{t("shop.subtitle")}</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
              <div className="flex items-center gap-4">
                <button className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border text-sm font-sans text-foreground hover:border-primary transition-colors" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <SlidersHorizontal size={16} />
                  {t("shop.filters")}
                </button>
                <p className="text-sm font-sans text-muted-foreground">
                  {t("shop.showing")} <span className="text-primary font-bold">{filteredProducts.length}</span> {t("shop.products")}
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <button onClick={() => setGridCols(3)} className={`p-2 border transition-colors ${gridCols === 3 ? "bg-primary border-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary"}`}><LayoutGrid size={18} /></button>
                <button onClick={() => setGridCols(4)} className={`p-2 border transition-colors ${gridCols === 4 ? "bg-primary border-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary"}`}><Grid3X3 size={18} /></button>
              </div>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${gridCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={(product as any).originalPrice}
                    image={product.image}
                    category={product.category}
                    badge={(product as any).badgeKey ? t((product as any).badgeKey) : undefined}
                  />
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-sans">{t("shop.noProducts")}</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
