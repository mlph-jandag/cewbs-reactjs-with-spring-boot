import React from "react"
import { Route, Redirect } from "react-router-dom"
import Error403 from "../components/Errors/Error403";
import { useAuth } from "../contexts/AuthContext"

const loginRoute = '/login';

const AuthenticatedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const { currentUser, roles } = useAuth();

  if (allowedRoles.length > 0) {
    let found = false;
    for (let index = 0; index < roles.length; index++) {
      const currentRole = roles[index];
      if (allowedRoles.includes(currentRole)) {
        found = true;
      }
    }
    if (found == false) return <Error403 />
  }
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to={loginRoute} />
      }}
    ></Route>
  )
};

AuthenticatedRoute.defaultProps = {
  allowedRoles: []
};

export default AuthenticatedRoute;