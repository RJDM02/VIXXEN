import { useState } from "react";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState("es");

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Select language"
        >
          <Globe size={20} />
          <span className="hidden sm:inline text-sm font-sans tracking-wide uppercase">
            {currentLanguage?.code}
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
            onClick={() => setCurrentLang(lang.code)}
            className={`flex items-center gap-3 cursor-pointer ${
              currentLang === lang.code ? "text-primary" : "text-foreground"
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
