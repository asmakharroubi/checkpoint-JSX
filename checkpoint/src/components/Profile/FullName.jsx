import React from 'react'
const person = { firstName: "Kharroubi", lastName: "Asma" };
const FullName = () => {
  return (<div> <h1> My name is {person.lastName} {person.firstName} </h1> </div>
  );
}

export default FullName