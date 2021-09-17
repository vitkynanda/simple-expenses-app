import React from "react";
import styled from "styled-components/macro";

export default function ChartBar({ value, maxValue, label }) {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <ChartBarWrapper>
      <ChartBarInner>
        <ChartBarFill style={{ height: barFillHeight }}></ChartBarFill>
      </ChartBarInner>
      <ChartBarLabel>{label}</ChartBarLabel>
    </ChartBarWrapper>
  );
}

const ChartBarWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartBarInner = styled.div`
  height: 100%;
  width: 21px;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: gray;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ChartBarFill = styled.div`
  background-color: black;
  width: 100%;
  transition: all 0.3s ease-out;
`;

const ChartBarLabel = styled.div`
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  margin-top: 2px;
`;
