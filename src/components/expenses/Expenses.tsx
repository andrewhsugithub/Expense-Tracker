import React, { FC, useState } from "react";
import ExpenseItem from "../expenseItem/ExpenseItem";
import "./expenses.css";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";
import ExpensesChart from "../expensesChart/ExpensesChart";

interface ExpensesProps {
  items: Expense[];
}

const Expenses: FC<ExpensesProps> = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (expense) =>
      expense.date.getFullYear() === Number(filteredYear) ||
      filteredYear === "All"
  );

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length > 0 ? (
        <ul className="expenses-list">
          {filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </ul>
      ) : (
        <h2 className="expenses-list__fallback">Found no expenses.</h2>
      )}
    </div>
  );
};

export default Expenses;
