import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const languages = [
  { code: "es" as Language, label: "Español", flag: "🇪🇸" },
  { code: "en" as Language, label: "English", flag: "🇬🇧" },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Select language"
        >
          <Globe size={20} />
          <span className="hidden sm:inline text-sm font-sans tracking-wide uppercase">
            {language}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-card border-border min-w-[140px]"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-3 cursor-pointer ${
              language === lang.code ? "text-primary" : "text-foreground"
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="font-sans">{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
