import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", password: "", confirmPassword: "", acceptTerms: false, newsletter: false,
  });
  const { t } = useLanguage();

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-20 mt-20">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">{t("register.title")}</h1>
            <p className="text-muted-foreground font-sans">{t("register.subtitle")}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-sans tracking-wide uppercase text-xs">{t("register.name")}</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input id="name" type="text" placeholder={t("register.name")} value={formData.name} onChange={(e) => handleChange("name", e.target.value)} className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-sans tracking-wide uppercase text-xs">{t("register.email")}</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input id="email" type="email" placeholder="tu@email.com" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-sans tracking-wide uppercase text-xs">{t("register.password")}</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={formData.password} onChange={(e) => handleChange("password", e.target.value)} className="pl-10 pr-10 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-foreground font-sans tracking-wide uppercase text-xs">{t("register.confirmPassword")}</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" value={formData.confirmPassword} onChange={(e) => handleChange("confirmPassword", e.target.value)} className="pl-10 pr-10 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary" />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox id="terms" checked={formData.acceptTerms} onCheckedChange={(checked) => handleChange("acceptTerms", checked as boolean)} className="mt-1 border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
              <Label htmlFor="terms" className="text-sm text-muted-foreground font-sans leading-relaxed cursor-pointer">
                {t("register.terms")}{" "}
                <Link to="/terms" className="text-primary hover:text-primary/80 transition-colors">{t("register.termsLink")}</Link>{" "}
                {t("register.and")}{" "}
                <Link to="/privacy" className="text-primary hover:text-primary/80 transition-colors">{t("register.privacyLink")}</Link>
              </Label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox id="newsletter" checked={formData.newsletter} onCheckedChange={(checked) => handleChange("newsletter", checked as boolean)} className="mt-1 border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
              <Label htmlFor="newsletter" className="text-sm text-muted-foreground font-sans leading-relaxed cursor-pointer">{t("register.newsletter")}</Label>
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-sans tracking-widest uppercase py-6 mt-2">{t("register.submit")}</Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border"></div></div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-4 text-muted-foreground font-sans">{t("register.or")}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button type="button" variant="outline" className="border-border text-foreground hover:bg-accent font-sans">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </Button>
            <Button type="button" variant="outline" className="border-border text-foreground hover:bg-accent font-sans">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
              Facebook
            </Button>
          </div>

          <p className="text-center mt-8 text-muted-foreground font-sans">
            {t("register.hasAccount")}{" "}
            <Link to="/login" className="text-primary hover:text-primary/80 transition-colors font-medium">{t("register.login")}</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
