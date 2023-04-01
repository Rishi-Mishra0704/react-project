import React, { useState } from "react";
import NewExpenses from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

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
