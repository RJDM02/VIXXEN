import { Link } from "react-router-dom";
import logo from "@/assets/logo-transparent.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4 pt-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
      
      {/* Subtle gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Logo */}
        <div className="mb-16 animate-fade-in-down">
          <img
            src={logo}
            alt="VIXXEN"
            className="h-32 md:h-40 lg:h-48 w-auto mx-auto"
          />
        </div>

        {/* Hero Content */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-foreground mb-8 tracking-wide">
            Activate Your Power
          </h1>
          <p className="text-lg md:text-xl font-sans text-foreground/80 tracking-widest mb-12">
            SHAPEWEAR & ACTIVEWEAR
          </p>
          <Link
            to="/shop"
            className="inline-block px-12 py-4 border-2 border-foreground bg-background text-foreground font-sans text-base tracking-widest uppercase transition-all duration-500 hover:bg-foreground hover:text-background hover:shadow-gold"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
