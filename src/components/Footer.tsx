import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="VIXXEN" className="h-16 w-auto mb-6" />
            <p className="text-muted-foreground font-sans text-sm leading-relaxed">
              Activate Your Power. Premium shapewear and activewear designed to empower your every move.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-primary font-sans text-sm tracking-widest uppercase mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {["New Arrivals", "Shapewear", "Activewear", "Accessories"].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-muted-foreground hover:text-foreground font-sans text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-primary font-sans text-sm tracking-widest uppercase mb-6">
              Help
            </h4>
            <ul className="space-y-3">
              {["Size Guide", "Shipping", "Returns", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-foreground font-sans text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-primary font-sans text-sm tracking-widest uppercase mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-sans text-xs tracking-wider">
            © 2025 by Vixxen Company. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground font-sans text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground font-sans text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
