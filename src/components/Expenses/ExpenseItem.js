import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseList(props) {
  const [title, setTitle] = useState(props.Title);
  const [amount, setAmount] = useState(props.amount);
  const changeTitleHandeler = (event) => {
    setTitle(prompt());
    console.log(title);
  };
  const changeAmountHandler = (event) => {
    setAmount(prompt());
    console.log(amount);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
      <button onClick={changeTitleHandeler}>Change Title</button>
      <button onClick={changeAmountHandler}>Change Amount</button>
    </Card>
  );
}

export default ExpenseList;
