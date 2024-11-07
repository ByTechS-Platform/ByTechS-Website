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

  const handleScroll = useCallback(() => {
    // Check section background color or scroll position
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      // Assuming section is visible when in viewport
      if (
        sectionTop <= window.innerHeight / 2 &&
        sectionBottom >= window.innerHeight / 2
      ) {
        const backgroundColor =
          window.getComputedStyle(section).backgroundColor;
        const [r, g, b] = backgroundColor.match(/\d+/g).map(Number);

        // Set threshold for "light" background (adjust as necessary)
        const isLight = (r + g + b) / 3 > 200;
        setIsLightBackground(isLight);
      }
    });
  },[]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Toggle burger menu visibility
  const toggleBurgerMenu = () => {
    setBurgerMenuOpen((prevState) => !prevState);
  };

  return (
    <nav style={{ color: isLightBackground ? "black" : "white" }}>
      {/* <!-- Logo --> */}
      <img
        src={isLightBackground ? coloredLogo : logo}
        className="logo"
        alt="Bytechs Logo"
      ></img>

      {/* <!-- Navigation Links for Desktop --> */}
      <ul className="nav-links">
        <li>
          <a
            href="#home"
            data-en="Home"
            data-ar="الرئيسية"
            style={{ color: isLightBackground ? "black" : "white" }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#contact"
            data-en="Contact Us"
            data-ar="اتصل بنا"
            style={{ color: isLightBackground ? "black" : "white" }}
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="#news"
            data-en="News"
            data-ar="الأخبار"
            style={{ color: isLightBackground ? "black" : "white" }}
          >
            News
          </a>
        </li>
        <li>
          <a
            href="#follow"
            data-en="Follow Us"
            data-ar="تابعنا"
            style={{ color: isLightBackground ? "black" : "white" }}
          >
            Follow Us
          </a>
        </li>
      </ul>

      {/* <!-- Language Switch --> */}
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

        <noscript>Please enable JavaScript to switch languages</noscript>
      </div>

      {/* Burger Menu */}
      <div
        className={`burger-menu ${burgerMenuOpen ? "active" : ""}`}
        onClick={toggleBurgerMenu}
      >
        {/* Burger Icon */}
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
              onClick={() => toggleLanguage(activeLanguage)}
            >
              English
            </button>
            <button
              className={`AR ${activeLanguage === "ar" ? "active" : ""}`}
              onClick={() => toggleLanguage(activeLanguage)}
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
