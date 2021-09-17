import React from "react";
import styled from "styled-components/macro";

export default function ExpenseAmount({ amount }) {
  return <Amount>${amount}</Amount>;
}
const Amount = styled.div`
  background-color: purple;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
`;
