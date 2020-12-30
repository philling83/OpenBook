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
          <div>
            <h2>STUDENTS</h2>
          </div>
          <div>
            <p>Join a lesson</p>
          </div>
          <div>
            <form>
              <input type="text" placeholder="Enter CODE" />
            </form>
          </div>
        </div>
        <div className="teacher-widget">
          <h2>TEACHERS</h2>
          <button href='/sign-up' className="signup-button">Sign up for Free</button>
          <p>
            <a>or </a>
            <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Widgets
