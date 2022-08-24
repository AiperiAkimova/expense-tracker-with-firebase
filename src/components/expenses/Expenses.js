import "./Expenses.css";
import Card from "../UI/Card";
import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((el) => (
        <ExpenseItem
          key={el.id}
          date={el.date}
          title={el.title}
          amount={el.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
