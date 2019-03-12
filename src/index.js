import { injectGlobal } from 'styled-components'
import Normalize from './common-syles';

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    background: pink;
  }

  ${Normalize}
`

export * from './components';
