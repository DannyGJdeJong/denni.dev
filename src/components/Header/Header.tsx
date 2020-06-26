import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #1E1E1E;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledHeader = styled.h1`
  margin: 0 auto;
  color: #F5F5F5;
`;

const Header: FunctionComponent = () => (
  <StyledDiv>
    <StyledHeader>denni.dev</StyledHeader>
  </StyledDiv>
);

export default Header;
