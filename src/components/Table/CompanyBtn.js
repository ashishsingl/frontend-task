import React, { useEffect, useState } from "react";
import "./styles/dropDownBtn.css";
import { useSelector } from "react-redux";

const CompanyBtn = ({
  companyNames,
  setCompanyNames,
  setisCompanyBtnExpand,
  isCompanyBtnExpand,
  setisStatusBtnExpand,
}) => {
  const [isAllSelectChecked, setIsAllSelectCheck] = useState(true);

  const allRecords = useSelector((store) => store.allRecords);

  // checking if all checkbox is checked on render
  useEffect(() => {
    isAllChecked() ? setIsAllSelectCheck(true) : setIsAllSelectCheck(false);
  });

  // checking if all checkboxes is checked or not
  function isAllChecked() {
    if (
      JSON.stringify(allRecords.map((record) => record.company).sort()) ==
      JSON.stringify(companyNames.sort())
    ) {
      return true;
    }
    return false;
  }

  // check all of the checkboxes
  function checkAllBoxes() {
    return allRecords.map((record) => record.company);
  }

  // handle button expansion
  const clickHandler = () => {
    setisStatusBtnExpand(false);
    setisCompanyBtnExpand((prev) => !prev);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setIsAllSelectCheck(true);
      setCompanyNames(checkAllBoxes());
    } else {
      setIsAllSelectCheck(false);
      setCompanyNames([]);
    }
  };

  const handleCheckbox = (e, company) => {
    if (e.target.checked) {
      setCompanyNames((prev) => [...prev, company]);
    } else {
      setCompanyNames((prev) => prev.filter((comp) => comp !== company));
    }
  };

  return (
    <>
      <button className="dropDown_btn" onClick={clickHandler}>
        Company({companyNames.length})
        <i className="fa fa-chevron-down btn_icon"></i>
      </button>
      {isCompanyBtnExpand && (
        <div className="dropDown_extend">
          <div className="dropDown_row">
            <input
              type="checkbox"
              onChange={handleSelectAll}
              checked={isAllSelectChecked}
            />
            <span className="dropDown_name">Select All</span>
          </div>
          {allRecords.map((record) => (
            <div className="dropDown_row" key={record.id}>
              <input
                type="checkbox"
                onChange={(e) => handleCheckbox(e, record.company)}
                checked={
                  companyNames.filter((company) => company === record.company)
                    .length
                }
              />
              <span className="dropDown_name">{record.company}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CompanyBtn;
