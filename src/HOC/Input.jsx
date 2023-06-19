/* eslint-disable react/prop-types */
const Input = ({ label, type, placeholder }) => {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
