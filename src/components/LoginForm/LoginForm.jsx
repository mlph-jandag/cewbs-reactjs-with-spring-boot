import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "./LoginForm.module.css";
import { firebaseAuth } from '../../firebase.config';

function LoginForm() {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("admin123");
  const [btnLogin, setBtnLogin] = useState('Sign in');
  const [error, setError] = useState('');

  const history = useHistory();

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    firebaseAuth.onAuthStateChanged(response => {
        if (response) {
            history.push('/');
        }
    });
  }

  const loginHandler = (e) => {
    e.preventDefault();
    setBtnLogin('Loading...');
    firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
        history.push('/');
    })
    .catch(err => {
        setBtnLogin('Sign in');
        setError('Invalid password or email address.');
        console.log('error', err);
    })
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
          />
        </div>
        <button type="submit" className="btn">
          { btnLogin }
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
