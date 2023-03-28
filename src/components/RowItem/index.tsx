import React from 'react';
import {ForecastListItemModel} from '../../models';

import * as Styled from './styles';

interface Props {
  item: ForecastListItemModel;
}

export const RowItem = ({item}: Props) => {
  return (
    <Styled.Container>
      <Styled.Label>{item.dt}</Styled.Label>

      <Styled.StatusWrapper>
        <Styled.StatusImage
          source={{
            uri: `https://openweathermap.org/img/w/${item.weather[0].icon}.png`,
          }}
        />
        <Styled.Label>{item.weather[0].description}</Styled.Label>
      </Styled.StatusWrapper>

      <Styled.TemperatureWrapper>
        <Styled.Value>Min.: {item.main.temp_min}</Styled.Value>
        <Styled.Value>Max.: {item.main.temp_max}</Styled.Value>
      </Styled.TemperatureWrapper>
    </Styled.Container>
  );
};
