import React from 'react';

import * as Styled from './styles';

interface Props {
  Icon: () => JSX.Element;
  label: string;
  value?: string | number;
}

export const Card = ({Icon, label, value}: Props) => {
  return (
    <Styled.Container>
      <Icon />
      <Styled.Label>{label}</Styled.Label>
      <Styled.Value>{value}</Styled.Value>
    </Styled.Container>
  );
};
