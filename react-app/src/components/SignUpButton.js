import React from "react";
import { signUp } from "../services/auth";
import "./NavBar.css"

const SignUpButton = ({setAuthenticated}) => {
  const onSignup = async (e) => {
    await signUp();
    setAuthenticated(true);
  };

  return <button onClick={onSignup} className="sign-up">Sign up for FREE</button>;
};

export default SignUpButton;
