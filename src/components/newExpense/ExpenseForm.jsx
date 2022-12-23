import React from "react";

const ExpenseForm = () => {
  return (
    <form>
      <div className="flex flex-wrap gap-4 mb-4 text-left">
        <div className="">
          <label className="font-bold mb-2 block">Title</label>
          <input
            type="text"
            className="font-inherit p-2 rounded-md border border-solid border-white1"
          />
        </div>
        <div>
          <label className="font-bold mb-2 block">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            className="font-inherit p-2 rounded-md border border-solid border-white1"
          />
        </div>
        <div>
          <label className="font-bold mb-2 block">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            className="font-inherit p-2 rounded-md border border-solid border-white1"
          />
        </div>
      </div>
      <div className="text-left">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
