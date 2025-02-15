import React, { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/Navbar.scss";
import logo from "../assets/Bytechs_شعار - أبيض 3.png";
import coloredLogo from "../assets/Bytechs_شعار - ملون 1.png";
import { switchLanguage } from "../utils/languageUtils";
import { useLanguage } from "../utils/LanguageContext";

const NavBar = () => {
  const { language, setLanguage } = useLanguage();
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Emit global language change event
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    switchLanguage(newLanguage); // Update the DOM elements
    window.dispatchEvent(
      new CustomEvent("languageChange", { detail: { lang: newLanguage } })
    );
  };

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (
        sectionTop <= window.innerHeight / 2 &&
        sectionBottom >= window.innerHeight / 2
      ) {
        const backgroundColor =
          window.getComputedStyle(section).backgroundColor;
        const [r, g, b] = backgroundColor.match(/\d+/g).map(Number);
        const isLight = (r + g + b) / 3 > 200;
        setIsLightBackground(isLight);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleBurgerMenu = () => setBurgerMenuOpen((prevState) => !prevState);

  const handleNavigation = (section) => {
    if (location.pathname !== "/") {
      navigate(`/#${section}`);
    } else {
      window.location.hash = section;
    }
  };

  const renderNavLinks = () => {
    const links = [
      { href: "home", en: "Home", ar: "الرئيسية" },
      { href: "about", en: "About us", ar: "عن بايتكس "},
      { href: "communities", en: "Communities", ar: "المجتمعات" },
      { href: "news", en: "News", ar: "الأخبـار" },
      { href: "contact", en: "Contact us", ar: "تواصل معنا" },
    ];

    return links.map((link) => (
      <li key={link.href}>
        <button
          onClick={() => handleNavigation(link.href)}
          data-en={link.en}
          data-ar={link.ar}
          style={{ color: isLightBackground ? "black" : "white" }}
        >
          {language === "en" ? link.en : link.ar}
        </button>
      </li>
    ));
  };

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
          style={{
            color:
              language === "en"
                ? isLightBackground
                  ? "#5552e1"
                  : "#5552e1"
                : isLightBackground
                ? "#333"
                : "#ddd",
          }}
          aria-label="Switch to English"
        >
          English
        </button>
        <button
          className={`AR ${language === "ar" ? "active" : ""}`}
          onClick={toggleLanguage}
          style={{
            color:
              language === "ar"
                ? isLightBackground
                  ? "#5552e1"
                  : "#5552e1"
                : isLightBackground
                ? "#333"
                : "#ddd",
          }}
          aria-label="Switch to Arabic"
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
          ></span>
          <span
            style={{ backgroundColor: isLightBackground ? "black" : "white" }}
          ></span>
          <span
            style={{ backgroundColor: isLightBackground ? "black" : "white" }}
          ></span>
        </div>
        <ul className="burger-links">
          {renderNavLinks()}
          <div className="language-switch">
            <button
              className={`Eng ${language === "en" ? "active" : ""}`}
              onClick={toggleLanguage}
              style={{
                color:
                  language === "en"
                    ? isLightBackground
                      ? "#5552e1"
                      : "#5552e1"
                    : isLightBackground
                    ? "#333"
                    : "#ddd",
              }}
              aria-label="Switch to English"
            >
              English
            </button>
            <button
              className={`AR ${language === "ar" ? "active" : ""}`}
              onClick={toggleLanguage}
              style={{
                color:
                  language === "ar"
                    ? isLightBackground
                      ? "#5552e1"
                      : "#5552e1"
                    : isLightBackground
                    ? "#333"
                    : "#ddd",
              }}
              aria-label="Switch to Arabic"
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
