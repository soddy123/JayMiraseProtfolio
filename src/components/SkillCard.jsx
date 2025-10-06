import React from 'react';
import './SkillCardStyle.css';
import degreeImg from "../images/degree3.jpg"
import college from "../images/college.jpg"
import school from "../images/school1.jpg"
export default function Education({ id }) {
  return (
    <>
      <div className="education-container" id={id}>
        <div className="education-header">Education</div>
        <div className="education-box">
          <div className="education-cards">

            {/* Card 1 */}
            <div className="flip-wrapper">
              <div className="flip-card">
                <div className="flip-front front1" style={{ backgroundImage: `url(${degreeImg})`}}></div>
                <div className="flip-back">
                  <div className="flip-content">
                    <p className="degree">Bachelor of Engineering (Computer Science & Engineering), 2023</p>
                    <p className="institution">Sipna College of Engineering & Technology, Amravati</p>
                    <p className="score">CGPA: 7.65</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flip-wrapper">
              <div className="flip-card">
                <div className="flip-front front2"style={{ backgroundImage: `url(${college})`}}></div>
                <div className="flip-back">
                  <div className="flip-content">
                    <p className="degree">Higher Secondary Education (Science), 2019</p>
                    <p className="institution">Shri Shivaji Junior College, Darwha</p>
                    <p className="score">Percentage: 66.6%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flip-wrapper">
              <div className="flip-card">
                <div className="flip-front front3 " style={{ backgroundImage: `url(${school})`}}></div>
                <div className="flip-back">
                  <div className="flip-content">
                    <p className="degree">Secondary Education, 2017</p>
                    <p className="institution">Aided High School, Darwha</p>
                    <p className="score">Percentage: 85.80%</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
