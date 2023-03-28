import React from 'react';
import {Linking} from 'react-native';

import * as Styled from './styles';

interface Props {
  testID: string;
}

export const PermissionNotFound = ({testID}: Props) => {
  return (
    <Styled.Container testID={testID}>
      <Styled.Title>Não temos acesso à sua localização:</Styled.Title>
      <Styled.Description>
        Você pode mudar o acesso à sua localização nos Ajustes do seu aparelho.
      </Styled.Description>

      <Styled.OpenSettingsButton
        onPress={() => {
          Linking.openSettings();
        }}>
        <Styled.LabelButton>Ir para Ajustes</Styled.LabelButton>
      </Styled.OpenSettingsButton>
    </Styled.Container>
  );
};
