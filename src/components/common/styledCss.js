import { mq } from '../../lib/util/device';
import styled from 'styled-components/macro';
import palette from '../../lib/styles/palette';

const Spacer = styled.div`
  padding-top: ${(props) => (props.height ? props.height : '80px')};
`;

export { Spacer };
