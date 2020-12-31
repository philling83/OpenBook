import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div>
          <h3>Find Us</h3>
        </div>
        <div className="github-links">
          <a href="https://github.com/Brandon-Perry" target="blank">
            <img className="github-profs" src={require("../Assets/bperry.png")}></img>
          </a>
          <a href="https://github.com/j-grooms" target="blank">
            <img className="github-profs" src={require("../Assets/jgrooms.jpg")}></img>
          </a>
          <a href="https://github.com/RobinScavo" target="blank">
            <img className="github-profs" src={require("../Assets/rscavo.jpg")}></img>
          </a>
          <a href="https://github.com/philling83" target="blank">
            <img className="github-profs" src={require("../Assets/pling.jpg")}></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
