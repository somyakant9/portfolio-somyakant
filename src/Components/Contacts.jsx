
import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contacts.module.css";
import { SiGmail } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { IconContext } from "react-icons";

const Contacts = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    console.log(templateParams);
    emailjs
      .send(
        "service_5z3sya9", // EmailJS service ID
        "template_0rhdz49", // EmailJS template ID
        templateParams,
        "rYDOFAK3MNiKCqKpj" // EmailJS user ID (public key)
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // alert("Message sent successfully!");
          setShowAlert(true);

          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
          setIsSubmitting(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send the message, please try again later.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div id="contacts" className={styles.container}>
      <h2>Contacts</h2>
      <hr size='3' width="50%" color="black" />
      <hr size='3' width="80%" color="black" />
      <IconContext.Provider value={{ size:"2em" }}>
      <div className={styles.contactme}>
        <div className={styles.contactdetails}>
          <a
            href="mailto:msomya143@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail />
          </a>
          <a
            href="https://github.com/somyakant9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/somyakant-mohapatra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin />
          </a>
          <a href="tel:+917377286791" target="_blank" rel="noopener noreferrer">
            <FaMobileAlt />
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Angul+India"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiLocation />
          </a>
        </div>
        <div className={styles.messagedetails}>
          <form onSubmit={handleSubmit}>
            <p>Send a Message 👋 </p>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      </IconContext.Provider>

      {showAlert && (
        <div className={styles.alert}>
          Message Sent!
        </div>
       )} 
    </div>
  );
};

export default Contacts;
