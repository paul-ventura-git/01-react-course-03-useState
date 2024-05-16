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
      return { ...previousState, color: "blue", year: "2020" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
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