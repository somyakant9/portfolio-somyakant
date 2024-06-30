// import React from 'react';

// import github from '../images/github.jpg';
// import linkedin from '../images/linkedin.jpg';
// import gmail from '../images/gmail.png';
// // import phone from '../images/phone.jpg';
// import styles from './Contacts.module.css';
// // import flower from '../images/flower.jpg';
// const Contacts = () => {

//     return (
//         <div id='contacts' className={styles.container}>
//             <div className={styles.contactDiv}>
//                 <p>Contact</p>
//                 <hr size={2} color={"black"} width={"30%"}/>
//                 <div className={styles.contentDiv}>
//                     <a href="https://github.com/somyakant9" target="_blank" rel="noreferrer noopener">
//                         <img className={styles.logo} src={github} alt="github-link" />
//                     </a>
//                     <a href="https://www.linkedin.com/in/somyakant-mohapatra/" target="_blank" rel="noreferrer noopener">
//                         <img className={styles.logo} src={linkedin} alt="linkedIn-link" />
//                     </a>
//                     <a href="mailto:msomya143@gmail.com" target="_blank" rel="noreferrer noopener">
//                         <img className={styles.logo1} src={gmail} alt="gmail-link" />
//                     </a>
//                 </div>
//                 <hr size={1} color={"black"} width={"30%"}/>
//             </div>
//         </div>
//     )
// }

// export default Contacts;


import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from  './ContactMe.module.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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

    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          setIsSubmitting(false);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send the message, please try again later.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className={styles.container}>
        <h2>Contact Me</h2>
    <div className={styles.contactme}>
      
      <div className={styles.contactdetails}>
        <p><strong>Email:</strong> your.email@gmail.com</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></p>
        <p><strong>Mobile:</strong> +1234567890</p>
        <p><strong>Location:</strong> Your City, Your Country</p>
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
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      </div>
     
    </div>
    </div>
  );
};

export default ContactMe;
