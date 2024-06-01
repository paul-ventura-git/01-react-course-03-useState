import { useState } from 'react'

function UseState02() {
  const [myNumber, setMyNumber] = useState(0)
  const [myArray, setMyArray] = useState([])

  function pushing () {
    setMyNumber(getRandomInt(10))
    console.log("myNumber is:"+myNumber)
    setMyArray([...myArray, myNumber])    
    console.log("myArray is:"+myArray)
    console.log("********************")
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div>
      <h1>Pushing random numeric values into an array named "myArray[]"</h1>
      <button onClick={pushing}>Pushing values into array</button>
      <h3>myNumber: {myNumber}</h3>
      <h3>myArray: {myArray}</h3>
    </div>
  )
}

export default UseState02