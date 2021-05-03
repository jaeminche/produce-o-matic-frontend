import React from 'react';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';
import { ARROW_OPTION } from '../../assets';
import { useMediaQuery } from 'react-responsive';

const StyledSelect = styled.select`
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};
  ${(props) => props.width && `width: ${props.width}`};
  /* ${(props) => (props.width ? 'width: 100px' : 'max-width: 300px')}; */
  height: 30px;
  border: 1px solid ${palette.budgetomatic.border[1]};
  border-radius: 5px;
  padding: 0 5px;
  font-size: ${(props) => (props.isMobile ? '12px' : '17px')};
  text-align-last: ${(props) => (props.textLeft ? 'left' : 'center')};

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  background: url(${ARROW_OPTION}) 95% / 4% no-repeat;

  option {
    width: inherit;
    max-width: inherit;
    font-size: 14px;
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
    items = false,
    itemNamesNextToOption = false,
    options,
    maxWidth,
    width = 'false',
    textLeft,
  } = props;
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const selectedItemCodes = function () {
    return items.map((item) => item.checked && item.code);
  };

  return (
    <StyledSelect
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      required={required}
      maxWidth={maxWidth}
      width={width}
      isMobile={isMobile}
      textLeft={textLeft}
    >
      {options.map((option, key) => (
        <option
          value={option}
          key={key}
          disabled={
            items && items.length > 0 && selectedItemCodes().includes(option)
          }
          // defaultValue={2}
          // disabled={option === disabledDefault}
        >
          {option}
          {itemNamesNextToOption && '. ' + itemNamesNextToOption[key]}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
