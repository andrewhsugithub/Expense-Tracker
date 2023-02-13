import React, { FC } from "react";
import "./newExpense.css";
import ExpenseForm from "./../expenseForm/ExpenseForm";

interface NewExpenseProps {
  onAdd: (data: ExpenseData) => void;
}

const NewExpense: FC<NewExpenseProps> = ({ onAdd }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onCreate={onAdd} />
    </div>
  );
};

export default NewExpense;
