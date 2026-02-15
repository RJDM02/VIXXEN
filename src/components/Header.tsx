import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-transparent.png";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/i18n/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/shop" className="text-sm font-sans tracking-widest uppercase text-foreground hover:text-primary transition-colors">
              {t("nav.shop")}
            </Link>
            <Link to="/collections" className="text-sm font-sans tracking-widest uppercase text-foreground hover:text-primary transition-colors">
              {t("nav.collections")}
            </Link>
          </nav>

          <Link to="/" className="flex items-center">
            <img src={logo} alt="VIXXEN" className="h-14 w-auto object-contain" />
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <LanguageSelector />
            <Link to="/login" className="hidden md:flex p-2 text-foreground hover:text-primary transition-colors" aria-label="Account">
              <User size={20} />
            </Link>
            <button className="relative p-2 text-foreground hover:text-primary transition-colors" aria-label="Cart">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-sans">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              <Link to="/shop" className="text-lg font-sans tracking-widest uppercase text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                {t("nav.shop")}
              </Link>
              <Link to="/collections" className="text-lg font-sans tracking-widest uppercase text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                {t("nav.collections")}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
