import React from "react";
// import "../Styles/SideNav.scss";

const SideNav = ({ activeSection }) => (
  <div className="side-nav">
    <a href="#home">
      <div
        className={`circle ${activeSection === "home" ? "active" : ""}`}
      ></div>
    </a>
    <a href="#contact">
      <div
        className={`circle ${activeSection === "contact" ? "active" : ""}`}
      ></div>
    </a>
    <a href="#news">
      <div
        className={`circle ${activeSection === "news" ? "active" : ""}`}
      ></div>
    </a>
    <a href="#follow">
      <div
        className={`circle ${activeSection === "follow" ? "active" : ""}`}
      ></div>
    </a>
  </div>
);

export default SideNav;
