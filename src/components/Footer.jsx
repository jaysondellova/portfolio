import React, { useContext } from 'react';
import '../css/footer.css';
import { ThemeContext } from '../context/ThemeContext';
const Footer = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={`mild-footer ${darkTheme}`}>
      <div className="inner-mild-footer">
        <ul>
          <h3>Jayson Dellova.</h3>
          <div className="footer-icon-container">
            <div className="footer-icon">
              <a href="#">
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
              </a>
            </div>
            <div className="footer-icon">
              <a
                href="https://www.linkedin.com/in/jayson-dellova-a16a77234/"
                target="_blank"
              >
                <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" />
              </a>
            </div>
            <div className="footer-icon">
              <a href="https://twitter.com/jay_songoku" target="_blank">
                <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" />
              </a>
            </div>
            <div className="footer-icon">
              <a href="https://github.com/JaysonGoku" target="_blank">
                <img src="https://img.icons8.com/color/48/000000/github--v1.png" />
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
