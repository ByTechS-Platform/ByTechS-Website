import React, { useState, useEffect, useCallback } from "react";
import "../Styles/Navbar.scss";
import logo from "../assets/logo.png";
import coloredLogo from "../assets/BytechsColor.png";
import { switchLanguage, updateLanguageButtonColors } from "../utils/navUtils";

const NavBar = ({ isLightMode, activeSection }) => {
  // const [isLightMode, setIsLightMode] = useState(false);
  // const [activeSection, setActiveSection] = useState("home");
  const [activeLanguage, setActiveLanguage] = useState("en");
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  // Handle language switching using the utility function
  const toggleLanguage = (lang) => {
    setActiveLanguage(lang);
    switchLanguage(lang);
  };

  // Memoize the language button color update function
  const updateButtonColors = useCallback(() => {
    updateLanguageButtonColors(isLightMode);
  }, [isLightMode]);

  // Effect to update language button colors when the mode changes
  useEffect(() => {
    updateButtonColors();
  }, [isLightMode, updateButtonColors]);

  // Toggle burger menu visibility
  const toggleBurgerMenu = () => {
    setBurgerMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={isLightMode ? "light-mode" : ""}>
      {/* <!-- Logo --> */}
      <img
        src={isLightMode ? coloredLogo : logo}
        className="logo"
        alt="Bytechs Logo"
      ></img>

      {/* <!-- Navigation Links for Desktop --> */}
      <ul className="nav-links">
        <li>
          <a href="#home" data-en="Home" data-ar="الرئيسية">
            Home
          </a>
        </li>
        <li>
          <a href="#contact" data-en="Contact Us" data-ar="اتصل بنا">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#news" data-en="News" data-ar="الأخبار">
            News
          </a>
        </li>
        <li>
          <a href="#follow" data-en="Follow Us" data-ar="تابعنا">
            Follow Us
          </a>
        </li>
      </ul>

      {/* <!-- Language Switch --> */}
      <div className="language-switch">
        <button
          className={`Eng ${activeLanguage === "en" ? "active" : ""}`}
          onClick={() => toggleLanguage("en")}
        >
          English
        </button>
        <button
          className={`AR ${activeLanguage === "ar" ? "active" : ""}`}
          onClick={() => toggleLanguage("ar")}
        >
          العربية
        </button>

        <noscript>Please enable JavaScript to switch languages</noscript>
      </div>

      {/* Burger Menu */}
      <div
        className={`burger-menu ${burgerMenuOpen ? "active" : ""}`}
        onClick={toggleBurgerMenu}
      >
        {/* Burger Icon */}
        <div className="burger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="burger-links">
          <li>
            <a href="#home" data-en="Home" data-ar="الرئيسية">
              Home
            </a>
          </li>
          <li>
            <a href="#contact" data-en="Contact Us" data-ar="اتصل بنا">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#news" data-en="News" data-ar="الأخبار">
              News
            </a>
          </li>
          <li>
            <a href="#follow" data-en="Follow Us" data-ar="تابعنا">
              Follow Us
            </a>
          </li>

          {/* Language Switch inside Burger Menu */}

          <div className="language-switch">
            <button
              className={`Eng ${activeLanguage === "en" ? "active" : ""}`}
              onClick={() => toggleLanguage("en")}
            >
              English
            </button>
            <button
              className={`AR ${activeLanguage === "ar" ? "active" : ""}`}
              onClick={() => toggleLanguage("ar")}
            >
              العربية
            </button>

            <noscript>Please enable JavaScript to switch languages</noscript>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
