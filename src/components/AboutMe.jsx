import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/jay.jpeg";

export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id}>
        <div className="aboutMe-text">
          <h3>Hey there, 👋</h3>
          I'm <span>Jay Mirase</span>, a <span>Front-End Developer</span> with a passion for building responsive and dynamic web applications. I hold a Bachelor of Engineering in Computer Science and Engineering from Sipna College of Engineering & Technology, Amravati. I have experience in web development, database management, and creating reusable components.
          <br/><br/>
          My career journey includes working on projects like an AI Expense Tracker, Blog Website, and a Smart Wearable Safety Jacket. I specialize in using technologies such as <span>Python, Javascript, Html, Css, React.js, Next.js, Tailwind CSS,</span> and more to deliver seamless user experiences.
          <br/><br/>
          Outside of work, I enjoy <span>watching anime</span> and playing <span>cricket</span>. I'm always exploring new opportunities to enhance my technical skills and knowledge.
          <br/><br/>
          Want to know more about me? Feel free to <a className='resume' href="https://github.com/soddy123/jayresume/blob/main/jay_mirase_resume_m.pdf" target="_blank" rel="noopener noreferrer">Explore my Resume.</a>
        </div>
        <div className="profile-photo">
          <div className="heading">About Me</div>
          <img className="img" src={myProfile} alt="Profile"></img> 
        </div>
      </div>
  );
}
