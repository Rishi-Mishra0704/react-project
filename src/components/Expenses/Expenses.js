import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li marker="none">
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
       
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
