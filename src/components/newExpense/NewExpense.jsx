import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <div className="bg-[#a892ee] p-4 my-8 mx-auto w-[50rem] max-w-[95%] rounded-xl text-center shadow">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
