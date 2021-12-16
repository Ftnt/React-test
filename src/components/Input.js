import React from "react";

const Input = ({ id, type, label, value, setValue }) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        id={id}
        type={type}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
    </div>
  );
};

export default Input;
