import React, { useState, useEffect } from "react";

const capitalizeWord = (word) => {
  if (!word) {
    return "";
  }
  word = word.toLowerCase()
  return word[0].toUpperCase() + word.substring(1);
}

const Name = ({ firstName, lastName = '' }) => {

  const [fakeName, setfakeName] = useState("Jairo Roocano");
  const [isLoading, setIsLoading] = useState(true);
  // const [fakeName, setfakeName] = useState("Jairo Roocano");

  console.log('Hola el componente se esta montando')

  useEffect(() => {
    console.log('Hola el componente ya cargo')
    setTimeout(() => {
      setIsLoading(false)
    }, 4000);
  }, [])

  const _firstName = capitalizeWord(firstName);
  const _lastName = capitalizeWord(lastName);

  return (
    <>
      <h3>{fakeName} {_firstName} {_lastName}</h3>
      <span>{isLoading ? "El componente esta cargando" : "El componente ya cargo"}</span>
    </>
  )
}

export default Name;
