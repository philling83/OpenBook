import React from 'react';
import "./Widgets.css";

import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const fadeInDownAnimation = keyframes`${fadeInDown}`;

const FadeInDownDiv = styled.div`
  animation: 3s ${fadeInDownAnimation};
`;

const Widgets = () => {
  return (
    <>
    <div className="splash-container">
      <FadeInDownDiv>
        {/* <div className="student-content">
          <h3>You'll wonder how you learned without it</h3>
        </div> */}
        <div className="teacher-content">
          <h3>OpenBook</h3>
        </div>
        <div className="widgets">
          <div className="student-widget">
            <div className="student-widget_title">
              <h2 className="student-widget_title-p">STUDENTS</h2>
            </div>
            <div>
              <p>Join a lesson</p>
            </div>
            <div>
              <form className="full-name">
                <input type="text" placeholder="Enter Full Name" />
              </form>
            </div>
            <div className="code">
              <form>
                <input type="text" placeholder="Enter CODE" />
              </form>
            </div>
          </div>
          <div className="teacher-widget">
            <h2 className="teacher-title">TEACHERS</h2>
            <a href="/sign-up">
              <button className="signup-button">Sign up for FREE</button>
            </a>
            <p>
              <a>or </a>
              <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </FadeInDownDiv>
    </div>
    </>
  );
}

export default Widgets
