import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"
import Skills from './components/Skills'


function App() {
  return (
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#F94892'
      }}
    />
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="Expense Tracker"
        projectDesc="Developed an AI-powered expense tracker in Next.js with features like sign-in/sign-out, responsive design, and an AI receipt scanner for automated data extraction. 
                   The application includes functionalities such as budget alerts using Resend email, search, edit, delete, and add budget entries"
        projectLink="https://expance-tracker-eight.vercel.app/"
        deployedProjectLink="https://github.com/soddy123/ExpanceTrac"
        projectImg={require('./images/expance.png')}
      />

      <ProjectCard
        projectTitle="Earth Web page"
        projectDesc="Responsive design using Tailwind CSS for 
                    seamless experience across devices.  
                    Animations integrated for smooth user 
                    interactions.  
                    Routing implemented with React Router for easy 
                    navigation between pages 
                    User authentication with Login and Signup forms."
        projectLink="https://galaxywebsite4321.netlify.app/"
        deployedProjectLink="https://github.com/soddy123/galaxywebsiteNew"
        projectImg={require('./images/earth.png')}
      />
      <ProjectCard
        className = "odd"
        projectTitle="Real Estate Website"
        projectDesc="A modern Real Estate Website featuring an animated UI built with GSAP for smooth, engaging transitions. It allows users to easily browse, search, and filter property listings through an interactive and visually appealing experience."
        projectLink="https://realestatejay.netlify.app/"
        deployedProjectLink="https://github.com/soddy123/Real_estateUI"
        projectImg={require('./images/Real_estate.png')}
      />
      <ProjectCard
        projectTitle="Blog Platform"
        projectDesc="Developed a blog platform allowing users to log in, write, add, and remove blog posts.
                    Authenticated users can edit or delete their own posts, while others can only view all published content."
        projectLink="https://thought-express-web.netlify.app/"
        deployedProjectLink="https://github.com/soddy123/BlogWeb"
        projectImg={require('./images/blog.png')}
      />
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <Skills/>
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;