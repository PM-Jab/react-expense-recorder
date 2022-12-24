import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../shared/Card";

const Expense = (props) => {
  return (
    <Card className="p-2 bg-expenseBg my-4 mx-auto w-[50rem] max-w-[95%]">
      <ExpenseItem
        title={props.title}
        amount={props.amount}
        date={props.date}
      />
      <ExpenseItem
        title={props.title}
        amount={props.amount}
        date={props.date}
      />
    </Card>
  );
};

export default Expense;
