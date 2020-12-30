import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import SignUpButton from './SignUpButton';
import "./NavBar.css";

const NavBar = ({ setAuthenticated }) => {

  return (
    <nav id="nav-bar" className="nav-bar">
      <NavLink to="/" exact={true} activeClassName="active" className="logo">
        <div className="image"></div>
      </NavLink>
      <div className="buttons">
        <SignUpButton setAuthenticated={setAuthenticated} />
        <NavLink to="/login" exact={true} activeClassName="active" className="log-in">
          Login
        </NavLink>
      </div>

      {/* <NavLink to="/login/student" exact={true} activeClassName="active">
        Login as student
      </NavLink> */}

      {/* <NavLink to="/users" exact={true} activeClassName="active">
        Users
      </NavLink> */}

      {/* <LogoutButton setAuthenticated={setAuthenticated} /> */}
    </nav>
  );
}

export default NavBar;
