import 'styled-components';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      background: string;
      font: string;
    };
  }
}
