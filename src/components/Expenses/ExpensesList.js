import "./ExpensesList.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";
function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          Title={expense.Title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
