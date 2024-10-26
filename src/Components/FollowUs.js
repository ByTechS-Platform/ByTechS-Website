import React from "react";
import "../Styles/FollowUs.scss";
import xLogo from "../assets/X.png";
import whatsappLogo from "../assets/Whatsup.png";
import instagramLogo from "../assets/insta.png";
import linkedinLogo from "../assets/link.png";
import followImage from "../assets/images/follow-image.JPG";

const FollowUs = () => {
  return (
    <section id="follow" className="section follow">
      <div className="content">
        <h2 data-en="Follow Us for More" data-ar="للمزيد من ">
          FOLLOW US FOR MORE{" "}
          <span className="B1" data-en="Updates" data-ar="الأخبار">
            UPDATES
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

      {/* Optional Tweets Section */}
      <div className="tweets-container">
        {/* Uncomment and add real tweets here */}
        {/* <div className="tweet">
          <p data-en="Bytechs | بايتكس" data-ar="بايتكس | Bytechs">Bytechs | بايتكس</p>
          <p data-en="Here is the tweet content..." data-ar="هنا محتوى التغريدة...">Here is the tweet content...</p>
          <p data-en="05:45 AM - Oct 13, 2024" data-ar="05:45 صباحًا - 13 أكتوبر 2024">05:45 AM - Oct 13, 2024</p>
        </div> */}
      </div>

      <div className="follow-image">
        <img src={followImage} alt="Follow Us" />
      </div>
    </section>
  );
};

export default FollowUs;
