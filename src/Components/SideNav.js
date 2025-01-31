import React, { useEffect, useState, useMemo } from "react";
import "../Styles/SideNav.scss"; // Optional: for styling the side nav

const SideNav = () => {
  const [activeSection, setActiveSection] = useState("home"); // Track the active section
  const [isLightBackground, setIsLightBackground] = useState(false);
  const sections = useMemo(
    () => ["home", "about", "news", "contact"],
    []
  );
 // IDs of your sections

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((id) => document.getElementById(id));

      // Find the active section based on scroll position
      let currentSection = "home";
      sectionElements.forEach((section, index) => {
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = sections[index];

          const backgroundColor =
            window.getComputedStyle(section).backgroundColor;
          const [r, g, b] = backgroundColor.match(/\d+/g).map(Number);
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          setIsLightBackground(brightness > 180); // Adjust threshold if needed
        }
      });

      setActiveSection(currentSection);
    };

    // Attach the scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div className="side-nav">
      {sections.map((section) => (
        <a href={`#${section}`} key={section}>
          <div
            className={`circle ${
              activeSection === section ? "active" : "unactive"
            } ${isLightBackground ? "light" : "dark"}`}
          ></div>
        </a>
      ))}
    </div>
  );
};

export default SideNav;
