import React from 'react';
import {
  NavigationContainer,
  NavigationState,
  ParamListBase,
  PartialRoute,
  PartialState,
  Route,
} from '@react-navigation/native';

declare type NavigationRoute<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> = Route<Extract<RouteName, string>, ParamList[RouteName]> & {
  state?: NavigationState | PartialState<NavigationState>;
};

type Routes =
  | Array<NavigationRoute<ParamListBase, string>>
  | Array<PartialRoute<Route<string, object | undefined>>>;

export const getCurrentRoute = (
  state: NavigationState | Required<NavigationState['routes'][0]>['state'],
): Routes | string | undefined => {
  if (state.index === undefined || state.index < 0) {
    return undefined;
  }
  const nestedState = state.routes[state.index].state;
  if (nestedState !== undefined) {
    return getCurrentRoute(nestedState);
  }
  return state.routes[state.index].name;
};

interface Props {
  children: JSX.Element;
}

const NavigationContainerProvider: React.FC<Props> = ({children}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default NavigationContainerProvider;
