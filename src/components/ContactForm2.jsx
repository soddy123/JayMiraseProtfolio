import React, { useRef } from 'react';
import './ContactFormStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import cartoon from '../images/cartoon-compressed.png';
import { EfBtn } from './BtnEff/Effect';

export default function ContactForm({ id }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('shitalthakare', 'template_lyzbf0p', form.current, '-8AsG2hlNcWfgWJFj')
      .then((result) => {
          console.log(result.text);
          toast.success('Message sent successfully.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      }, (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Kindly refresh the page.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      });
  };

  return (
    <div className='contact-window' id={id}>
      <h1>Let's Get in Touch</h1>
      <p>Want to discuss a financial solution or need some guidance? I'm here to help!</p>
      <div className="contact-container">
        <img src={cartoon} alt='Shital Thakare' className="contact-wrapper-left" />
        <form ref={form} onSubmit={sendEmail} className="contact-wrapper-right">
          <input id='name' type="text" name="name" placeholder='Full Name' required />
          <input id='email' type="email" name="email" placeholder='Email ID' required />
          <textarea id='message' name="message" rows='5' column='15' placeholder='Share your thoughts or inquiries here.' required />
          <button className='btn' id='submitBtn' type="submit" value="Send"><EfBtn>Send Message</EfBtn></button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
