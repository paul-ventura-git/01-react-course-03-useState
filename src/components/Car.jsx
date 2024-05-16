import { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateManyCharacteristics = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue", year: "2020", brand: "Pescarolo" }
    });
  }

  return (
    <>
      <h1>Use State with objects</h1>
      <h3>My {car.brand}</h3>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateManyCharacteristics}
      >Blue</button>
    </>
  )
}

export default Car