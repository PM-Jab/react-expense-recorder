const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="flex flex-col items-center justify-center text-sm text-white bg-gray-800 border border-solid border-white py-2 px-8 rounded-xl">
      <div className="text-lg font-bold">{month}</div>
      <div>{year}</div>
      <div className="text-4xl font-bold">{day}</div>
    </div>
  );
};

export default ExpenseDate;
