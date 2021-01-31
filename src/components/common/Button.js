import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.24rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${palette.gray[6]};
    }
  }

  &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}

    ${(props) =>
    props.bigBlue &&
    css`
      width: 318px;
      height: 85px;
      background: ${palette.button[0]};
      border-radius: 100px;
      align-self: center;
      margin: 0 auto;
    `}

    ${(props) =>
    props.smallBlue &&
    css`
      width: 126px;
      height: 48px;
      background: ${palette.button[0]};
      border-radius: 100px;
      align-self: center;
      margin: 0 auto;
    `}

    ${(props) =>
    props.bigGray &&
    css`
      width: 100%;
      height: 84px;
      background: ${palette.button[1]};
      border-radius: 100px;
      align-self: center;
      margin: 0 auto;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const StyledCentered = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px 0 80px 0;
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

const CenteredButton = (props) => (
  <StyledCentered>
    <Button {...props} />
  </StyledCentered>
);

const ConfirmButton = (props) => (
  <StyledCentered>
    <Button {...props} />
  </StyledCentered>
);

export { Button, CenteredButton, ConfirmButton };
