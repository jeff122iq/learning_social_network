import React, { Children } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./style.css";

const Auth = ({ children }) => {
  return (
    <div className="auth">
      <h1>Register or Log-in please:</h1>
      <form action="" className="buttons">
        <Link className="button" to="/register">
          Register
        </Link>
        <Link className="button" to="/login">
          Log-In
        </Link>
      </form>
      {children}
    </div>
  );
};

export default Auth;
