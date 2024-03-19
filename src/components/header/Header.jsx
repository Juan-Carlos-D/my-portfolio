import React, {useState} from "react";
import "./header.css";
import CTA from "./CTA";
// import ME from "../../assets/me2.png";
import HeaderSocials from "./HeaderSocials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Design from '../Design';

const Header = () => {
  // State for theme mode (light or dark)
  const [theme, setTheme] = useState("light");

  // Function to toggle between light and dark modes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    // Update the background color of the portfolio based on the theme
    const rootElement = document.getElementById('root');
    if (theme === 'light') {
      rootElement.classList.add('dark-theme');
    } else {
      rootElement.classList.remove('dark-theme');
    }
  };


  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello World! I'm</h5>
        <h1>Juan Carlos Dominguez</h1>
        <h5 className="text-light">Computer Science Grad Student</h5>
        <CTA />
        <HeaderSocials />

        {/* Toggle button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? (
            <FontAwesomeIcon icon={faMoon} style={{ color: '#393939', fontSize: '32px' }} />
          ) : (
            <FontAwesomeIcon icon={faSun} style={{ color: '#212529', fontSize: '32px' }} />
          )}
        </button>
        <Design theme={theme} />
        {/* <div className="me">
          <img src={ME} className="my-image" alt="me" />
        </div> */}

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
