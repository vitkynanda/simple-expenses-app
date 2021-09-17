import React from "react";
import styled from "styled-components/macro";
import Card from "./Card";

export default function AddExpnses({ showForm }) {
  return (
    <Card>
      <Container>
        <Button onClick={() => showForm((prev) => !prev)}>Add Expenses</Button>
      </Container>
    </Card>
  );
}

const Button = styled.button`
  height: 30px;
  margin: 10px 5px;
  background-color: white;
  color: black;
  padding: 5px 15px;
  border-radius: 5px;
  border: none;
  font-weight: 600;
`;

const Container = styled.div`
  text-align: center;
`;
