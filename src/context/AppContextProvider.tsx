import {
  ReduxProvider,
  CombineProviders,
  NavigationContainerProvider,
} from './index';

const providers = [
  ReduxProvider,
  NavigationContainerProvider,
] as React.FC[];

export const AppContextProvider = CombineProviders(providers);
