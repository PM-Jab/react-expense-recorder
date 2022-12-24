import React, { useState, useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.01"
    min="2019-01-01"
    max="2023-12-31"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="font-inherit p-2 rounded-md border border-solid border-white1 w-[20rem] max-w-[100%]"
  />
);

const ExpenseForm = (props) => {
  const { formData, handleChange } = useContext(ExpenseContext);

  // const [newTitle, setTitle] = useState("");
  // const [newAmount, setAmount] = useState("");
  // const [newDate, setDate] = useState("");
  // const titleChangeHandler = (event) => {
  //   setTitle(event.target.value);
  // };

  // const amountChangeHandler = (event) => {
  //   setAmount(event.target.value);
  // };

  // const dateChangeHandler = (event) => {
  //   setDate(event.target.value);
  // };

  const submitHandler = (event) => {
    const { title, amount, date } = formData;
    event.preventDefault(); // what is do

    // const expenseData = {
    //   title: newTitle,
    //   amount: newAmount,
    //   date: new Date(newDate),
    // };

    // props.onSaveExpenseData(expenseData);

    // setTitle("");
    // setAmount("");
    // setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-wrap gap-4 mb-4 text-left">
        <div className="">
          <label className="font-bold mb-2 block">Title</label>
          {/* <input
            type="text"
            placeholder="Activity or Item name"
            onChange={titleChangeHandler}
            value={newTitle}
            className="font-inherit p-2 rounded-md border border-solid border-white1 w-[20rem] max-w-[100%]"
          /> */}
          <Input
            placeholder="Activity or Item name"
            name="title"
            type="text"
            handleChange={handleChange}
          />
        </div>
        <div>
          <label className="font-bold mb-2 block">Amount</label>
          {/* <input
            type="number"
            placeholder="Cost"
            onChange={amountChangeHandler}
            value={newAmount}
            min="0.01"
            step="0.01"
            className="font-inherit p-2 rounded-md border border-solid border-white1 w-[20rem] max-w-[100%]"
          /> */}
          <Input
            placeholder="Cost"
            name="amount"
            type="number"
            handleChange={handleChange}
          />
        </div>
        <div>
          <label className="font-bold mb-2 block">Date</label>
          {/* <input
            type="date"
            onChange={dateChangeHandler}
            value={newDate}
            min="2019-01-01"
            max="2023-12-31"
            className="font-inherit p-2 rounded-md border border-solid border-white1 w-[20rem] max-w-[100%]"
          /> */}
          <Input
            placeholder=""
            name="date"
            type="date"
            handleChange={handleChange}
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
