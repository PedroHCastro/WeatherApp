import React, {useState} from 'react';
import {Picker, SwitchButton} from '../../components';
import {useConfigViewModel} from './view.model';

import * as Styled from './styles';

export const Config = () => {
  const {data, toggle, isDarkTheme} = useConfigViewModel();

  return (
    <Styled.Container>
      <Styled.Title>Configurações</Styled.Title>
      <Styled.Label>Unidade de temperatura:</Styled.Label>
      <Picker data={data} />

      <Styled.Separation />

      <Styled.WrapperSelection>
        <Styled.Label>Tema escuro</Styled.Label>
        <SwitchButton isActive={isDarkTheme} toggle={toggle} size={1.6} />
      </Styled.WrapperSelection>

      <Styled.Separation />
    </Styled.Container>
  );
};
