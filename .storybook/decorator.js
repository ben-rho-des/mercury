import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Global } from '../src/common-styles';

const GlobalStyle = createGlobalStyle`
  html, .sb-show-main, .sb-show-main #root {
      height: 100%;
  }
  ${Global}
`;
const centerDecorationStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
}

export const ThemeDecorator = storyFn => <div style={centerDecorationStyle}><GlobalStyle />{storyFn()}</div>;
