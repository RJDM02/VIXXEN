import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/i18n/LanguageContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { t } = useLanguage();

  const product = allProducts.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-serif text-foreground mb-4">{t("product.notFound")}</h1>
            <Link to="/shop" className="text-primary hover:underline font-sans">{t("product.backToShop")}</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        category: product.category,
      });
    }
  };

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">{t("nav.home")}</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-primary transition-colors">{t("nav.shop")}</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        {/* Product Section */}
        <div className="container mx-auto px-4 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badgeKey && (
                <span className={`absolute top-6 left-6 px-4 py-1.5 text-xs font-sans font-bold tracking-wider uppercase ${
                  t(product.badgeKey) === t("product.badge.sale")
                    ? "bg-destructive text-destructive-foreground"
                    : "bg-primary text-primary-foreground"
                }`}>
                  {t(product.badgeKey)}
                </span>
              )}
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`absolute top-6 right-6 w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                  isLiked
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-3">
                {product.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4 tracking-wide">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-serif text-primary">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                    <span className="text-sm font-sans bg-destructive text-destructive-foreground px-3 py-1 rounded">
                      -{discount}%
                    </span>
                  </>
                )}
              </div>

              {/* Rating placeholder */}
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-primary fill-primary" />
                ))}
                <span className="text-sm text-muted-foreground font-sans ml-2">(24 {t("product.reviews")})</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                {product.description || t("product.defaultDescription")}
              </p>

              {/* Material */}
              {product.material && (
                <div className="mb-6">
                  <h3 className="text-xs font-sans text-primary tracking-widest uppercase mb-2">{t("product.material")}</h3>
                  <p className="text-sm text-muted-foreground font-sans">{product.material}</p>
                </div>
              )}

              {/* Sizes */}
              {product.sizes && (
                <div className="mb-6">
                  <h3 className="text-xs font-sans text-primary tracking-widest uppercase mb-3">{t("product.size")}</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-5 py-2.5 border text-sm font-sans transition-colors ${
                          selectedSize === size
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Colors */}
              {product.colors && (
                <div className="mb-8">
                  <h3 className="text-xs font-sans text-primary tracking-widest uppercase mb-3">{t("product.color")}</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-5 py-2.5 border text-sm font-sans transition-colors ${
                          selectedColor === color
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity + Add to cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-5 py-3 font-sans text-foreground min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-3 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
                >
                  <ShoppingBag size={18} />
                  {t("product.addToCart")}
                </button>
              </div>

              {/* Back */}
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-sans mt-4"
              >
                <ArrowLeft size={16} />
                {t("product.backToShop")}
              </button>
            </div>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-serif text-foreground mb-8 tracking-wide">{t("product.related")}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((rp) => (
                  <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                    <div className="aspect-[3/4] overflow-hidden bg-secondary mb-3">
                      <img src={rp.image} alt={rp.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <p className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-1">{rp.category}</p>
                    <h4 className="text-sm font-serif text-foreground group-hover:text-primary transition-colors">{rp.name}</h4>
                    <span className="text-base font-serif text-primary">${rp.price}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
