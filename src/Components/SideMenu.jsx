import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const SideMenu = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="sidemenu-wrapper">
      <div className={`sidemenu-accordion ${active === 1 ? `active` : ""}`}>
        <div className="header" onClick={() => setActive(1)}>
          Application {active === 1 ? <FaChevronDown /> : <FaChevronRight />}
        </div>

        <div className="content">
          <div className="list active">Local Body Details</div>
          <div className="list">Permit & Occupy Details</div>
          <div className="list">Survey Details | Village Details</div>
          <div className="list">Owner Details</div>
          <div className="list">Assessment Critiria</div>
          <div className="list">Area & Other Details</div>
        </div>
      </div>

      <div className={`sidemenu-accordion ${active === 2 ? `active` : ""}`}>
        <div className="header" onClick={() => setActive(2)}>
          Required Documents{" "}
          {active === 2 ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </div>
      <div className={`sidemenu-accordion ${active === 3 ? `active` : ""}`}>
        <div className="header" onClick={() => setActive(3)}>
          Guidelines {active === 3 ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </div>
      <div className={`sidemenu-accordion ${active === 4 ? `active` : ""}`}>
        <div className="header" onClick={() => setActive(4)}>
          Quick Access {active === 4 ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </div>
      <div className={`sidemenu-accordion ${active === 5 ? `active` : ""}`}>
        <div className="header" onClick={() => setActive(5)}>
          Process {active === 5 ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
