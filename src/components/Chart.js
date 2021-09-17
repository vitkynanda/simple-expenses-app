import React from "react";
import styled from "styled-components";
import ChartBar from "./ChartBar";

export default function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <ChartWrapper>
      {dataPoints?.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #2d46b9;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;
