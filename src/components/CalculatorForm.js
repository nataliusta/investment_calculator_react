import React, { useState } from 'react';
import styles from './CalculatorForm.module.css';

const CalculatorForm = (props) => {

    const [enteredSavings, setEnteredSavings] = useState('');
    const [enteredContribution, setEnteredContribution] = useState('');
    const [enteredExpectedReturn, setEnteredExpectedReturn] = useState('');
    const [enteredDuration, setEnteredDuration] = useState('');

    const calculateHandler = (userInput) => {
        userInput.preventDefault(); // Should be triggered when form is submitted

        const calculatedData = {
            currentSavings: enteredSavings,
            yearlyContribution: enteredContribution,
            expectedReturn: enteredExpectedReturn,
            duration: enteredDuration
        };

        console.log(calculatedData);
        setEnteredSavings('');
        setEnteredContribution('');
        setEnteredExpectedReturn('');
        setEnteredDuration('');

        const yearlyData = []; // per-year results
    
        let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
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
      };

      const onCancelHandler = () => {
        console.log('Done');
    };

    return (
        <form onSubmit={calculateHandler} className={styles.form}>
            <div className={styles.inputGroup}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className={styles.inputGroup}>
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" />
                </p>
            </div>
                <p className={styles.actions}>
                <button onClick={onCancelHandler} type="reset" className={styles.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
      </form>
    )
}

export default CalculatorForm;