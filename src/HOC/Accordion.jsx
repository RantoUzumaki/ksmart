import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Accordion = ({ head, children }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`accordion-wrapper ${active ? `active` : ""}`}>
      <div className="accordion-head" onClick={() => setActive(!active)}>
        <span>{head}</span> {active ? <FaChevronDown /> : <FaChevronUp />}
      </div>
      <div className="accordion-body">{children}</div>
    </div>
  );
};

export default Accordion;
