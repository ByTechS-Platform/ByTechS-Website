import React, { useState, useEffect, useCallback } from "react";
import "../Styles/Navbar.scss";
import logo from "../assets/logo.png";
import coloredLogo from "../assets/BytechsColor.png";
import { switchLanguage } from "../utils/languageUtils";

const NavBar = () => {
  const [activeLanguage, setActiveLanguage] = useState("en");
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(false);

  // Emit global language change event
  const toggleLanguage = () => {
    const newLanguage = activeLanguage === "en" ? "ar" : "en";
    setActiveLanguage(newLanguage);
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

  const renderNavLinks = () => {
    const links = [
      { href: "#home", en: "Home", ar: "الرئيسية" },
      { href: "#contact", en: "About Us", ar: "من نحن؟" },
      { href: "#about", en: "Contact Us", ar: "تواصل معنا" },
      { href: "#news", en: "News", ar: "الأخبار" },
      { href: "#follow", en: "Follow Us", ar: "تابعنا" },
    ];

    return links.map((link) => (
      <li key={link.href}>
        <a
          href={link.href}
          data-en={link.en}
          data-ar={link.ar}
          style={{ color: isLightBackground ? "black" : "white" }}
        >
          {activeLanguage === "en" ? link.en : link.ar}
        </a>
      </li>
    ));
  };

  return (
    <nav
      style={{ color: isLightBackground ? "black" : "white" }}
      className={activeLanguage === "ar" ? "align-right" : "align-left"}
    >
      <img
        src={isLightBackground ? coloredLogo : logo}
        className="logo"
        alt="Bytechs Logo"
      />

      <ul className="nav-links">{renderNavLinks()}</ul>

      <div className="language-switch">
        <button
          className={`Eng ${activeLanguage === "en" ? "active" : ""}`}
          onClick={toggleLanguage}
          style={{
            color:
              activeLanguage === "en"
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
          className={`AR ${activeLanguage === "ar" ? "active" : ""}`}
          onClick={toggleLanguage}
          style={{
            color:
              activeLanguage === "ar"
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
        <noscript>Please enable JavaScript to switch languages</noscript>
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
        <ul className="burger-links">{renderNavLinks()}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
