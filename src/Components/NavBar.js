import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import routing hooks
import "../Styles/Navbar.scss";
import logo from "../assets/logo.png";
import coloredLogo from "../assets/BytechsColor.png";
import { switchLanguage } from "../utils/languageUtils";

const NavBar = () => {
  const [activeLanguage, setActiveLanguage] = useState("en");
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Function to navigate to the home page and scroll to the correct section
  const handleNavigation = (section) => {
    if (location.pathname !== "/") {
      navigate(`/#${section}`);
    } else {
      window.location.hash = section; // If already on home, just update hash
    }
  };

  const renderNavLinks = () => {
    const links = [
      { href: "home", en: "Home", ar: "الرئيسية" },
      { href: "about", en: "About Us", ar: "من نحن؟" },
      { href: "contact", en: "Contact Us", ar: "تواصل معنا" },
      { href: "news", en: "News", ar: "الأخبار" },
    ];

    return links.map((link) => (
      <li key={link.href}>
        <button
          onClick={() => handleNavigation(link.href)}
          data-en={link.en}
          data-ar={link.ar}
          style={{ color: isLightBackground ? "black" : "white" }}
        >
          {activeLanguage === "en" ? link.en : link.ar}
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
      <div className="logo-elements">
        <img
          src={isLightBackground ? coloredLogo : logo}
          className="logo"
          alt="Bytechs Logo"
        />

        <ul className="nav-links">{renderNavLinks()}</ul>
      </div>
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
