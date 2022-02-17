import React from "react";

import "../Login/styles/login.css";

import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase-config";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [username, setUsername] = React.useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log("inside try");
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (user != null) {
        updateProfile(auth.currentUser, {
          displayName: `${username}`,
        }).then(
          function () {
            console.log("Updated");
          },
          function (error) {
            console.log("Error happened");
          }
        );
      }

      navigate("/");
    } catch (error) {
      console.log(error);
      console.log("inside catch");
      setError(error.message);
    }
  };

  return (
    <div className="form_container">
      <h1>Register Form</h1>
      <div className="form_box">
        {error}
        <form onSubmit={handleRegister}>
          <div className="form_row">
            <label className="form_label" htmlFor="">
              Username
            </label>
            <input
              className="form_input"
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form_row">
            <label className="form_label" htmlFor="">
              Email
            </label>
            <input
              className="form_input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form_row">
            <label className="form_label" htmlFor="">
              Password
            </label>
            <input
              className="form_input"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="form_btn" type="submit">
            Register
          </button>
        </form>
      </div>
      <Link className="form_link" to="/login">
        Already have an account? Login
      </Link>
    </div>
  );
};
export default Register;
