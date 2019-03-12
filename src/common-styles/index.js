
import CSSNormalize from './CSSNormalize';
import CSSTypography from './CSSTypography';
import Theme from './Theme';
import Variables from './Variables';

export const Global = `
  ${CSSNormalize}
  ${CSSTypography}
`;

export { CSSNormalize, CSSTypography, Theme, Variables };
