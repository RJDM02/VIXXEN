import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo-transparent.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const shopLinks = [
    { label: t("footer.newArrivals"), to: "/shop" },
    { label: t("footer.shapewear"), to: "/shop" },
    { label: t("footer.activewear"), to: "/shop" },
    { label: t("footer.accessories"), to: "/shop" },
  ];

  const helpLinks = [
    { label: t("footer.sizeGuide"), to: "/" },
    { label: t("footer.shipping"), to: "/" },
    { label: t("footer.returns"), to: "/" },
    { label: t("footer.contact"), to: "/" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <img src={logo} alt="VIXXEN" className="h-16 w-auto mb-6" />
            <p className="text-muted-foreground font-sans text-sm leading-relaxed">{t("footer.description")}</p>
          </div>

          <div>
            <h4 className="text-primary font-sans text-sm tracking-widest uppercase mb-6">{t("footer.shop")}</h4>
            <ul className="space-y-3">
              {shopLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-muted-foreground hover:text-foreground font-sans text-sm transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-sans text-sm tracking-widest uppercase mb-6">{t("footer.help")}</h4>
            <ul className="space-y-3">
              {helpLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-muted-foreground hover:text-foreground font-sans text-sm transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-sans text-sm tracking-widest uppercase mb-6">{t("footer.followUs")}</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="Twitter"><Twitter size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-sans text-xs tracking-wider">{t("footer.rights")}</p>
          <div className="flex gap-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground font-sans text-xs transition-colors">{t("footer.privacy")}</Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground font-sans text-xs transition-colors">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
