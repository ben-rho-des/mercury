
import CSSNormalize from './CSSNormalize';
import CSSTypography from './CSSTypography';
import Theme from './Theme';

export const Global = `
  ${CSSNormalize}
  ${CSSTypography}
`;

export { CSSNormalize, CSSTypography, Theme };
