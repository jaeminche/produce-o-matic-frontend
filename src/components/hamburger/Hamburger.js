import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { openHamburgerside } from '../../modules/main';

const Group = styled.div`
  width: 18px;
  height: 13px;
  display: flex;
  cursor: pointer;
  position: absolute;
  left: 30px;
  z-index: 50;
  /* top: calc(50% - 7px); */
`;

const Line = styled.span`
  display: block;
  height: 2px;
  width: 18px;
  background: white;
  border-radius: 0px;
  position: absolute;

  &:first-child {
    margin-top: -1px;
  }

  &:nth-child(2) {
    top: 5px;
    margin-top: -1px;
  }
  &:nth-child(3) {
    top: 10px;
    margin-top: -1px;
  }
`;

const Hamburger = (props) => {
  const dispatch = useDispatch();

  return (
    <Group onClick={() => dispatch(openHamburgerside())}>
      <Line {...props} />
      <Line {...props} />
      <Line {...props} />
    </Group>
  );
};

export default Hamburger;
