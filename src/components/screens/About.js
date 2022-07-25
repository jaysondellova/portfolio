import React, { useContext } from 'react';
import poring1 from '../../img/poring1.png';
import '../../css/about.css';
import { ThemeContext } from '../../context/ThemeContext';
const About = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={`about-container ${darkTheme}`}>
      <div className={`about ${darkTheme}`}>
        <div className="about-top">
          <h1>About</h1>
        </div>
        <div className="about-bottom">
          <div className="about-description">
            <h4>Hi, I'm Jayson Dellova</h4>
            <p>
              I'm a nineteen-year-old self-taught front end developer based in
              Camarines Sur, Philippines. I am a 2nd-year college student with a
              degree of BS in Computer Science. I have a passion for web
              development. It gives me an opportunity to challenge myself and
              use a mix of technologies and creativity. I like being able to see
              the result quickly and the endless learning process.
            </p>
          </div>
          <div className="about-img">
            <img src={poring1} alt="img" />
          </div>
          <div className="stacks">
            <h4>skills:</h4>
            <div className="skill-container">
              <div className="skill-box">
                <div className="skill-img">
                  <img
                    src="https://img.icons8.com/color/60/000000/css3.png"
                    alt="img"
                  />
                </div>
                <h2 className="skill-title">Css</h2>
              </div>
              <div className="skill-box">
                <div className="skill-img">
                  <img
                    src="https://img.icons8.com/color/60/000000/html-5--v1.png"
                    alt="img"
                  />
                </div>
                <h2 className="skill-title">Html</h2>
              </div>
              <div className="skill-box">
                <div className="skill-img">
                  <img
                    src="https://img.icons8.com/color/60/000000/javascript--v1.png"
                    alt="img"
                  />
                </div>
                <h2 className="skill-title">Javascript</h2>
              </div>
              <div className="skill-box">
                <div className="skill-img">
                  <img
                    src="https://img.icons8.com/office/60/000000/react.png"
                    alt="img"
                  />
                </div>
                <h2 className="skill-title">React.js</h2>
              </div>
              <div className="skill-box">
                <div className="skill-img">
                  <img
                    src="https://img.icons8.com/color/60/000000/nodejs.png"
                    alt="img"
                  />
                </div>
                <h2 className="skill-title">Node.js</h2>
              </div>
              <div className="skill-box">
                <div className="skill-img">
                  <img
                    src="https://img.icons8.com/color/60/000000/mongodb.png"
                    alt="img"
                  />
                </div>
                <h2 className="skill-title">MongoDb</h2>
              </div>
              <div className="skill-box">
                <div className="skill-img">
                  <img
                    src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/60/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-tritone-tal-revivo.png"
                    alt="img"
                  />
                </div>
                <h2 className="skill-title">Express</h2>
              </div>
              <div className="skill-box">
                <div className="skill-img">
                  <img
                    src="https://img.icons8.com/color/60/000000/bootstrap.png"
                    alt="img"
                  />
                </div>
                <h2 className="skill-title">Bootstrap</h2>
              </div>
              <div className="skill-box">
                <div className="skill-img">
                  <img
                    src="https://img.icons8.com/color/60/000000/sass.png"
                    alt="img"
                  />
                </div>
                <h2 className="skill-title">Sass</h2>
              </div>
              <div className="skill-box">
                <div className="skill-img">
                  <img
                    src="https://img.icons8.com/color/60/000000/typescript.png"
                    alt="img"
                  />
                </div>
                <h2 className="skill-title">Typescript</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
