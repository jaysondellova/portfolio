import React, { useCallback, useContext } from 'react';
import '../../css/home.css';
import { ThemeContext } from '../../context/ThemeContext';
const Home = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={darkTheme}>
      <div className="home">
        <h4 className={`hea4 ${darkTheme}`}> Hey, I'm Jayson Dellova</h4>
        <h1 className={`hea1 ${darkTheme}`}>
          <span> I like </span>creating user interface for <span>the web</span>
        </h1>
        <h2 className={`hea2 ${darkTheme}`}>
          A self-taught front end developer.
        </h2>
      </div>
    </div>
  );
};
export default Home;
