import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    language: "Hindi",
    signIn: "Sign In",
    home: "Home",
    browse: "Browse",
  },
  hi: {
    language: "English",
    signIn: "साइन इन",
    home: "होम",
    browse: "ब्राउज़ करें",
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "hi" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        text: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
