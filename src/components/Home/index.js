import React, { useEffect, useState } from "react";

import Table from "../Table";
import Navbar from "../Navbar";
import Modal from "../Modal/Modal";

import "./styles/home.css";

import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    user && navigate("/login");
  }, []);

  const openModel = () => {
    setShowModal(true);
  };
  return (
    <>
      <Navbar user={user} />
      <div className="home_mainContainer">
        <div className="home_horizontal">
          <div className="home_mainHeading">Team Members</div>
          <button className="home_button" onClick={openModel}>
            Add Members <i className="fa fa-plus"></i>
          </button>
        </div>
        {showModal && <Modal setShowModal={setShowModal} />}
        <Table />
      </div>
    </>
  );
};
export default Home;
