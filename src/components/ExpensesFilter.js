import React from "react";
import styled from "styled-components/macro";

const ExpensesFilter = ({ onChangeFilter, selected }) => {
  const dropDownHandler = (e) => {
    onChangeFilter(e.target.value);
  };

  return (
    <FilterWrapper>
      <FilterControl>
        <label>Filter by year</label>
        <select value={selected} onChange={dropDownHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </FilterControl>
    </FilterWrapper>
  );
};

export default ExpensesFilter;

const FilterWrapper = styled.div`
  color: white;
  padding: 0 1rem;
`;
const FilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  select {
    font: inherit;
    padding: 0.5rem 3rem;
    font-weight: bold;
    border-radius: 6px;
  }
`;
