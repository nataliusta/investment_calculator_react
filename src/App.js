import React from 'react';
import CalculatorForm from './components/CalculatorForm';
import CalculatorTable from './components/CalculatorTable';
import CalculatorHeader from './components/CalculatorHeader';

function App() {

  return (
    <div>
      <CalculatorHeader />
      <CalculatorForm />
      <CalculatorTable />
    </div>
  );
}

export default App;
