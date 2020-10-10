import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import leaves from '../../assets/leaves.png';
import Center from '../Center';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
`;

const StyledImg = styled.img`
  position: absolute;
  top: -9999px;
  bottom: -9999px;
  left: -9999px;
  right: -9999px;
  margin: auto;
  width: 110%;
  height: 110%;
  filter: blur(10px);
  object-fit: cover;
`;

const StyledHeader = styled.h1`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  color: #F5F5F5;
  font-size: 50px;
  text-align: center;
  animation: ${fadeIn} 2s ease-in;
`;

const WelcomeHeader: FunctionComponent = () => (
  <StyledDiv>
    <Center>
      <StyledImg src={leaves}></StyledImg>
      <StyledHeader>Welcome to denni.dev</StyledHeader>
    </Center>
  </StyledDiv>
);

export default WelcomeHeader;
