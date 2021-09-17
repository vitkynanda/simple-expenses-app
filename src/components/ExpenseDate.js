import React from "react";
import styled from "styled-components/macro";

export default function ExpenseDate({ date }) {
  const day = date?.toLocaleString("en-US", { day: "2-digit" });
  const month = date?.toLocaleString("en-US", { month: "long" });
  const year = date?.getFullYear();

  return (
    <DateItem>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </DateItem>
  );
}

const DateItem = styled.div`
  min-width: 55px;
  color: black;
  padding: 7px 5px;
  text-align: center;
  background-color: darkgray;
  margin-right: 10px;
  border: 1px solid white;
  border-radius: 5px;
  div {
    font-size: 12px;
    font-weight: 500;
  }
`;
