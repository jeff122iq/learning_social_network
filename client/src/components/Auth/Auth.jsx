import React from "react";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import "./style.css";

const Auth = () => {
  return (
    <BrowserRouter>
      <div className="auth">
        <h1>Register or Log-in please:</h1>
        <div className="buttons">
          <button>Register</button>
          <button>Log-In</button>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Auth;
