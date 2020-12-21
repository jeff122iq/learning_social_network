import React from "react";
import "./style.css";

const LogInForm = () => {
  return (
    <div className="logInForm">
      <h1>Log-In</h1>
      <p>Please fill in all fields</p>
      <form>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button>Log-In</button>
      </form>
    </div>
  );
};

export default LogInForm;
