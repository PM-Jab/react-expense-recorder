import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [newTitle, setTitle] = useState("");
  const [newAmount, setAmount] = useState("");
  const [newDate, setDate] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // what is do

    const expenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };

    props.onSaveExpenseData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-wrap gap-4 mb-4 text-left">
        <div className="">
          <label className="font-bold mb-2 block">Title</label>
          <input
            type="text"
            placeholder="Activity or Item name"
            onChange={titleChangeHandler}
            value={newTitle}
            className="font-inherit p-2 rounded-md border border-solid border-white1 w-[20rem] max-w-[100%]"
          />
        </div>
        <div>
          <label className="font-bold mb-2 block">Amount</label>
          <input
            type="number"
            placeholder="Cost"
            onChange={amountChangeHandler}
            value={newAmount}
            min="0.01"
            step="0.01"
            className="font-inherit p-2 rounded-md border border-solid border-white1 w-[20rem] max-w-[100%]"
          />
        </div>
        <div>
          <label className="font-bold mb-2 block">Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={newDate}
            min="2019-01-01"
            max="2023-12-31"
            className="font-inherit p-2 rounded-md border border-solid border-white1 w-[20rem] max-w-[100%]"
          />
        </div>
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="bg-purple1 text-white py-4 px-4 rounded-xl"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
