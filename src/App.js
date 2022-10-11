import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Prefences from "./Components/Preferences";
import Login from "./Components/Login";
import { useState } from "react";
function App() {
  const [token, setToken] = useState();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <div className="main">
      <h2>Main App</h2>
      <Login />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preferences" element={<Prefences />} />
      </Routes>
    </div>
  );
}

export default App;
