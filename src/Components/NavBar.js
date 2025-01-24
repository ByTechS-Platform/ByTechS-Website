import React, { useState, useEffect, useCallback } from "react";
import "../Styles/Navbar.scss";
import logo from "../assets/logo.png";
import coloredLogo from "../assets/BytechsColor.png";
import { switchLanguage } from "../utils/languageUtils";

const NavBar = () => {
  const [activeLanguage, setActiveLanguage] = useState("en");
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(false);

  // Handle language switching using the utility function
  const toggleLanguage = () => {
    const newLanguage = activeLanguage === "en" ? "ar" : "en";
    setActiveLanguage(newLanguage);
    switchLanguage(newLanguage);
  };

  // Update the background based on scroll position
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

  return (
    <nav
      style={{
        color: isLightBackground ? "black" : "white",
        direction: activeLanguage === "ar" ? "rtl" : "ltr",
      }}
      className={activeLanguage === "ar" ? "align-right" : "align-left"}
    >
      {/* Logo */}
      <div className="left-container">
        <img
          src={isLightBackground ? coloredLogo : logo}
          className="logo"
          alt="Bytechs Logo"
        />

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              data-en="Home"
              data-ar="الرئيسية"
              style={{ textAlign: activeLanguage === "ar" ? "right" : "left" }}
            >
              {activeLanguage === "ar" ? "الرئيسية" : "Home"}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              data-en="Contact Us"
              data-ar="اتصل بنا"
              style={{ textAlign: activeLanguage === "ar" ? "right" : "left" }}
            >
              {activeLanguage === "ar" ? "اتصل بنا" : "Contact Us"}
            </a>
          </li>
          <li>
            <a
              href="#news"
              data-en="News"
              data-ar="الأخبار"
              style={{ textAlign: activeLanguage === "ar" ? "right" : "left" }}
            >
              {activeLanguage === "ar" ? "الأخبار" : "News"}
            </a>
          </li>
          <li>
            <a
              href="#follow"
              data-en="Follow Us"
              data-ar="تابعنا"
              style={{ textAlign: activeLanguage === "ar" ? "right" : "left" }}
            >
              {activeLanguage === "ar" ? "تابعنا" : "Follow Us"}
            </a>
          </li>
        </ul>
      </div>

      {/* Language Switch */}
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
        >
          العربية
        </button>
      </div>

      {/* Burger Menu */}
      <div
        className={`burger-menu ${burgerMenuOpen ? "active" : ""}`}
        onClick={() => setBurgerMenuOpen((prevState) => !prevState)}
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
      </div>
    </nav>
  );
};

export default NavBar;
