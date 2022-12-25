import React, { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

const SelectFilter = () => {
  const filterList = ["Select All", "2020", "2021", "2022", "2023"];
  const { updateFilter } = useContext(ExpenseContext);

  const handlerSelectFilter = (event) => {
    updateFilter(event.target.value);
  };

  return (
    <div>
      <select
        className="bg-white font-bold px-8 py-2 rounded-lg"
        onChange={handlerSelectFilter}
      >
        {filterList.map((list, key) => {
          return (
            <option value={list} key={key}>
              {list}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectFilter;
