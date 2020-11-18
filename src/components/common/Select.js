import React from 'react';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import { ARROW_OPTION } from '../../assets';

const StyledSelect = styled.select`
  ${(props) => (props.width100 ? 'width: 100px' : 'max-width: 300px')};
  height: 48px;
  border: 1px solid ${palette.budgetomatic.border[1]};
  border-radius: 5px;
  padding: 13px;

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  background: url(${ARROW_OPTION}) 95% / 4% no-repeat;

  option {
    width: inherit;
    max-width: inherit;
    line-height: 20px;
  }
  option:checked {
    color: ${palette.button[0]};
  }
`;

const Select = (props) => {
  const {
    value,
    onChange,
    id,
    name,
    required = false,
    optionsList,
    width100,
  } = props;
  return (
    <StyledSelect
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      required={required}
      width100={width100}
    >
      {optionsList.map((option, key) => (
        <option value={option} key={key}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
