import React, { useState } from "react";

const StatusBtn = ({
  statusNames,
  setStatusNames,
  isStatusBtnExpand,
  setisStatusBtnExpand,
  setisCompanyBtnExpand,
}) => {
  const btnExpansionHandler = () => {
    setisCompanyBtnExpand(false);
    setisStatusBtnExpand((prev) => !prev);
  };

  const checkHandler = (e, name) => {
    if (e.target.checked) {
      setStatusNames([...statusNames, name]);
    } else {
      setStatusNames(statusNames.filter((status) => status !== name));
    }
  };

  return (
    <>
      <button className="dropDown_btn" onClick={btnExpansionHandler}>
        Status <i className="fa fa-chevron-down btn_icon"></i>
      </button>
      {isStatusBtnExpand && (
        <div className="dropDown_statusExtend">
          <div className="dropDown_row">
            <input
              type="checkbox"
              onChange={(e) => checkHandler(e, "active")}
              checked={statusNames.filter((name) => name === "active").length}
            />
            <span className="dropDown_name">Active</span>
          </div>
          <div className="dropDown_row">
            <input
              type="checkbox"
              onChange={(e) => checkHandler(e, "closed")}
              checked={statusNames.filter((name) => name === "closed").length}
            />
            <span className="dropDown_name">Closed</span>
          </div>
        </div>
      )}
    </>
  );
};

export default StatusBtn;
