import React from 'react';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import { ARROW_OPTION } from '../../assets';

const StyledSelect = styled.select`
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};
  ${(props) => props.width && `width: ${props.width}`};
  /* ${(props) => (props.width ? 'width: 100px' : 'max-width: 300px')}; */
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
    maxWidth,
    width = 'false',
    groupCode,
  } = props;
  return (
    <StyledSelect
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      required={required}
      maxWidth={maxWidth}
      width={width}
      // {...props}
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
