import React, { useRef } from "react";
import "../Styles/ContactUs.scss";
import emailjs from "emailjs-com";
import { validateForm } from "../utils/formUtils"; // Optional: form validation utility
import shape1 from "../assets/shapesContactPage1.png";
import shape2 from "../assets/shapesContactPage2.png";
import shape3 from "../assets/shapesContactPage3.png";

const ContactUs = () => {
  const formRef = useRef(null); // Reference for the form

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;

    // Optionally validate the form
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
           alert("Message sent successfully!");
           form.reset();
         })
         .catch((error) => {
           console.error("FAILED...", error);
           alert("Message failed to send. Please try again.");
         });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* <!-- Illustration Images --> */}
        <div className="illustration">
          <div className="shapes">
            <img src={shape1} alt="Shape 1"></img>
            <img src={shape2} alt="Shape 2"></img>
            <img src={shape3} alt="Shape 3"></img>
          </div>
        </div>

        <div className="content">
          <h2 data-en="Contact Us" data-ar="اتصل بنا">
            Contact Us
          </h2>
          <p
            data-en="Reach out to get more information about BytechS at: BytechS.contact@bytechs.net"
            data-ar=" للحصول على مزيد من المعلومات حول BytechS اتصل على: BytechS.contact@bytechs.net"
          >
            Reach out to get more information about BytechS at
            BytechS.contact@bytechs.net
          </p>
          <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                data-en="Your Name"
                data-ar="اسمك"
              ></input>
              <input
                type="email"
                name="email1"
                placeholder="Your Email"
                required
                data-en="Your Email"
                data-ar="بريدك الالكتروني"
              ></input>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                data-en="Phone Number"
                data-ar="رقم الهاتف"
              ></input>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                data-en="Subject"
                data-ar="الموضوع"
              ></input>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message..."
                required
                data-en="Message..."
                data-ar="رسالة..."
              ></textarea>
            </div>
            <button
              type="submit"
              data-en="SUBMIT MESSAGE"
              data-ar="أرسل الرسالة"
            >
              SUBMIT MESSAGE
            </button>
          </form>

          <p
            className="join-us"
            data-en="Join Our Team "
            data-ar="إنضم لفريقنا "
          >
            Join Our Team
            <a
              href="https://ykpx11ahkzn.typeform.com/to/kJvy5Efs"
              data-en="Now"
              data-ar="الآن"
            >
              &nbsp;Now
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
