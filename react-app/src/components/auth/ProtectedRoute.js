import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from "react-redux"

const ProtectedRoute = props => {
  const currentUser = useSelector((state) => state.session.user)

  useEffect(() => {}, [currentUser])

  console.log("protected route")
  if (!currentUser) {
    return <Redirect to="/login" />
  }

  return (
    <Route {...props}/>
  );
};

export default ProtectedRoute;
