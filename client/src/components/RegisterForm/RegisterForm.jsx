import React from "react";
import "./style.css";

const RegisterForm = () => {
  return (
    <div className="registerForm">
      <h1>Registration</h1>
      <p>Please fill in all fields</p>
      <form>
        <input placeholder="Name" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
