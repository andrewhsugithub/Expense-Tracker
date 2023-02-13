import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import "./expenseForm.css";

interface ExpenseFormProps {
  onCreate: (data: ExpenseData) => void;
}

const ExpenseForm: FC<ExpenseFormProps> = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expenseData: ExpenseData = {
      title: title,
      amount: Number(amount),
      date: new Date(date),
    };
    onCreate(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
