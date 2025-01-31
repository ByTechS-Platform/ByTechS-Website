import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context
const LanguageContext = createContext();

// Language Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const handleLanguageSwitch = (event) => {
      const { lang } = event.detail;
      setLanguage(lang);
    };

    // Listen for global language change events
    window.addEventListener("languageChange", handleLanguageSwitch);

    return () => {
      window.removeEventListener("languageChange", handleLanguageSwitch);
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => useContext(LanguageContext);
