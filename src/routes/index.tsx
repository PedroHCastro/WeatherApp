import {Home, Forecast, Config} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {RootStackParamList} from './types';

import {Header} from '../components';
import {useTheme} from 'styled-components/native';

export * from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Router = (): JSX.Element => {
  const theme = useTheme();

  return (
    <RootStack.Navigator
      screenOptions={{headerStyle: {backgroundColor: theme.colors.background}}}>
      <RootStack.Screen
        name="Home"
        component={Home}
        options={({navigation}) =>
          Header({
            navigation,
            theme,
            hasHeaderRight: true,
          })
        }
      />
      <RootStack.Screen
        name="Forecast"
        component={Forecast}
        options={({navigation}) =>
          Header({
            navigation,
            theme,
          })
        }
      />
      <RootStack.Screen
        name="Config"
        component={Config}
        options={({navigation}) =>
          Header({
            navigation,
            theme,
          })
        }
      />
    </RootStack.Navigator>
  );
};

export default Router;
