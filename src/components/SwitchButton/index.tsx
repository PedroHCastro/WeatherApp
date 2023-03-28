import React from 'react';
import {useTheme} from 'styled-components/native';
import {Switch} from 'react-native';

interface Props {
  isActive: boolean;
  toggle: (value: boolean) => void;
  size?: number;
}

export const SwitchButton = ({isActive, toggle, size}: Props) => {
  const theme = useTheme();
  const getThumbColor = isActive ? '#fff' : '#e7e7e7';

  const style = {transform: [{scaleX: size ?? 0.8}, {scaleY: size ?? 0.8}]};

  return (
    <Switch
      style={style}
      trackColor={{
        false: '#767577',
        true: '#11cc91',
      }}
      thumbColor={getThumbColor}
      ios_backgroundColor={'#767577'}
      onValueChange={toggle}
      value={isActive}
      testID="switchButton"
    />
  );
};
