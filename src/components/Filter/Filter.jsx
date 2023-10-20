import React from 'react';
import { FilterInput, FilterTitle, FilterWrap } from './Filter.styled';
export function Filter({ filter, onInputContact }) {
  return (
    <FilterWrap>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        name="searchContact"
        value={filter}
        type="text"
        onInput={onInputContact}
      />
    </FilterWrap>
  );
}
