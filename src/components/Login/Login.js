import React from "react";

import "./styles/login.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="form_container">
      <h1>Login Form</h1>
      {error && <div className="alert">{error}</div>}
      <div className="form_box">
        <form onSubmit={handleLogin}>
          <div className="form_row">
            <label className="form_label" htmlFor="">
              Email
            </label>
            <input
              className="form_input"
              type="email"
              placeholder="Enter Username"
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
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="form_btn" type="submit">
            Login
          </button>
        </form>
      </div>

      <Link className="form_link" to="/register">
        Don't have an account? Sign Up
      </Link>
    </div>
  );
};
export default Login;
