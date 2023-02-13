import React, { FC, useState } from "react";
import "./expenseItem.css";
import ExpenseDate from "../expenseDate/ExpenseDate";
import Card from "../../containers/card/Card";

const ExpenseItem: FC<Expense> = ({ id, title, amount, date }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
