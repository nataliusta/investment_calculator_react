import React from 'react';
import UserInput from './components/UserInput';
import CalculatorTable from './components/CalculatorTable';
import CalculatorHeader from './components/CalculatorHeader';

function App() {

  /*const calculatedData = (userInput) => {

   const yearlyData = []; // per-year results
    
        /*let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
        const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
        const expectedReturn = +userInput['expected-return'] / 100;
        const duration = +userInput['duration'];
    
        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          currentSavings += yearlyInterest + yearlyContribution;

          yearlyData.push({ // feel free to change the shape of the data pushed to the array!
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
          });
        }
        // do something with yearlyData ...
  };*/

  return (
    <div>
      <CalculatorHeader />
      <UserInput />
      <CalculatorTable />
    </div>
  );
}

export default App;
