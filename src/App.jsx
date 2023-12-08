/*
This code implements the bubble sorting alghoritm.
Initially, an array with 5 empty strings is created and updated using the useState hook. 
The changeHandler function takes the index and the value that is in the array, updating the array with parsed integer values from user input. 
The bubbleSorting function compares adjacent elements and swaps them if needed. 
After sorting is complete, it updates the array using the setNumbersArray function.
All of this is triggered by clicking the "SORT" button.
*/

import { useState } from 'react';

const App = () => {
  const [numbersArray, setNumbersArray] = useState(['', '', '', '', '']);

  const changeHandler = (index, value) => {
    const newNumber = [...numbersArray];
    newNumber[index] = parseInt(value, 10);
    setNumbersArray(newNumber);
  };

  const bubbleSorting = () => {
    let numberChanged;
    let lastNumber = numbersArray.length;

    do {

      numberChanged = false;
      for (let index = 0; index < lastNumber - 1; index++) {
        const leftNumber = numbersArray[index];
        const rightNumber = numbersArray[index + 1];

        if (leftNumber > rightNumber) {
          const temp = numbersArray[index];
          numbersArray[index] = numbersArray[index + 1];
          numbersArray[index + 1] = temp;
          numberChanged = true;
        }
      }

      lastNumber--;
    } while (numberChanged);

    setNumbersArray([...numbersArray]);
  };

  return (
    <div className='bubbleNumbers'>
      <h1>Bubble Sorting App</h1>
      <h2>Please enter 5 numbers and click the Sort button.</h2>
      {numbersArray.map((number, index) => (
        <input
          key={index}
          type="number"
          value={number}

          onChange={(e) => changeHandler(index, e.target.value)}
        />
      ))}
      <button onClick={bubbleSorting}>SORT</button>


    </div>
  );
};

export default App;
