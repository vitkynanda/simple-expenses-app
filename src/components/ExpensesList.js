import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({ filteredExpenses }) {
  if (filteredExpenses.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Found no expenses.</h2>;
  }
  return (
    <div>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}
