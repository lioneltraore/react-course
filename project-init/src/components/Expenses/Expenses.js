import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.scss";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [period, setPeriod] = useState("");

  const getPeriod = (response) => {
    console.log("response ", response);
    setPeriod(response);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter slected={period} onChangePeriod={getPeriod} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
