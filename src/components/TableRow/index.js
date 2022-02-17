import { deleteRecord } from "../../redux/record/recordActions";
import { useDispatch } from "react-redux";

import "./styles/tableRow.css";

const TableRow = ({
  record,
  setDisplayData,
  setCompanyNames,
  selectedRecords,
  setSelectedRecords,
}) => {
  const dispatch = useDispatch();

  const handleRemove = (id, company) => {
    dispatch(deleteRecord(id));
    setCompanyNames((prev) => prev.filter((record) => record !== company));
    setDisplayData((prev) =>
      prev.filter((record) => record.company !== company)
    );
  };

  const handleCheckbox = (e, id) => {
    if (e.target.checked) {
      setSelectedRecords((prev) => [...prev, id]);
    } else {
      setSelectedRecords((prev) => prev.filter((record) => record !== id));
    }
  };

  return (
    <div className="tableRow_tbContainer">
      <div className="tableRow_checkboxContainer">
        <input
          className="tableRow_checkbox"
          type="checkbox"
          checked={selectedRecords.filter((id) => id === record.id).length}
          onChange={(e) => handleCheckbox(e, record.id)}
        />
      </div>
      <div className="tableRow_name">{record.name}</div>
      <div className="tableRow_company">{record.company}</div>
      <div className="tableRow_status">{record.status}</div>
      <div className="tableRow_lastUpdate">Last Update</div>
      <div className="tableRow_notes">{record.notes}</div>
      <div className="tableRow_remove">
        <button
          className="tableRow_remove"
          onClick={() => handleRemove(record.id, record.company)}
        >
          <i className="fa fa-trash trash_icon"></i>
        </button>
      </div>
    </div>
  );
};
export default TableRow;
