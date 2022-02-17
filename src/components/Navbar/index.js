import React, { useEffect, useState } from "react";

import "./styles/navbar.css";

import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="navbar">
      <ul>
        <li>
          <h4 className="navbar_username">Hello, {user?.displayName}</h4>
        </li>
        <li>
          <button className="logout_btn" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
