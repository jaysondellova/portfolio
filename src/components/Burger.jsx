import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/burger.css';
import { ThemeContext } from '../context/ThemeContext';
const Burger = () => {
  const { setDarkTheme, darkTheme } = useContext(ThemeContext);
  return (
    <div className={`burger ${darkTheme}`}>
      <div className={`burger-links ${darkTheme}`}>
        <img
          className="burger-menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAi0lEQVRoge3WvQlCQRBF4TPbhdnDcqxDEKxC7EEQLMRq5JnZxVsjYQ3EH4TZB+fLdmaDO9kFSZJ+F+3jtluu6sQBGJLyfOoaxHaxv5wfg9Ju68SR/o8AGCr11A7Kq59z83RIEBtgTMryjZES6+wQkiRJb1jjk1nje2ONlyRJc2CNT2aN7401XpL0V3e0TjAKNSLIfAAAAABJRU5ErkJggg=="
        />
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <a href="#">Resume</a>
        <a
          onClick={() => setDarkTheme(darkTheme === 'light' ? 'dark' : 'light')}
        >
          {darkTheme === 'light' ? (
            <img src="https://img.icons8.com/external-tulpahn-flat-tulpahn/30/000000/external-sun-summer-tulpahn-flat-tulpahn.png" />
          ) : (
            <img src="https://img.icons8.com/external-nawicon-flat-nawicon/30/000000/external-moon-bedroom-nawicon-flat-nawicon.png" />
          )}
        </a>
      </div>
    </div>
  );
};

export default Burger;
