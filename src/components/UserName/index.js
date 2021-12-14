import React from "react";

const UserName = ({ id, firstName, lastName }) => {
  return (
    <>
      <p id={id}>
        {firstName} {lastName}
      </p>
    </>
  );
};

export default UserName;
