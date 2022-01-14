import 'styled-components';
import theme  from '../global/styles/theme';

declare module 'styled-components' {
  type ThemeTypes = typeof theme;
  export interface DefaultTheme extends ThemeTypes {};
}