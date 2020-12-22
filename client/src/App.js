import React, { Suspense } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import "./components/LogInForm/style.css";
import "./components/Loader/style.css";
const Auth = React.lazy(() => import("./components/Auth/Auth"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense
          fallback={
            <div class="lds-default">
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
          <h1>Welcome to My App</h1>
          <Auth />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
