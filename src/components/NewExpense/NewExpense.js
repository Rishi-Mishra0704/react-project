import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  function onSaveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
  }
  function startEditing() {
    setIsEditing(true);
  }
  function stopEditng() {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditng}
        />
      )}
    </div>
  );
};

export default NewExpenses;
