import {
  NavigationContainerProvider,
} from './index';

const providers = [
  NavigationContainerProvider,
] as React.FC[];

export const AppContextProvider = CombineProviders(providers);
