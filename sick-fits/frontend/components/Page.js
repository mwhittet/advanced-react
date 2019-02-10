import React, { Component } from 'react';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    font-style: normal;
    font-weight: normal;
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'radnika_next';
    font-size: 1.5rem;
    line-height: 2;
    margin: 0;
    padding: 0;
  }

  a {
    color: ${theme.black};
    text-decoration: none;
  }

  button {
    font-family: 'radnika_next';
  }
`;

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;