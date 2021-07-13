import React from "react";
import Logo from "../../components/UI/Logo/Logo";
import classes from "./Login.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

function Login() {
  return (
    <div className={[classes.Container, ...["d-flex"]].join(" ")}>
      <div className={classes.LoginContainer}>
        <div className="panel panel-default">
          <Logo />
          <span className={classes.title}>EMPLOYEE WELL-BEING SYSTEM</span>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
