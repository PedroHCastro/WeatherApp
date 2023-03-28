import React, {useState} from 'react';
import {Picker as ReactPicker} from '@react-native-picker/picker';

import * as Styled from './styles';
import {useTheme} from 'styled-components/native';

interface Props {
  data: {label: string; value: string}[];
}

export const Picker = ({data}: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const theme = useTheme();
  return (
    <Styled.Container>
      <ReactPicker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        {data.map(item => (
          <ReactPicker.Item
            style={{
              color: theme.colors.font,
              backgroundColor: theme.colors.background,
            }}
            label={item.label}
            value={item.value}
          />
        ))}
      </ReactPicker>
    </Styled.Container>
  );
};
