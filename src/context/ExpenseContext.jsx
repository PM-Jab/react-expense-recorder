import React, { useEffect, useState } from "react";

export const ExpenseContext = React.createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenseDatas, setExpenseDatas] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    console.log("handleChange: " + formData[0]);
  };

  return (
    <ExpenseContext.Provider value={{ expenseDatas, formData, handleChange }}>
      {children}
    </ExpenseContext.Provider>
  );
};
