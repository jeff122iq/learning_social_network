import React, { Suspense } from "react";
import "./App.css";
import "./components/LogInForm/style.css";
const LogInForm = React.lazy(() => import("./components/LogInForm/LogInForm"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Welcome to My App</h1>
        <LogInForm />
      </Suspense>
    </div>
  );
}

export default App;
