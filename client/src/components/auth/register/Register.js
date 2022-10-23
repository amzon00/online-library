import "./Register.css";
import { useState } from "react";
import { postRegisteredUser } from "../../../fetchData";
import { useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let { username, em, pass } = document.forms[0];
    let name = username.value;
    let email = em.value;
    let password = pass.value;

    postRegisteredUser("http://localhost:8000/api/v1/auth/register", {
      name,
      email,
      password,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });

    username.value = "";
    em.value = "";
    pass.value = "";

    navigate("/login");
    navigate(0);
  };
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-image">
            <h2 className="card-heading">
              <small>Lets create your account</small>
            </h2>
          </div>
          <form className="card-form" onSubmit={handleSubmit}>
            <div className="input">
              <input
                type="text"
                className="input-field"
                name="username"
                required
              />
              <label className="input-label">Full name</label>
            </div>
            <div className="input">
              <input type="text" className="input-field" name="em" required />
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
                Get started
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
    </div>
  );
}

export default Register;
