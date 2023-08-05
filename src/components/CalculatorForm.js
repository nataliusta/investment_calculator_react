import React, { useState } from 'react';
import styles from './CalculatorForm.module.css';

const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10
};

const CalculatorForm = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);

    const submitHandler = (event) => {
        event.preventDefault(); // Should be triggered when form is submitted 
    };

    const resetHandler = () => {
        setUserInput(initialUserInput);
    };

    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: value,
            };
        });
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