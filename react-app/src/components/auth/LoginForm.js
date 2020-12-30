import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import { login } from "../../services/auth";
import { useDispatch, useSelector } from "react-redux"
import * as sessionActions from "../../store/session"

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
<<<<<<< HEAD

    console.log("SUBMIT", email, password);
    return dispatch(

      sessionActions.login({ email, password })
    )
=======
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
      return <Redirect to='/app'/>
    } else {
      setErrors(user.errors);
    }
>>>>>>> routes

  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

<<<<<<< HEAD
  if (currentUser) {
    return <Redirect to="/" />;
=======
  if (authenticated) {
    console.log(authenticated)
    return <Redirect to="/app" />;

>>>>>>> routes
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
