import { createContext, useContext, useState, useMemo, useCallback, ReactNode, RefObject} from "react";
import { UseClickOutside } from "@hooks/UseClickOutside";
import { NaviData, Lang as NaviLang } from "@constants/NaviData";

interface LanguageContextType {
  lang: NaviLang;
  t: typeof NaviData.translations[NaviLang];
  langOpen: boolean;
  languageOptions: typeof NaviData.languageOptions;
  toggleLang: () => void;
  selectLanguage: (code: NaviLang) => void;
  langMenuRef: RefObject<HTMLDivElement | null>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<NaviLang>(() => {
    if (typeof window === "undefined") return "ko";
    const saved = localStorage.getItem("language") as NaviLang | null;
    return saved && NaviData.translations[saved] ? saved : "ko";
  });

  const [langOpen, setLangOpen] = useState(false);
  const t = useMemo(() => NaviData.translations[lang], [lang]);
  const languageOptions = useMemo(() => NaviData.languageOptions, []);

  const toggleLang = useCallback(() => {
    setLangOpen(open => !open);
  }, []);

  const selectLanguage = useCallback((code: NaviLang) => {
    setLang(code);
    localStorage.setItem("language", code);
    setLangOpen(false);
  }, []);

  const closeLangMenu = useCallback(() => {
    setLangOpen(false);
  }, []);

  const langMenuRef = UseClickOutside(closeLangMenu) as RefObject<HTMLDivElement | null>;

  return (
    <LanguageContext.Provider
      value={{ lang, t, langOpen, languageOptions, toggleLang, selectLanguage, langMenuRef }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function UseLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}