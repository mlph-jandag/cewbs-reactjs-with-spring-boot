import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "./LoginForm.module.css";
import { firebaseAuth } from '../../firebase.config';

function LoginForm() {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("admin123");
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    firebaseAuth.onAuthStateChanged(response => {
        if (response) {
            setUser(response);
            history.push('/');
        } else {
            setUser('');
        }
        console.log('set', response);
    });
  }

  const loginHandler = (e) => {
    e.preventDefault();
    firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
        console.log('success', res);

    })
    .catch(err => {
        console.log(err);
    })
  }

  return (
    <div className={classes.LoginForm}>
      <form onSubmit={loginHandler}>
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
          Sign in
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
