import React from 'react';
import {DefaultTheme} from 'styled-components';
import {NativeStackNavigationHelpers} from '@react-navigation/native-stack/lib/typescript/src/types';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import * as Styled from './styles';

interface Props {
  navigation: NativeStackNavigationHelpers;
  theme: DefaultTheme;
  hasHeaderRight?: boolean;
}

function Header({navigation, theme, hasHeaderRight}: Props) {
  function headerLeft() {
    if (navigation.canGoBack()) {
      return (
        <Styled.HeaderButton onPress={() => navigation.goBack()}>
          <IconFontAwesome
            name="chevron-left"
            color={theme.colors.font}
            size={30}
          />
        </Styled.HeaderButton>
      );
    } else {
      return (
        <Styled.HeaderButton onPress={() => navigation.navigate('Config')}>
          <IconFontAwesome name="gear" color={theme.colors.font} size={30} />
        </Styled.HeaderButton>
      );
    }
  }

  function headerRight() {
    if (hasHeaderRight) {
      return (
        <Styled.HeaderButton
          onPress={() => navigation.setParams({refresh: true})}>
          <IconFontAwesome name="refresh" color={theme.colors.font} size={30} />
        </Styled.HeaderButton>
      );
    }
  }
  return {
    title: '',
    headerLeft,
    headerRight,
  };
}

export default Header;
