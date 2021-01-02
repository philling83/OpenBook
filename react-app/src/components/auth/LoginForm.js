import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
// import { login } from "../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import "./LoginForm.css";
import Footer from "../Footer";
import StudentLoginForm from "./StudentLoginForm";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();

    console.log("SUBMIT", email, password);
    return dispatch(

      sessionActions.login({ email, password })
    )

  };

  useEffect(() => {}, [dispatch])

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (currentUser) {
    return <Redirect to="/teachers/:id" />;
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
            <form onSubmit={onLogin}>
              <div>
                {errors.map((error) => (
                  <div>{error}</div>
                ))}
              </div>
              <div className="teacher-form-label">
                <input
                  className="teacher-input"
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={updateEmail}
                />
              </div>
              <div className="teacher-form-label">
                <input
                  className="teacher-input"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={updatePassword}
                />
              </div>
              <div className="submit">
                <button className="submit-button" type="submit">Login</button>
              </div>
            </form>
          </div>
          <p className="teacher-footer">Don't have an account?
          <a href="/sign-up" className="sign-up-link"> Sign up</a>
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
      <Footer />
    </>
  );
};

export default LoginForm;
