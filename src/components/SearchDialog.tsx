import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { allProducts } from "@/data/products";
import { useLanguage } from "@/i18n/LanguageContext";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchDialog = ({ isOpen, onClose }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

  const categories = ["All", "Shapewear", "Activewear", "Accessories"];

  const filteredProducts = allProducts.filter((product) => {
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
      setSelectedCategory("All");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-sm animate-fade-in">
      <div className="container mx-auto px-4 pt-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("search.placeholder")}
              className="w-full pl-12 pr-4 py-4 bg-card border border-border text-foreground font-sans text-lg tracking-wide focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button
            onClick={onClose}
            className="p-3 text-foreground hover:text-primary transition-colors"
            aria-label="Close search"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs font-sans tracking-widest uppercase border transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat === "All" ? t("shop.all") : cat}
            </button>
          ))}
        </div>

        <div className="mb-4">
          <p className="text-sm font-sans text-muted-foreground">
            {t("shop.showing")} <span className="text-primary font-bold">{filteredProducts.length}</span> {t("shop.products")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[60vh] overflow-y-auto pr-2">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to="/shop"
              onClick={onClose}
              className="flex gap-4 p-3 bg-card border border-border hover:border-primary transition-colors group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-24 object-cover flex-shrink-0"
              />
              <div className="flex flex-col justify-center min-w-0">
                <p className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-1">
                  {product.category}
                </p>
                <h4 className="text-sm font-serif text-foreground group-hover:text-primary transition-colors truncate">
                  {product.name}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-base font-serif text-primary">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground font-sans">{t("search.noResults")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDialog;
