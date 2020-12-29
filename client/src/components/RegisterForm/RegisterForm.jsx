import React, { useState } from "react";
import "./style.css";
import Auth from "../Auth/Auth";
import { Redirect, useHistory } from "react-router-dom";

const RegisterForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    name: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });

  const history = useHistory();

  function changeHandler(event) {
    let draft = { ...formData };
    draft[event.target.id].value = event.target.value;
    setFormData(draft);
  }

  async function registerHandler(event) {
    event.preventDefault();
    try {
      let response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          name: formData.name.value,
          email: formData.email.value,
          password: formData.password.value,
        }),
      });
      history.push("/home");
      response = localStorage.setItem(
        formData.name.value,
        formData.email.value
      );

      if (localStorage.setItem(null)) {
        <Redirect to="/auth" />;
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Auth>
      <div className="registerForm">
        <h1>Registration</h1>
        <p>Please fill in all fields</p>
        <form action="/register" onSubmit={registerHandler}>
          <input
            placeholder="Name"
            type="text"
            id="name"
            value={formData.name.value}
            onChange={changeHandler}
          />
          <input
            placeholder="Email"
            type="email"
            id="email"
            value={formData.email.value}
            onChange={changeHandler}
          />
          <input
            placeholder="Password"
            type="password"
            id="password"
            value={formData.password.value}
            onChange={changeHandler}
          />
          <button>Register</button>
        </form>
      </div>
    </Auth>
  );
};

export default RegisterForm;
