import React, { useEffect, useState } from "react";

export const ExpenseContext = React.createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenseDatas, setExpenseDatas] = useState([
    {
      title: "",
      amount: "",
      date: "",
    },
  ]);

  const submitForm = (title, amount, date) => {
    const newArray = [...expenseDatas, { title, amount, date }];

    setExpenseDatas(newArray);
  };

  const getExpenseData = () => {
    console.log(expenseDatas);
  };

  return (
    <ExpenseContext.Provider
      value={{ expenseDatas, getExpenseData, submitForm }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
