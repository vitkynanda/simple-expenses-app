import React, { useState } from "react";
import styled from "styled-components/macro";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";

export default function ExpenseItem({ title, date, amount }) {
  const [newTitle, setNewTitle] = useState(title);
  const handleClick = () => {
    setNewTitle("Updated");
  };
  return (
    <Container>
      <ExpenseDate date={date} />
      <Item>
        <ExpenseTitle title={newTitle} />
        <ExpenseAmount amount={amount} />
      </Item>
      <Button onClick={handleClick}>Change Title</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #2d46b9;
  border-radius: 10px;
  padding: 5px 20px;
  margin: 15px 0;
  position: relative;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 5px;
  padding: 5px;
`;
