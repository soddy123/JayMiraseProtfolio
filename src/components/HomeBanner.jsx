import React, { useState, useEffect } from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";

export default function HomeBanner({ id }) {
  const [typedText, setTypedText] = useState('');
  const nam = "I AM JAY MIRASE";
  let index = 1;

  useEffect(() => {
    const type = () => {
      let newtit = nam.slice(0, index);
      setTypedText(newtit);

      if (index >= nam.length) {
        index = 1; // Restart typing once finished
      } else {
        index++;
      }

      setTimeout(type, 300); // Call the type function after a delay
    };

    type(); // Start typing when component mounts
  }, []);

  return (
    <div className="home" id={id}>
      <div className="content">
        <div className="wrapper">
          <div className="name">{typedText}</div>
          <ul className="dynamicTitle">
            <li><span>FRONTEND</span></li>
            <li><span>DEVELOPER</span></li>
          </ul>
          <a className='btn' href="https://www.linkedin.com/in/jay-mirase-620863249/" target="_blank" rel="noopener noreferrer">Hire Me</a>
        </div>
      </div>
      <div className="mask">
        <img className='bg' src={cartoon} alt="girl-with-laptop" />
      </div>
    </div>
  );
}
