import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import LogInForm from "../LogInForm/LogInForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import Auth from "../Auth/Auth";
import HomePage from "../../pages/HomePage/HomePage";

const Routes = (isAuthenticated) => {
  return (
    <Switch>
      {isAuthenticated ? (
        <>
          <Route path="/login" component={LogInForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/home" component={HomePage} />
          <Route path="/" component={Auth} exact />
        </>
      ) : (
        <>
          <Route path="/" component={Auth} />
          <Route path="/login" component={LogInForm} />
          <Route path="/register" component={RegisterForm} />
        </>
      )}
    </Switch>
  );
};

export default Routes;
