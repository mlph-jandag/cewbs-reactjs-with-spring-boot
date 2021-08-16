import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import Dashboard from "../pages/dashboard/Dashboard";

const loginRoute = '/login';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route exact path="/" component={Dashboard} />
    // <Route
    //   {...rest}
    //   render={props => {
    //     return currentUser ? <Component {...props} /> : <Redirect to={loginRoute} />
    //   }}
    // ></Route>
  )
}

export default AuthenticatedRoute;