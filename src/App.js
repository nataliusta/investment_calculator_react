import React, { useState } from 'react';
import UserInput from './components/UserInput';
import CalculatorTable from './components/CalculatorTable';
import CalculatorHeader from './components/CalculatorHeader';

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculatedHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
      let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <CalculatorHeader />
      <UserInput onCalculate={calculatedHandler} />
      <CalculatorTable />
    </div>
  );
}

export default App;
