/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Dropdown = ({ label, options = [] }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");

  return (
    <div className="dropdown-wrapper">
      <label>{label}</label>
      <div className="dropdown">
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn"
        >
          {selected || `Choose ${label}`}
          {isActive ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <div
          className="dropdown-content"
          style={{ display: isActive ? "block" : "none" }}
        >
          {options.map(({ id, value }) => (
            <div
              key={id}
              onClick={() => {
                setIsSelected(value);
                setIsActive(false);
              }}
              className="item"
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
