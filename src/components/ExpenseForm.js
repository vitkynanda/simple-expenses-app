import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
export default function ExpenseForm({ onSaveExpenseData, showForm }) {
  const [input, setInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleChage = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: input.title,
      amount: +input.amount,
      date: new Date(input.date),
    };
    onSaveExpenseData(expenseData);
    setInput({ title: "", amount: "", date: "" });
    showForm((prev) => !prev);
  };

  return (
    <Card>
      <Container>
        <Form>
          <InputComponent>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={input.title}
              onChange={handleChage}
            />
          </InputComponent>
          <InputComponent>
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              name="amount"
              value={input.amount}
              onChange={handleChage}
            />
          </InputComponent>
          <InputComponent>
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={input.date}
              onChange={handleChage}
            />
          </InputComponent>
        </Form>
        <ButtonWrapper>
          <Button onClick={handleSubmit}>Add Expenses</Button>
          <Button onClick={() => showForm((prev) => !prev)}>Cancel</Button>
        </ButtonWrapper>
      </Container>
    </Card>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2d46b9;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-gap: 20px;
`;
const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  input {
    border-radius: 5px;
    border: none;
    padding: 5px;
    background-color: lightgray;
  }
  label {
    font-weight: 600;
    color: lightgray;
    margin-bottom: 2px;
  }
`;
const Button = styled.button`
  height: 30px;
  margin: 10px 5px;
  background-color: black;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  border: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-self: flex-end;
`;
