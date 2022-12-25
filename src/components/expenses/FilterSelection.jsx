import React from "react";
import SelectFilter from "./SelectFilter";

const FilterSelection = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center p-4">
      <div className="flex text-white font-bold justify-center items-center">
        Filter By Year
      </div>
      <SelectFilter />
    </div>
  );
};

export default FilterSelection;
