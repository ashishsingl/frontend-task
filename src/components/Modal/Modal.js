import React, { useState } from "react";

import "./styles/modal.css";

import { useSelector, useDispatch } from "react-redux";
import { addRecord } from "../../redux/record/recordActions";

const Modal = ({ setShowModal }) => {
  const [memberData, setMemberData] = useState({
    name: "",
    company: "",
    notes: "",
    status: "active",
  });

  const records = useSelector((store) => store.allRecords);
  const dispatch = useDispatch();
  const today = new Date().toLocaleDateString();

  const changeHandler = (e, text) => {
    setMemberData((prev) => {
      return {
        ...prev,
        [text]: e.target.value,
      };
    });
  };

  const saveHandler = () => {
    let id = records.length + 1;
    let { name, company, status, notes } = memberData;
    let data = { id, name, company, status, lastUpdate: today, notes };
    dispatch(addRecord(data));
    closeModel();
  };

  const closeModel = () => {
    setShowModal(false);
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModel}>
          &times;
        </span>
        <div className="model_form">
          <p className="model_mainHeading">Add member</p>
          {["name", "company", "notes"].map((text) => {
            return (
              <div className="model_inputRow" key={text}>
                <label className="model_label" htmlFor={text}>
                  {text}
                </label>
                <input
                  type="text"
                  name={text}
                  className="model_input"
                  onChange={(e) => changeHandler(e, text)}
                  value={memberData[text]}
                />
              </div>
            );
          })}

          <div className="model_inputRow">
            <label className="model_label" htmlFor="name">
              Status
            </label>
            <select
              name="cars"
              id="cars"
              className="model_select"
              onChange={(e) => changeHandler(e, "status")}
              value={memberData["status"]}
            >
              <option value="active">Active</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <div className="model_btnBox">
            <button className="model_cancel" onClick={closeModel}>
              Cancel
            </button>
            <button className="model_save" onClick={saveHandler}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
