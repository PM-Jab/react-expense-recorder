import React, { useEffect, useState } from "react";

export const ExpenseContext = React.createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenseDatas, setExpenseDatas] = useState([]); // type in array{title: string, amount: string, date: string}
  const [currentFilter, setFilter] = useState("Select All");

  const submitForm = (title, amount, date) => {
    const newArray = [...expenseDatas, { title, amount, date }];

    setExpenseDatas(newArray);
  };

  const getExpenseData = () => {
    console.log(expenseDatas);
  };

  const updateFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <ExpenseContext.Provider
      value={{ expenseDatas, updateFilter, getExpenseData, submitForm }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
