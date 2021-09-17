import React from "react";
import styled from "styled-components/macro";

export default function Card({ restprops, children }) {
  return <Container {...restprops}>{children}</Container>;
}

const Container = styled.div`
  width: 50%;
  background-color: black;
  padding: 10px 15px;
  border-radius: 10px;
  margin: 5px;
`;
