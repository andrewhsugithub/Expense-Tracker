type Expense = {
  id: string;
} & ExpenseData;

type ExpenseData = {
  title: string;
  amount: number;
  date: Date;
};

type DataPoint = {
  label: string;
  value: number;
};
