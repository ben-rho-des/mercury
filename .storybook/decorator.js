import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { Theme, Global } from '../src/common-styles';

injectGlobal`
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

export const ThemeDecorator = storyFn => <div style={centerDecorationStyle}><ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider></div>;
