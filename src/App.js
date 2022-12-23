import ExpenseItem from "./components/expenses/ExpenseItem";
const App = () => {
  return (
    <div>
      <ExpenseItem
        date={new Date(2022, 5, 12)}
        title="Car insurance"
        amount={297.63}
      />
    </div>
  );
};

export default App;
