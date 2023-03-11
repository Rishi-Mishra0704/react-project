import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpenses from "./components/NewExpense/NewExpense";


function App() {
  const [expenses, setExpenses] = useState([]);
  const addExpenseHandler = (expense) => {
    setExpenses(function (prevExpenses) {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
