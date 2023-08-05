import React, { useState } from 'react';
import styles from './CalculatorForm.module.css';

const CalculatorForm = (props) => {

    /*const [enteredSavings, setEnteredSavings] = useState('');
    const [enteredContribution, setEnteredContribution] = useState('');
    const [enteredExpectedReturn, setEnteredExpectedReturn] = useState('');
    const [enteredDuration, setEnteredDuration] = useState('');*/

    const submitHandler = (event) => {
        event.preventDefault(); // Should be triggered when form is submitted

        /*const calculatedData = {
            currentSavings: enteredSavings,
            yearlyContribution: enteredContribution,
            expectedReturn: enteredExpectedReturn,
            duration: enteredDuration
        };*/

        
    };

    const resetHandler = () => {
    };

    const inputChangeHandler = (input, value) => {
        console.log(input, value);
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.inputGroup}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input 
                        type="number" 
                        id="current-savings"
                        onChange={(event) => inputChangeHandler('current-savings', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input 
                        type="number" 
                        id="yearly-contribution"
                        onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} />
                </p>
            </div>
            <div className={styles.inputGroup}>
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input 
                        type="number" 
                        id="expected-return"
                        onChange={(event) => inputChangeHandler('expected-return', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input 
                        type="number" 
                        id="duration"
                        onChange={(event) => inputChangeHandler('duration', event.target.value)} />
                </p>
            </div>
                <p className={styles.actions}>
                <button onClick={resetHandler} type="reset" className={styles.buttonAlt}>
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