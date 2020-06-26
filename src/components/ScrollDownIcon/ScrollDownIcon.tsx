import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-25px);
  }
`;

const ScrollDownIcon = styled(ArrowDownwardIcon)`
  position: absolute;
  bottom: 2rem;
  color: #F5F5F5AA;
  border-radius: 50%;
  font-size: 50px !important;
  padding: 13px;
  animation: ${bounce} 1s infinite alternate;
`;

export default ScrollDownIcon;
