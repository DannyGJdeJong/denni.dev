import React, { FunctionComponent } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby {
    padding: 0;
    top: 0;
    margin: 0 auto;
    height: 100%;
  }

  body {
    background-color: #F7F7F7;
  }

  p, h1 {
    font-family: 'Inter';
  }
`;

const LayoutWrapper = styled.div`
  height: 100vh;
`;

const Layout: FunctionComponent = ({ children }) => (
  <LayoutWrapper>
    <GlobalStyle />
    {children}
  </LayoutWrapper>
);

export default Layout;
