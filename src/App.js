import ExpenseItem from "./components/expenses/ExpenseItem";
import NewExpense from "./components/newExpense/NewExpense";
const App = () => {
  return (
    <div>
      <NewExpense />
      <ExpenseItem
        date={new Date(2022, 5, 12)}
        title="Car insurance"
        amount={297.63}
      />
    </div>
  );
};

export default App;
