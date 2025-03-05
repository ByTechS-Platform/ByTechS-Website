import React, { useEffect, useState, useMemo } from "react";
import "../Styles/SideNav.scss"; // Optional: for styling the side nav

const SideNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLightBackground, setIsLightBackground] = useState(false);
  const sections = useMemo(
    () => ["home", "about", "communities", "news", "contact"],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      // Define the threshold at 25% of the viewport height
      const threshold = window.innerHeight * 0.5;
      const sectionElements = sections.map((id) => document.getElementById(id));

      let currentSection = "home";
      sectionElements.forEach((section, index) => {
        if (section) {
          // Get the position of the section relative to the viewport
          const rect = section.getBoundingClientRect();
          // Check if the 25% point (threshold) is inside the section
          if (rect.top <= threshold && rect.bottom > threshold) {
            currentSection = sections[index];

            // Calculate brightness of the section's background color
            const backgroundColor =
              window.getComputedStyle(section).backgroundColor;
            const [r, g, b] = backgroundColor.match(/\d+/g).map(Number);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            setIsLightBackground(brightness > 180);
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case the page is not at the very top
    handleScroll();

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
