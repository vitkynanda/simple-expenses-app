import React, { useState } from "react";
import styled from "styled-components";
import Expenses from "./components/Expenses";
import expenses from "./expensesData";
import NewExpense from "./components/NewExpense";

function App() {
  const [updateExpenses, setUpdateExpenses] = useState(expenses);
  const onAddExpenseHandler = (enteredExpenseData) => {
    setUpdateExpenses((prev) => {
      return [enteredExpenseData, ...prev];
    });
  };

  return (
    <AppContainer>
      <h1>Expense App</h1>
      <Container>
        <NewExpense onAddExpense={onAddExpenseHandler} />
        <Expenses expenses={updateExpenses} />
      </Container>
    </AppContainer>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AppContainer = styled.div`
  h1 {
    text-align: center;
    color: lightgray;
  }
`;
