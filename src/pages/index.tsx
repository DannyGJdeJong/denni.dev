import React, { FunctionComponent } from "react"
import styled, { keyframes } from "styled-components";
import Center from '../components/Center'

const StyledDiv = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: #1E1E1E;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const StyledHeader = styled.h1`
  margin: 0 auto;
  color: #F5F5F5;
  animation: ${fadeIn} 2s ease-in;
`

const Home: FunctionComponent = () => (
  <>
    <StyledDiv>
      <Center>
        <StyledHeader>Welcome to denni.dev</StyledHeader>
      </Center>
    </StyledDiv>
  </>
);

export default Home;
