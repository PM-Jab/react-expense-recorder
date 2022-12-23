import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../shared/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log("clicked!!!");
  };

  return (
    <Card className="flex justify-between items-center shadow p-3 mx-4 my-4 rounded-xl bg-gray1">
      <ExpenseDate date={props.date} />
      <div className="flex flex-row items-center justify-start flex-1">
        <div className="text-2xl font-bold text-white flex-1 mx-4">{title}</div>
        <div className="text-2xl font-bold text-white bg-purple1 border border-solid border-white py-2 px-8 rounded-xl">
          ${props.amount}
        </div>
      </div>
      <button onClick={clickHandler} className="bg-white">
        Change Title
      </button>
    </Card>
  );
};

export default ExpenseItem;