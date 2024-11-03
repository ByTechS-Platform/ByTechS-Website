import React from "react";
import "../Styles/FollowUs.scss";
import xLogo from "../assets/X.png";
import whatsappLogo from "../assets/Whatsup.png";
import instagramLogo from "../assets/insta.png";
import linkedinLogo from "../assets/link.png";
import followImage from "../assets/images/follow-image.JPG";

const FollowUs = ({ followImage }) => {
  return (
    <section id="follow" className="section follow">
      <div className="content">
        <h2 data-en="Follow Us for More" data-ar="للمزيد من ">
          FOLLOW US FOR MORE
          <span className="B1" data-en=" Updates" data-ar="الأخبار">
            &nbsp;UPDATES
          </span>
        </h2>
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
      </div>

      <div className="follow-image">
        {followImage && <img src={followImage} alt="Follow Us" />}
      </div>
    </section>
  );
};

export default FollowUs;
