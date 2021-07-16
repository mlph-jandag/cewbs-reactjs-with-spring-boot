import React from "react";
import Logo from "../../components/UI/Logo/Logo";
import classes from "./Login.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

function Login() {
  return (
    <>
      <div className={classes.Header}>
        <Logo />
      </div>
      <div className="container">
        <div className="col-md-4 offset-4">
          <h4><i className="fa fa-user"></i> Login</h4>
          <span className={classes.title}>
            Centralized Employee Well-being System
          </span>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default Login;
