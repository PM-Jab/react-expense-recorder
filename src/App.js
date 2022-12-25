import Expense from "./components/expenses/Expense";
import NewExpense from "./components/newExpense/NewExpense";
const App = () => {
  return (
    <div>
      <NewExpense />
      <Expense />
    </div>
  );
};

export default App;
