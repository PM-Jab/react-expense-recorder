import React, { useState, useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

const Input = ({ placeholder, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.01"
    min="2019-01-01"
    max="2023-12-31"
    value={value}
    onChange={handleChange}
    className="font-inherit p-2 rounded-md border border-solid border-white1 w-[20rem] max-w-[100%]"
  />
);

const ExpenseForm = (props) => {
  const { getExpenseData, submitForm } = useContext(ExpenseContext);
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const inputTitle = (e) => {
    setNewTitle(e.target.value);
  };
  const inputAmount = (e) => {
    setNewAmount(e.target.value);
  };
  const inputDate = (e) => {
    setNewDate(e.target.value);
  };

  const cleanInput = () => {
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  const submitHandler = (event) => {
    event.preventDefault(); // what is do

    submitForm(newTitle, newAmount, new Date(newDate));

    cleanInput();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-wrap gap-4 mb-4 text-left">
        <div className="">
          <label className="font-bold mb-2 block">Title</label>
          <Input
            placeholder="Activity or Item name"
            name="title"
            value={newTitle}
            type="text"
            handleChange={inputTitle}
          />
        </div>
        <div>
          <label className="font-bold mb-2 block">Amount</label>
          <Input
            placeholder="Cost"
            name="amount"
            value={newAmount}
            type="number"
            handleChange={inputAmount}
          />
        </div>
        <div>
          <label className="font-bold mb-2 block">Date</label>
          <Input
            name="date"
            value={newDate}
            type="date"
            handleChange={inputDate}
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
