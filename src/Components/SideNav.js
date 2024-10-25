import React, { useEffect, useState } from "react";
import "../Styles/SideNav.scss"; // Optional: for styling the side nav

const SideNav = () => {
  const [activeSection, setActiveSection] = useState("home"); // Track the active section
  const sections = ["home", "contact", "news", "follow"]; // IDs of your sections

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((id) => document.getElementById(id));

      // Find the active section based on scroll position
      let currentSection = "home";
      sectionElements.forEach((section, index) => {
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = sections[index];
        }
      });

      setActiveSection(currentSection);
    };

    // Attach the scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="side-nav">
      {sections.map((section) => (
        <a href={`#${section}`} key={section}>
          <div
            className={`circle ${activeSection === section ? "active" : ""}`}
          ></div>
        </a>
      ))}
    </div>
  );
};

export default SideNav;
