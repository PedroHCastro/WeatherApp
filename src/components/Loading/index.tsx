import React from 'react';
import {ActivityIndicator, Modal} from 'react-native';

import * as Styled from './styles';

interface Props {
  visible: boolean;
}

export const Loading = ({visible}: Props) => {
  return (
    <Modal transparent={true} visible={visible}>
      <Styled.Background>
        <Styled.Container>
          <ActivityIndicator animating={true} size="large" />
        </Styled.Container>
      </Styled.Background>
    </Modal>
  );
};
