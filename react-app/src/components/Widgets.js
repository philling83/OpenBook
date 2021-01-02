import React from 'react';
import "./Widgets.css";

const Widgets = () => {
  return (
    <>
      <div className="student-content">
        <h3>You'll wonder how you learned without it</h3>
      </div>
      <div className="teacher-content">
        <h3>You'll wonder how you taught without it</h3>
      </div>
      <div className="widgets">
        <div className="student-widget">
          <div className="student-widget_title">
            <h2>STUDENTS</h2>
          </div>
          <div>
            <p>Join a lesson</p>
          </div>
          <div>
            <form className="full-name">
              <input type="text" placeholder="Enter Full Name" />
            </form>
          </div>
          <div>
            <form className="code">
              <input type="text" placeholder="Enter CODE" />
            </form>
          </div>
        </div>
        <div className="teacher-widget">
          <h2>TEACHERS</h2>
          <button className="signup-button">Sign up for FREE</button>
          <p>
            or
            <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Widgets
