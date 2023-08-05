import React from 'react';
import styles from './CalculatorTable.module.css';

const CalculatorTable = (props) => {
    return (
        <table className={styles.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((yearData) => (
                    <tr>
                        <td>{yearData.year}</td>
                        <td>{yearData.savingsEndOfYear}</td>
                        <td>{yearData.yearlyInterest}</td>
                        <td>{yearData.savingsEndOfYear - 
                             props.initialInvestment - 
                             yearData.yearlyContribution * 
                             yearData.year}</td>
                        <td>{props.initialInvestment + 
                             yearData.yearlyContribution * yearData.year}</td>
                    </tr>
                ))}
            </tbody>
      </table>
    )
}

export default CalculatorTable;