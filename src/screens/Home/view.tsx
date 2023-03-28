import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {useHomeViewModel} from './view.model';
import {PermissionNotFound, GridCards, Loading} from '../../components';
import {RootStackScreenProps} from '../../routes';
import {useDate} from '../../hooks';

import * as Styled from './styles';

export const Home: React.FC = () => {
  const {dataWeather, fetchData, hasPermissionGeolocation, isLoading} =
    useHomeViewModel();
  const navigation =
    useNavigation<RootStackScreenProps<'Home'>['navigation']>();

  const {currentDate} = useDate();

  const WeatherWrapper = () => (
    <Styled.WeatherWrapper testID="weather-data">
      <Styled.Wrapper>
        <Styled.TemperatureLabel>
          {dataWeather!.main.temp}
        </Styled.TemperatureLabel>

        <Styled.Description>
          {dataWeather!.weather[0].description}
        </Styled.Description>
      </Styled.Wrapper>

      <GridCards dataWeather={dataWeather!} />
    </Styled.WeatherWrapper>
  );

  return (
    <Styled.Scroll>
      <Loading visible={isLoading} />
      <Styled.Container>
        {dataWeather && (
          <>
            <Styled.Wrapper>
              <Styled.CityLabel testID="city-name">
                {dataWeather.name}
              </Styled.CityLabel>

              <Styled.DateLabel>{`${currentDate().day}, ${
                currentDate().date
              } de ${currentDate().month}`}</Styled.DateLabel>
            </Styled.Wrapper>
            <Styled.CurrentImage
              source={{
                uri: `https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@4x.png`,
              }}
            />
            <WeatherWrapper />
          </>
        )}

        {!hasPermissionGeolocation && (
          <PermissionNotFound testID="permission-not-found" />
        )}

        <Styled.ForecastButton
          onPress={() => {
            navigation.navigate('Forecast');
          }}>
          <Styled.LabelButton>
            Previsão para os próximos dias
          </Styled.LabelButton>
        </Styled.ForecastButton>
      </Styled.Container>
    </Styled.Scroll>
  );
};
