import React, {useState} from "react";
import './AddTwoNumbers.css'; // Import the CSS file

const AddTwoNumbers = () => {
  const [firstNumber, setFirstNumber] = useState(null)
  const [secondNumber, setSecondNumber] = useState(null)
  const [total, setTotal] = useState(null)

  const handleSum = () => {
    setTotal(Number(firstNumber) + Number(secondNumber))
  }

  const handleReset = () => {
    setFirstNumber('')
    setSecondNumber('')
    setTotal('')
  }

  return (
    <div className="add-container">
      <input value={firstNumber} placeholder="First Number" type="number" onChange={(e) => setFirstNumber(e.target.value)} />
      <input value={secondNumber} placeholder="Second Number" type="number" onChange={(e) => setSecondNumber(e.target.value)} />
      <div className="buttons-row">
        <button onClick={() => handleSum()}>Get Sum</button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
      Total: {total}
    </div>
  )
}

export default AddTwoNumbers;
