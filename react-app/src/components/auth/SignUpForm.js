import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import StudentLoginForm from "./StudentLoginForm";
import Footer from "../Footer";

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="login-banner">
        <img className="logo-image" src={require("../../Assets/logo.png")} alt=""></img>
      </div>
      <div className="login-container">
        <div className="teacher-login">
          <div className="teacher-header">
            <h1>Teachers</h1>
            <h2>Log In</h2>
          </div>
        <div className="teacher-login-form-container">
        <form onSubmit={onSignUp}>
          <div className="teacher-form-label">
            <input
              className="teacher-input"
              type="text"
              name="username"
              placeholder="Username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div className="teacher-form-label">
            <input
              className="teacher-input"
              type="text"
              name="email"
              placeholder="Email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div className="teacher-form-label">
            <input
              className="teacher-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div className="teacher-form-label">
            <input
              className="teacher-input"
              type="password"
              name="repeat_password"
              placeholder="Confirm password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div className="submit">
            <button className="submit-button" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
        <p className="teacher-footer">Already have an account?
        <a href="/login" className="sign-up-link"> Log In</a>
        </p>
      </div>
      <div className="student-login">
        <div className="student-header">
          <h1>Students</h1>
			    <h2>Join a Class</h2>
        </div>
          <StudentLoginForm />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default SignUpForm;
