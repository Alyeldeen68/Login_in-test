import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    console.log(userName);
    console.log(password);
    var send = {
      userName: "wnjdnw",
      password: "dwjkndeui",
    };
    try {
      axios
        .post("https://e7gezli.herokuapp.com/lala", {
          send,
        })
        .then((res) => console.log(res))
        .catch((error) => setError(error));
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1 email-input"
              placeholder="Enter email"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" onClick={handleClick}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
