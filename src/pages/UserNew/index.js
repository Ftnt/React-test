import React, { useState } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import "./UserNew.css";

// Service
import { createUser } from "../../services/users";

const UsersNew = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const cleanForm = () => {
    setFirstName("");
    setLastName("");
    setGender("");
    setOccupation("");
    setBirthdate("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(firstName, lastName, gender, occupation, birthdate);
    try {
      const data = {
        firstName,
        lastName,
        gender,
        occupation,
        birthdate,
      };
      await createUser(data);
      cleanForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container flex-col">
      <h1>Crear un usuario</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <Input
            id="firstName"
            label="First Name"
            type="text"
            value={firstName}
            setValue={setFirstName}
          />
          <Input
            id="lastName"
            label="Lasr Name"
            type="text"
            value={lastName}
            setValue={setLastName}
          />
          {/* <Input
            id="gender"
            label="Gender"
            type="text"
            value={gender}
            setValue={setGender}
          /> */}
          <Select
            id="gender"
            label="Gender"
            value={gender}
            setValue={setGender}
          />
          <Input
            id="occupation"
            label="Occupation"
            type="text"
            value={occupation}
            setValue={setOccupation}
          />
          <Input
            id="birthdate"
            label="Birthdate"
            type="date"
            value={birthdate}
            setValue={setBirthdate}
          />
          <button type="submit">Crear</button>
        </div>
      </form>
    </div>
  );
};

export default UsersNew;
