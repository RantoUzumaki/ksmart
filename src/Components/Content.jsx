import { useState } from "react";
import Accordion from "../HOC/Accordion";
import Dropdown from "../HOC/Dropdown";
import Input from "../HOC/Input";
import {
  district,
  localBodyName,
  localBodyType,
  occupancyNature,
  villageMaster,
  wardId,
  zonalOffice,
} from "../data";

const Content = () => {
  const [accordionActive, setAccordionActive] = useState(0);

  return (
    <div className="content-wrapper">
      <div className="form-head">
        <p>Form - 2</p>
      </div>

      <Accordion
        head="Local Body Details"
        active={accordionActive === 1 ? true : false}
        handleClick={() => setAccordionActive(1)}
      >
        <div className="accordian-content">
          <Dropdown label="District" options={district} />
          <Dropdown label="Local Body Type" options={localBodyType} />
          <Dropdown label="Local Body Name" options={localBodyName} />
          <Dropdown label="Zonal Office" options={zonalOffice} />
          <Dropdown label="Ward No / Name" options={wardId} />
        </div>
      </Accordion>

      <Accordion
        head="Permit & Occupy Details"
        active={accordionActive === 2 ? true : false}
        handleClick={() => setAccordionActive(2)}
      >
        <div className="accordian-content">
          <Input label="Permit Number" type="text" placeholder="xxxxxxxxxxx" />
          <Input label="Permit Date" type="date" placeholder="17-03-2021" />
          <Input
            label="Link with Previous Permit"
            type="text"
            placeholder="Link with Previous Permit"
          />
          <Input
            label="Occupancy Number"
            type="text"
            placeholder="xxxxxxxxxxx"
          />
          <Input label="Occupancy Date" type="date" placeholder="17-03-2021" />
          <div className="checkbox">
            <input type="checkbox" /> Weather it is partially completed
          </div>
          <Dropdown label="Occupancy Nature" options={occupancyNature} />
        </div>
      </Accordion>

      <Accordion
        head="Survey Details | Village Details"
        active={accordionActive === 3 ? true : false}
        handleClick={() => setAccordionActive(3)}
      >
        <div className="accordian-content">
          <Dropdown label="Village Name" options={villageMaster} />
          <Input label="Survey Number" type="text" placeholder="xxxxxxxxxxx" />
          <Input
            label="Re-Survey Number"
            type="text"
            placeholder="xxxxxxxxxxx"
          />
        </div>
      </Accordion>

      <div className="action">
        <button className="inverted">Next</button>
        <button className="primary">Save</button>
      </div>
    </div>
  );
};

export default Content;
