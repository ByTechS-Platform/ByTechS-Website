import React, { useRef } from "react";
import { useLanguage } from "../utils/LanguageContext"; // Import context
import "../Styles/ContactUs.scss";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { validateForm } from "../utils/formUtils"; // Optional: form validation utility
import shape1 from "../assets/shapesContactPage1.png";
import shape2 from "../assets/shapesContactPage2.png";
import shape3 from "../assets/shapesContactPage3.png";

const ContactUs = () => {
  const formRef = useRef(null);
  const { language } = useLanguage(); // Get the active language from context

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;

    if (validateForm(form)) {
      emailjs
        .sendForm(
          "service_8ejml3s",
          "template_ax08khh",
          form,
          "E605m3_HIompvEY5J"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert(
            language === "ar"
              ? "تم إرسال الرسالة بنجاح!"
              : "Message sent successfully!"
          );
          form.reset();
        })
        .catch((error) => {
          console.error("FAILED...", error);
          alert(
            language === "ar"
              ? "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى."
              : "Message failed to send. Please try again."
          );
        });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* Illustration Images */}
        <div className="illustration">
          <div className="shapes">
            <img src={shape1} alt="Shape 1" />
            <img src={shape2} alt="Shape 2" />
            <img src={shape3} alt="Shape 3" />
          </div>
        </div>

        <div
          className={`content ${
            language === "ar" ? "align-right" : "align-left"
          }`}
        >
          <h2>{language === "ar" ? "تواصل معنا" : "Contact Us"}</h2>
          <p>
            {language === "ar"
              ? "للمزيد من المعلومات والاستفسارات تواصل معنا عبر البريد الإلكتروني: info@bytechs.net"
              : "For more information and inquiries reach out at: info@bytechs.net"}
          </p>
          <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={language === "ar" ? "الاسم" : "Your Name"}
                required
              />
              <input
                type="email"
                name="email1"
                placeholder={
                  language === "ar" ? "البريد الإلكتروني" : "Your Email"
                }
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                placeholder={language === "ar" ? "رقم الهاتف" : "Phone Number"}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder={language === "ar" ? "الموضوع" : "Subject"}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={
                  language === "ar" ? "رسالتك..." : "Your Message..."
                }
                required
              ></textarea>
            </div>
            <button type="submit">
              {language === "ar" ? "إرسال" : "Submit"}
            </button>
          </form>
{/* 
          <Link to="/join-us" className="join-us">
            {language === "ar" ? "انضم لفريق بايتكس" : "Join ByTechS Team"}
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
