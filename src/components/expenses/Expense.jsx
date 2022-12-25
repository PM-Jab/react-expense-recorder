import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../shared/Card";
import { ExpenseContext } from "../../context/ExpenseContext";
import FilterSelection from "./FilterSelection";

const Expense = () => {
  const { expenseDatas } = useContext(ExpenseContext);

  return (
    <Card className="p-2 bg-expenseBg my-4 mx-auto w-[50rem] max-w-[95%]">
      <FilterSelection />
      {expenseDatas.length > 0 ? (
        expenseDatas
          .slice(0)
          .reverse()
          .map((expense) => {
            return (
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={new Date(expense.date)}
                key={Math.random().toString()}
              />
            );
          })
      ) : (
        <ExpenseItem
          date={new Date(2022, 0, 1)}
          title="No Expense yet"
          amount={1}
        />
      )}
    </Card>
  );
};

export default Expense;
