import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import "./components/LogInForm/style.css";
import "./components/Loader/style.css";
const Routes = React.lazy(() => import("./components/Routes/Routes"));
const Header = React.lazy(() => import("./components/Header/Header"));

function App() {
  const [user, setUser] = React.useState({});

  return (
    <Router>
      <Suspense
        fallback={
          <div className="lds-default">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        }
      >
        <Header />
        <Routes />
      </Suspense>
    </Router>
  );
}

export default App;
