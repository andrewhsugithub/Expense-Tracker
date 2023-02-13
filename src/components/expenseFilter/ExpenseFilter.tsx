import React, { FC } from "react";
import "./expenseFilter.css";

interface ExpensesFilterProps {
  selected: string;
  onChangeFilter: (selectedYear: string) => void;
}

const ExpensesFilter: FC<ExpensesFilterProps> = ({
  selected,
  onChangeFilter,
}) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          value={selected}
          onChange={(e) => onChangeFilter(e.target.value)}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="All">All</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
