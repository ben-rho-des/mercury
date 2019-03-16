
import CSSNormalize from './CSSNormalize';
import CSSTypography from './CSSTypography';
import CSSIcon from './CSSIcon';
import Theme from './Theme';

export const Global = `
  ${CSSNormalize}
  ${CSSTypography}
  ${CSSIcon}
`;

export { CSSNormalize, CSSTypography, Theme };
