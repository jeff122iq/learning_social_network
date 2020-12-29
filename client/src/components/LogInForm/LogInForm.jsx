import React, { useState } from "react";
import "./style.css";
import Auth from "../Auth/Auth";

const LogInForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });

  function loginHandler() {}

  return (
    <Auth>
      <div className="logInForm">
        <h1>Log-In</h1>
        <p>Please fill in all fields</p>
        <form action="/login">
          <input placeholder="Email" type="email" />
          <input placeholder="Password" type="password" />
          <button>Log-In</button>
        </form>
      </div>
    </Auth>
  );
};

export default LogInForm;
