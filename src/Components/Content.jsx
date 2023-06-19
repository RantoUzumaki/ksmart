import Accordion from "../HOC/Accordion";
import Dropdown from "../HOC/Dropdown";
import Input from "../HOC/Input";
import { district, localBodyName, localBodyType, zonalOffice } from "../data";

const Content = () => {
  return (
    <div className="content-wrapper">
      <div className="form-head">
        <p>Form - 2</p>
      </div>

      <Accordion head="Local Body Details">
        <div className="accordian-content">
          <Dropdown label="District" options={district} />
          <Dropdown label="Local Body Type" options={localBodyType} />
          <Dropdown label="Local Body Name" options={localBodyName} />
          <Dropdown label="Zonal Office" options={zonalOffice} />
          <Dropdown label="Ward No / Name" options={[]} />
        </div>
      </Accordion>

      <Accordion head="Permit & Occupy Details">
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
          <Dropdown label="Occupancy Nature" options={[]} />
        </div>
      </Accordion>
    </div>
  );
};

export default Content;
