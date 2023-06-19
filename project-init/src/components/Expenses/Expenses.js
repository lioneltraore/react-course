
import Card from "../UI/Card";
import "./Expenses.scss";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [period, setPeriod] = useState("2020");

  const getPeriod = (response) => {
    console.log("response ", response);
    setPeriod(response);
  };

  const filtered = props.expenses.filter(expense => {
    console.log('filter attempt')
    return new Date(expense.date).getFullYear().toString() === period;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={period} onChangePeriod={getPeriod} />
        <ExpensesChart expenses={filtered} />
        <ExpensesList items={filtered} />
      </Card>
    </div>
  );
}

export default Expenses;