import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpenses from "./components/NewExpense/NewExpense";

const DummyExpenses = [
  {
    id: "e1",
    Title: "Buying laptop ",
    amount: 4500,
    date: new Date(2020, 5, 19),
  },
  {
    id: "e2",
    Title: "Buying TV ",
    amount: 1500,
    date: new Date(2021, 2, 9),
  },
  {
    id: "e3",
    Title: "Car Insurance ",
    amount: 1400,
    date: new Date(2022, 6, 29),
  },
  {
    id: "e4",
    Title: "Groceries ",
    amount: 200,
    date: new Date(2021, 8, 13),
  },
];

// return React.createElement(
// 'div',{},
//React.createElement('h2',{},"let's get started"),
//React.createElement(Expenses,{items:expenses})
// )
function App() {
  const [expenses, setExpenses] = useState(DummyExpenses);
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
