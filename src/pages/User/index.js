import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Loading from "../../components/Card";

import "../../index.css";

import { getUser } from "../../services/users";

const Users = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUsers = async (e) => {
      const responde = await getUser();
      setUser(responde);
    };
    getUsers();
  }, []);

  const keys = Object.keys(user);
  const datos = keys.map((elemento) => {
    return user[elemento];
  });

  return (
    <div className="bg-gray-900">
      <div className=" max-w-screen-xl m-auto">
        <div className="flex flex-wrap gap-4 pt-10 items-center justify-center wrapper">
          {user ? (
            datos.map(
              ({ birthdate, firstName, gender, lastName, occupation }, b) => (
                <Card
                  key={b}
                  birthdate={birthdate}
                  firstName={firstName}
                  gender={gender}
                  lastName={lastName}
                  occupation={occupation}
                />
              )
            )
          ) : (
            <div className="bg-gray-900 w-screen h-screen">
              <Loading title="Procesando Informacion...!!" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
