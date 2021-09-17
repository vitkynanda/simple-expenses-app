import React, { useState } from "react";
import AddExpnses from "./AddExpnses";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense({ onAddExpense }) {
  const saveExepenseHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString };
    onAddExpense(expenseData);
  };
  const [addExpenses, setAddExpense] = useState(false);
  return (
    <>
      {addExpenses ? (
        <ExpenseForm
          onSaveExpenseData={saveExepenseHandler}
          showForm={setAddExpense}
        />
      ) : (
        <AddExpnses showForm={setAddExpense} />
      )}
    </>
  );
}
