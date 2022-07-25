import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import '../css/header.css';
import '../css/darkCss/dark.css';
import Burger from './Burger';
const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const [burger, setBurger] = useState(false);

  return (
    <div className={darkTheme}>
      <div className={`header ${darkTheme}`}>
        <div className="inner-header">
          <div className="header-title">
            <Link to="/">
              <h3>Jayson Dellova</h3>
              <h4>Front end developer</h4>
            </Link>
          </div>
          <div className="header-links">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <a href="#">Resume</a>
            <a
              onClick={() =>
                setDarkTheme(darkTheme === 'light' ? 'dark' : 'light')
              }
            >
              {darkTheme === 'light' ? (
                <img src="https://img.icons8.com/external-tulpahn-flat-tulpahn/30/000000/external-sun-summer-tulpahn-flat-tulpahn.png" />
              ) : (
                <img src="https://img.icons8.com/external-nawicon-flat-nawicon/30/000000/external-moon-bedroom-nawicon-flat-nawicon.png" />
              )}
            </a>
          </div>
          <div
            className="menu-icon"
            onClick={() => {
              setBurger(!burger);
              console.log(burger);
            }}
          >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAi0lEQVRoge3WvQlCQRBF4TPbhdnDcqxDEKxC7EEQLMRq5JnZxVsjYQ3EH4TZB+fLdmaDO9kFSZJ+F+3jtluu6sQBGJLyfOoaxHaxv5wfg9Ju68SR/o8AGCr11A7Kq59z83RIEBtgTMryjZES6+wQkiRJb1jjk1nje2ONlyRJc2CNT2aN7401XpL0V3e0TjAKNSLIfAAAAABJRU5ErkJggg==" />

            {burger ? true : <Burger />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
