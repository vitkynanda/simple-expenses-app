import React from "react";
import styled from "styled-components/macro";

export default function ExpenseTitle({ title }) {
  return <Title>{title}</Title>;
}

const Title = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;
