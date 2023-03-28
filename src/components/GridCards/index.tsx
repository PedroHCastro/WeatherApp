import React from 'react';
import {useTheme} from 'styled-components/native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {WeatherModel} from '../../models';
import {Card} from '../Card';

import * as Styled from './styles';

interface Props {
  dataWeather: WeatherModel;
}

export const GridCards = ({dataWeather}: Props) => {
  const theme = useTheme();

  return (
    <Styled.Container>
      <Card
        label="Nascer do Sol"
        value={dataWeather?.sys.sunrise}
        Icon={() => (
          <IconFeather name="sunrise" size={26} color={theme.colors.font} />
        )}
      />
      <Card
        label="Pôr do Sol"
        value={dataWeather?.sys.sunset}
        Icon={() => (
          <IconFeather name="sunset" size={26} color={theme.colors.font} />
        )}
      />
      <Card
        label="Vento"
        value={dataWeather?.wind.speed}
        Icon={() => (
          <IconFeather name="wind" size={26} color={theme.colors.font} />
        )}
      />
      <Card
        label="Sensação térmica"
        value={dataWeather?.main.feels_like}
        Icon={() => (
          <IconFeather name="sunrise" size={26} color={theme.colors.font} />
        )}
      />
      <Card
        label="Maxima"
        value={dataWeather?.main.temp_max}
        Icon={() => (
          <IconFontAwesome
            name="thermometer-full"
            size={26}
            color={theme.colors.font}
          />
        )}
      />
      <Card
        label="Minima"
        value={dataWeather?.main.temp_min}
        Icon={() => (
          <IconFontAwesome
            name="thermometer-empty"
            size={26}
            color={theme.colors.font}
          />
        )}
      />
    </Styled.Container>
  );
};
