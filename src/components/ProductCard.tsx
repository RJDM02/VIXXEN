import { useState } from "react";
import { Heart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useCart } from "@/context/CartContext";
import { shareProduct } from "@/lib/share";
import { toast } from "sonner";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
}

const ProductCard = ({ id, name, price, originalPrice, image, category, badge }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();
  const { addToCart } = useCart();

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Link
      to={`/product/${id}`}
      className="group relative bg-card border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary hover:-translate-y-1 block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {badge && (
          <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-sans font-bold tracking-wider uppercase ${badge === t("product.badge.sale") ? "bg-destructive text-destructive-foreground" : "bg-primary text-primary-foreground"}`}>
            {badge}
          </span>
        )}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${isHovered || isLiked ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsLiked(!isLiked); }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${isLiked ? "bg-primary text-primary-foreground" : "bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground"}`}
            aria-label="Add to wishlist"
          >
            <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              shareProduct(id, name).then(() => toast(t("product.shared")));
            }}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            aria-label="Share"
          >
            <Share2 size={16} />
          </button>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart({ id, name, price, originalPrice, image, category });
            }}
            className="w-full py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors"
          >
            {t("product.addToCart")}
          </button>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-2">{category}</p>
        <h3 className="text-lg font-serif text-foreground mb-3 tracking-wide">{name}</h3>
        <div className="flex items-center gap-3">
          <span className="text-xl font-serif text-primary">${price}</span>
          {originalPrice && (
            <>
              <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
              <span className="text-xs font-sans bg-destructive text-destructive-foreground px-2 py-0.5 rounded">-{discount}%</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
