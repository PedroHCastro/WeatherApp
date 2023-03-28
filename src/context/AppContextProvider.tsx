import {
  ReduxProvider,
  CombineProviders,
  ThemeProvider,
  NavigationContainerProvider,
} from './index';

const providers = [
  ReduxProvider,
  ThemeProvider,
  NavigationContainerProvider,
] as React.FC[];

export const AppContextProvider = CombineProviders(providers);
