import React from "react";
// import { logout } from "../../services/auth";
import { useDispatch } from "react-redux"
import * as sessionActions from "../../store/session"

const LogoutButton = ({setAuthenticated}) => {
const dispatch = useDispatch()

  const onLogout = async (e) => {
    return dispatch(
      sessionActions.logout()
    )
  };

  return <button onClick={onLogout} className="submit-button myButton logOutButton">Logout</button>;
};

export default LogoutButton;
