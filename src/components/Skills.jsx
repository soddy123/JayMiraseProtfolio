import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '/1.jpeg';
import img2 from '/2.png';
import img3 from '/3.png';
import img4 from '/4.jpg';
import img5 from '/5.png';
import img6 from '/6.png';
import img7 from '/7.png';
import img8 from '/8.png';
import img9 from '/9.webp';
import img10 from '/10.png';
import './SkillsStyle.css';

function Skills() {
  return (
  <div className="container">
    <div className="App">
      <div className="title">
        <h1>Skills</h1>
      </div>

      <div>
        <Marquee direction="right" speed={100} delay={5}>
          <div className="image_wrapper">
            <img src={img1} alt="img1" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="img2" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="img3" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="img4" />
          </div>
          <div className="image_wrapper">
            <img src={img5} alt="img5" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="img6" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="img7" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="img8" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="img9" />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="img10" />
          </div>
        </Marquee>
      </div>
    </div>
  </div>
  );
}

export default Skills;
