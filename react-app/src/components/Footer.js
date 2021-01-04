import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <h3>Find Us</h3>
        <div className="github-links">
          <a href="https://github.com/Brandon-Perry" target="blank">
            <img className="github-profs" src={require("../Assets/bperry.png")} alt=""></img>
          </a>
          <a href="https://github.com/j-grooms" target="blank">
            <img className="github-profs" src={require("../Assets/jgrooms.jpg")} alt=""></img>
          </a>
          <a href="https://github.com/RobinScavo" target="blank">
            <img className="github-profs" src={require("../Assets/rscavo.jpg")} alt=""></img>
          </a>
          <a href="https://github.com/philling83" target="blank">
            <img className="github-profs" src={require("../Assets/pling.jpg")} alt=""></img>
          </a>
        </div>
        {/* <div className="footer-content">
          <p>OpenBook is a learning environment where teachers and students
             can interact from the comforts of their home. Teachers are able to create
             interactive flash cards and assign students to a virtual classroom.
             Students can work through the flash cards and see immediate feedback.
          </p>
        </div> */}
      </div>
    </>
  );
}

export default Footer;
