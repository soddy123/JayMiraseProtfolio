import React, { useRef, useState } from 'react';
import './ContactFormStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import cartoon from '../images/cartoon-compressed.png';
import { EfBtn } from './BtnEff/Effect';

export default function ContactForm({ id }) {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  

  const sendEmail = (e) => {
    e.preventDefault();

    // EmailJS parameters
    const Data = {
      to_name: name,
      to_email: "jaymirase@gmail.com", // Hardcoding your email address here
      message: message,
      from_email: email, // The email of the person submitting the form
      from_name:name,
    };
    
    const user_id = String(import.meta.env.VITE_EMAILJS_USER_ID);
    const Service_id = String(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    const Template_id = String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);


    // Sending the email using EmailJS
    emailjs.send(Service_id, Template_id, Data, user_id)
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
      <p>If you like what you see and want to work together, let’s talk!</p>
      <div className="contact-container">
        <img src={cartoon} alt='Jay Mirase' className="contact-wrapper-left" />
        <form ref={form} onSubmit={sendEmail} className="contact-wrapper-right">
          <input id='name' type="text" name="name" placeholder='Full Name' onChange={(e) => setName(e.target.value)} required />
          <input id='email' type="email" name="email" placeholder='Your Email ID' required onChange={(e) => setEmail(e.target.value)} />
          <textarea id='message' name="message" rows='5' column='15' placeholder='Share your thoughts or inquiries here.' required onChange={(e) => setMessage(e.target.value)} />
          <button className='btn' id='submitBtn' type="submit" value="Send">
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
