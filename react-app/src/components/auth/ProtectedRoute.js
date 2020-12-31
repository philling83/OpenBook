import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from "react-redux"

const ProtectedRoute = props => {
  return (
    <Route {...props}>
      {(props.authenticated)? props.children  : <Redirect to="/login" />}
    </Route>
  )
};

export default ProtectedRoute;
