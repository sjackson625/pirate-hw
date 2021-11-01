import React from "react";
import "../assets/css/AddPirateForm.css";

const AddPirate = () => {
  return (
    <form onSubmit={createPirate}>
      <input type="text" placeholder="Pirate name" />
      <input type="text" placeholder="Pirate vessel" />
      <input type="text" placeholder="Pirate weapon" />
      <button type="submit">Add Pirate</button>
    </form>
  );
};

function createPirate(event) {
  event.preventDefault();
  console.log("making a pirate");
}


export default AddPirate;
