import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "./LoginForm.module.css";
import { login } from "../../api/authApi";

function LoginForm() {
  const [email, setEmail] = useState("superadmin@admin.com");
  const [password, setPassword] = useState("test12345");
  const [btnLogin, setBtnLogin] = useState('Sign in');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [error, setError] = useState('');

  const history = useHistory();

  useEffect(() => {
    // authListener();
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();
    setBtnLogin('Loading...');
    setBtnDisabled(true);
    await login(email, password);
    console.log("sam");
  }

  return (
    <div className={classes.LoginForm}>
      <form onSubmit={loginHandler}>
        { error && <p className="alert alert-danger">{error}</p> }
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
          />
        </div>
        <button type="submit" className="btn mt-2" disabled={btnDisabled}>
          { btnLogin }
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
