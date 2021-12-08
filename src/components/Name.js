// import React from 'react'

const capitalizeWord = (word) => {
  if (!word) {
    return "";
  }

  word = word.toLowerCase()
  return word[0].toUpperCase() + word.substring(1);
}

const Name = ({ firstName, lastName = '' }) => {
  const _firstName = capitalizeWord(firstName);
  const _lastName = capitalizeWord(lastName);

  return (
    <>
      <h3>{_firstName} {_lastName}</h3>
    </>
  )
}

export default Name;
