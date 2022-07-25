import React, { useContext } from 'react';
import '../../css/projects.css';
import cointracker from '../../img/cointracker.png';
import thesis from '../../img/thesis.png';
import todolist from '../../img/todolist.png';
import cats from '../../img/cats.png';
import { ThemeContext } from '../../context/ThemeContext';
import port from '../../img/port.png';
const Projects = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={darkTheme}>
      <div className={`project-container ${darkTheme}`}>
        <div className="project">
          <h1>Projects</h1>
          <div className="project-list">
            <div className="project-box">
              <div className="project-img">
                <a
                  href="https://jaysondellova.github.io/catsapi/"
                  target="_blank"
                >
                  <img src={cats} alt="img" />
                </a>
              </div>
            </div>
            <div className="project-box">
              <div className="project-img">
                <a
                  href="https://jaysondellova.github.io/CoinTracker/"
                  target="_blank"
                >
                  <img src={cointracker} alt="img" />
                </a>
              </div>
            </div>
            <div className="project-box">
              <div className="project-img">
                <a href="https://jaysontodolist.herokuapp.com/" target="_blank">
                  <img src={todolist} alt="img" />
                </a>
              </div>
            </div>

            <div className="project-box">
              <div className="project-img ">
                <a href="#" target="_blank">
                  <img src={port} alt="img" />
                </a>
              </div>
            </div>
            <div className="project-box">
              <div className="project-img">
                <a
                  href="https://jaysondellova.github.io/ThesisTitleGenerator/"
                  target="_blank"
                >
                  <img src={thesis} alt="img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
