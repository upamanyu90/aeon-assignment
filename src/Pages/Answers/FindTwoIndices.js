import React, { useState, useEffect } from "react";
import './FindTwoIndices.css'; // Import the CSS file

const FindTwoIndices = () => {
  const [numArr, setNumArr] = useState([]);
  const [seriesOfNums, setSeriesOfNums] = useState('');
  const [target, setTarget] = useState('');
  const [resultArr, setResultArr] = useState([]);
  const [commaError, setCommaError] = useState(false)
  const [targetError, setTargetError] = useState(false)

  useEffect(() => {
    setCommaError(false)
    if(seriesOfNums.includes(',')) {
    setNumArr(seriesOfNums.split(',').filter(elm => elm !== ''));
    } else {
      setNumArr([])
    }
  }, [seriesOfNums]);

  const handleTarget = (value) => {
    setTargetError(false)
    setTarget(value)
  }


  const validateInput = (numbers) => {
    let isError = false
    if(numbers.length === 0) {
      setCommaError(true)
      isError = true
    }
    if(!target) {
      setTargetError(true)
      isError = true
    }

    return isError
  }


  //this is the main function

  const twoSum = (numbers, target) => {

    if(validateInput(numbers)) {
      return
    }
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = Number(numbers[left]) + Number(numbers[right]);
        if (sum === Number(target)) {
          setResultArr([left + 1, right + 1]); // +1 for 1-indexed result
          return;
        } else if (sum < Number(target)) {
            left++;
        } else {
            right--;
        }
    }
    setResultArr([]);
  }

  return (
    <div className="find-two-indices-container">
      <input type="text" placeholder="Please enter numbers with comma separation" value={seriesOfNums} onChange={(e) => setSeriesOfNums(e.target.value)} />
      {commaError && <small>Please enter comma separated numbers</small>}
      <input type="number" placeholder="Please enter target value" value={target} onChange={(e) => handleTarget(e.target.value)} />
      {targetError && <small>Please enter target value</small>}
      <button onClick={() => twoSum(numArr, target)}>Call Function twoSum</button>
      Result Array of Indices: {`[${resultArr[0] || ''}, ${resultArr[1] || ''}]`}
    </div>
  );
}

export default FindTwoIndices;
