
import CSSNormalize from './CSSNormalize';
import CSSTypography from './CSSTypography';
import CSSIcon from './CSSIcon';
import Theme from './Theme';
import ThemeCircular from './ThemeCircular';
import ThemeBoxed from './ThemeBoxed';

export const Global = `
  ${CSSNormalize}
  ${CSSTypography}
  ${CSSIcon}
`;

export { CSSNormalize, CSSTypography, Theme, ThemeCircular, ThemeBoxed};
