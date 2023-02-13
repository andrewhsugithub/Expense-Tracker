import React, { FC } from "react";
import Chart from "../chart/Chart";

interface ExpensesChartProps {
  expenses: Array<Expense>;
}

const ExpensesChart: FC<ExpensesChartProps> = ({ expenses }) => {
  const chartDataPoints: DataPoint[] = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  //   expenses.forEach((expense) => {});

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth(); //starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
