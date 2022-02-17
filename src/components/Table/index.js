import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TableRow from "../TableRow";
import CompanyBtn from "./CompanyBtn";
import StatusBtn from "./StatusBtn";
import "./styles/table.css";

const Table = () => {
  const allRecords = useSelector((store) => store.allRecords);
  const [displayData, setDisplayData] = useState(allRecords);
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [isAllSelect, setIsAllSelect] = useState(false);
  const [statusNames, setStatusNames] = useState(["active", "closed"]);
  const [isStatusBtnExpand, setisStatusBtnExpand] = useState(false);
  const [isCompanyBtnExpand, setisCompanyBtnExpand] = useState(false);
  const [companyNames, setCompanyNames] = useState(
    allRecords.map((record) => record.company)
  );

  // checking if all displayed records is selected or not
  useEffect(() => {
    const displayDataId = displayData.map((record) => record.id);
    setIsAllSelect(
      displayDataId.every((record) => selectedRecords.includes(record))
    );
  }, [selectedRecords, displayData]);

  // Adding a new company to companyNames
  useEffect(() => {
    //checking if new company is already present or not
    if (
      !companyNames.filter(
        (name) => name === allRecords[allRecords.length - 1]?.company
      ).length
    ) {
      setCompanyNames([
        ...companyNames,
        allRecords[allRecords.length - 1]?.company,
      ]);
    }
  }, [allRecords]);

  // Applying different kind of filter
  useEffect(() => {
    //apply company filter
    const companyFilter = companyNames.reduce((acc, curr) => {
      acc = [...acc, ...allRecords.filter((record) => record.company === curr)];
      return acc;
    }, []);

    //apply status filter
    const statusFilter = statusNames.reduce((acc, curr) => {
      acc = [
        ...acc,
        ...companyFilter.filter((record) => record.status === curr),
      ];

      return acc;
    }, []);

    setDisplayData(statusFilter);
  }, [companyNames, allRecords, statusNames]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setIsAllSelect(true);
      setSelectedRecords(displayData.map((record) => record.id));
    } else {
      setIsAllSelect(false);
      setSelectedRecords([]);
    }
  };

  return (
    <>
      <div className="table_actionRow">
        <CompanyBtn
          companyNames={companyNames}
          setCompanyNames={setCompanyNames}
          isCompanyBtnExpand={isCompanyBtnExpand}
          setisCompanyBtnExpand={setisCompanyBtnExpand}
          setisStatusBtnExpand={setisStatusBtnExpand}
        />
        <StatusBtn
          statusNames={statusNames}
          setStatusNames={setStatusNames}
          isStatusBtnExpand={isStatusBtnExpand}
          setisStatusBtnExpand={setisStatusBtnExpand}
          setisCompanyBtnExpand={setisCompanyBtnExpand}
        />
      </div>
      <div className="table_outer">
        <div className="table_tbContainer">
          <div className="table_checkboxContainer">
            <input
              className="table_checkbox"
              type="checkbox"
              checked={isAllSelect}
              onChange={handleSelectAll}
            />
          </div>
          <div className="table_name">Name</div>
          <div className="table_company">Company</div>
          <div className="table_status">Status</div>
          <div className="table_lastUpdate">Last Update</div>
          <div className="table_notes">Notes</div>
          <div className="table_remove"></div>
        </div>
        {displayData.map((record) => (
          <TableRow
            key={record.id}
            record={record}
            selectedRecords={selectedRecords}
            setSelectedRecords={setSelectedRecords}
            setDisplayData={setDisplayData}
            setCompanyNames={setCompanyNames}
          />
        ))}
      </div>
    </>
  );
};
export default Table;

// 5 15 15 15 15 30 5
