import React from 'react'

const address = { number: "34", street: "sidi dniden,El-Kasba", city: "Beja" };
const Address = () => {
  return (
    <div>
      <h1>My address is {address.number}, {address.street} {address.city} </h1>
    </div>
  );
}

export default Address