import React from "react";

const Select = ({ id, label, value, setValue }) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <select
        defaultValue=""
        id={id}
        onChange={(e) => {
          console.log(e.target.value);
          setValue(e.target.value);
        }}
      >
        <option value={value} disabled>
          --Select--
        </option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    </div>
  );
};

export default Select;
