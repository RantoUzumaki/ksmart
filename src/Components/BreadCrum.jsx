import { AiOutlineHome } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

const BreadCrum = () => {
  return (
    <div className="breadcrum-container">
      <div className="breadcrum-left">
        <AiOutlineHome />
        <span className="slash">/</span>Tax<span className="slash">/</span>
        Property Tax
        <span className="slash">/</span>New Tax Assessment Other than BR
        <span className="slash">/</span>
        <span className="active">Form-2</span>
      </div>
      <div className="breadcrum-right">
        Created on : 15-02-2023 <RxDotFilled /> Cancel / Delete
      </div>
    </div>
  );
};

export default BreadCrum;
