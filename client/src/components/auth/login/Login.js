import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLoginUser } from "../../../fetchData";

function Login() {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let { uname, pass } = document.forms[0];
    let username = uname.value;
    let password = pass.value;

    postLoginUser("http://localhost:8000/api/v1/auth/login", {
      username,
      password,
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.token);
        localStorage.setItem("username", response.user.name);
        navigate(`/user/${response.user.name}/collection`);
        navigate(0);
      });

    uname.value = "";
    pass.value = "";
  };

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <h2 className="card-heading">
            <small>Login</small>
          </h2>
        </div>
        <form className="card-form" onSubmit={handleSubmit}>
          <div className="input">
            <input type="text" className="input-field" name="uname" required />
            <label className="input-label">Email</label>
          </div>
          <div className="input">
            <input
              type="password"
              className="input-field"
              name="pass"
              required
            />
            <label className="input-label">Password</label>
          </div>
          <div className="action">
            <button type="submit" className="action-button">
              Sign in
            </button>
          </div>
        </form>
        <div className="card-info">
          <p>
            By signing up you are agreeing to our{" "}
            <a href="#">Terms and Conditions</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
