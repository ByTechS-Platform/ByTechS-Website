import React, { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../Styles/Navbar.scss";
import logo from "../assets/Bytechs_شعار - أبيض 3.png";
import coloredLogo from "../assets/Bytechs_شعار - ملون 1.png";
import { switchLanguage } from "../utils/languageUtils";
import { useLanguage } from "../utils/LanguageContext";

const NavBar = () => {
  const { language, setLanguage } = useLanguage();
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(false);
  const location = useLocation();

  // Toggle between English and Arabic
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    switchLanguage(newLanguage);
    window.dispatchEvent(
      new CustomEvent("languageChange", { detail: { lang: newLanguage } })
    );
  };

  // Update nav style based on background brightness
  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const { top, bottom } = section.getBoundingClientRect();
      if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
        const bg = window.getComputedStyle(section).backgroundColor;
        const [r, g, b] = bg.match(/\d+/g).map(Number);
        setIsLightBackground((r + g + b) / 3 > 200);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleBurgerMenu = () => setBurgerMenuOpen((prev) => !prev);

  // Define your in-page sections
  const navItems = [
    { id: "home", en: "Home", ar: "الرئيسية" },
    { id: "about", en: "About us", ar: "عن بايتكس" },
    { id: "communities", en: "Communities", ar: "المجتمعات" },
    { id: "news", en: "News", ar: "الأخبـار" },
    { id: "contact", en: "Contact us", ar: "تواصل معنا" },
  ];

  // Render links that scroll to sections
  const renderNavLinks = () =>
    navItems.map((item) => (
      <li key={item.id}>
        <HashLink
          smooth
          to={`/#${item.id}`}
          className="nav-link"
          style={{ color: isLightBackground ? "black" : "white" }}
          data-en={item.en}
          data-ar={item.ar}
        >
          {language === "en" ? item.en : item.ar}
        </HashLink>
      </li>
    ));

  return (
    <nav
      style={{
        color: isLightBackground ? "black" : "white",
        backgroundColor: isLightBackground ? "white" : "#524fe1",
      }}
    >
      <img
        src={isLightBackground ? coloredLogo : logo}
        className="logo"
        alt="Bytechs Logo"
      />

      <ul
        className={`nav-links ${
          language === "ar" ? "align-right" : "align-left"
        }`}
      >
        {renderNavLinks()}
      </ul>

      <div className="language-switch">
        <button
          className={`Eng ${language === "en" ? "active" : ""}`}
          onClick={toggleLanguage}
          aria-label="Switch to English"
          style={{
            color:
              language === "en"
                ? "#5552e1"
                : isLightBackground
                ? "#333"
                : "#ddd",
          }}
        >
          English
        </button>
        <button
          className={`AR ${language === "ar" ? "active" : ""}`}
          onClick={toggleLanguage}
          aria-label="Switch to Arabic"
          style={{
            color:
              language === "ar"
                ? "#5552e1"
                : isLightBackground
                ? "#333"
                : "#ddd",
          }}
        >
          العربية
        </button>
      </div>

      <div
        className={`burger-menu ${burgerMenuOpen ? "active" : ""}`}
        onClick={toggleBurgerMenu}
      >
        <div className="burger-icon">
          <span
            style={{ backgroundColor: isLightBackground ? "black" : "white" }}
          />
          <span
            style={{ backgroundColor: isLightBackground ? "black" : "white" }}
          />
          <span
            style={{ backgroundColor: isLightBackground ? "black" : "white" }}
          />
        </div>
        <ul className="burger-links">
          {renderNavLinks()}
          <div className="language-switch">
            <button
              className={`Eng ${language === "en" ? "active" : ""}`}
              onClick={toggleLanguage}
              aria-label="Switch to English"
              style={{
                color:
                  language === "en"
                    ? "#5552e1"
                    : isLightBackground
                    ? "#333"
                    : "#ddd",
              }}
            >
              English
            </button>
            <button
              className={`AR ${language === "ar" ? "active" : ""}`}
              onClick={toggleLanguage}
              aria-label="Switch to Arabic"
              style={{
                color:
                  language === "ar"
                    ? "#5552e1"
                    : isLightBackground
                    ? "#333"
                    : "#ddd",
              }}
            >
              العربية
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
