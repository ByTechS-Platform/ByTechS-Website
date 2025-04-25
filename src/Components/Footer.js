import React from "react";
import "../Styles/Footer.scss";
import xLogo from "../assets/x-twitter-brands-solid.svg";
import whatsappLogo from "../assets/whatsapp-brands-solid.svg";
import instagramLogo from "../assets/instagram-brands-solid.svg";
import linkedinLogo from "../assets/linkedin-brands-solid.svg";
import coloredLogo from "../assets/BytechsColor.png";
import { useLanguage } from "../utils/LanguageContext"; // Import the custom hook


const Footer = () => {
  const { language } = useLanguage();

  return (
    <div>
      <footer>
        <div className="footer-content">
          <div className="left-content">
            <img src={coloredLogo} alt="coloredLogo" />
          </div>
          <div className="social-links">
            <a
              href="https://x.com/bytechs_?s=21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={xLogo} alt="Twitter" />
            </a>
            <a
              href="https://whatsapp.com/channel/0029VaX9JcJA89MlFpx45R1h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsappLogo} alt="WhatsApp" />
            </a>
            <a
              href="https://www.instagram.com/bytechs_?igsh=bGw4dHB0MHlqanhu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/bytechsbayan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
          </div>
          <div className="right-content">
            <p
              className={` ${
                language === "ar" ? "align-right" : ""
              }`}
              data-en="© 2024 ByTechS. All rights reserved."
              data-ar="جميع الحقوق محفوظة . بايتكس 2024"
            >
              جميع الحقوق محفوظة . بايتكس 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
