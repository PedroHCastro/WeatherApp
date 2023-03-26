import React, {useEffect} from 'react';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {Card} from '../../components';

import * as Styled from './styles';
import useWeatherViewModel from './view.model';

export const Home: React.FC = () => {
  const {isMorning, dataWeather, fetchData} = useWeatherViewModel();

  var now = new Date();

  var days = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];

  var months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  var day = days[now.getDay()];
  var date = now.getDate();
  var month = months[now.getMonth()];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Styled.Container isMorning={isMorning}>
      <Styled.Wrapper>
        <Styled.CityLabel>{dataWeather?.name}</Styled.CityLabel>
        <Styled.DateLabel>{`${day}, ${date} de ${month}`}</Styled.DateLabel>
      </Styled.Wrapper>

      <Styled.CurrentImage
        source={{
          uri: `https://openweathermap.org/img/wn/${dataWeather?.weather[0].icon}@4x.png`,
        }}
      />

      <Styled.Wrapper>
        <Styled.TemperatureLabel>
          {dataWeather?.main.temp}
        </Styled.TemperatureLabel>

        <Styled.Description>
          {dataWeather?.weather[0].description}
        </Styled.Description>
      </Styled.Wrapper>

      <Styled.Footer>
        <Card
          label="Nascer do Sol"
          value={dataWeather?.sys.sunrise}
          Icon={() => <IconFeather name="sunrise" size={26} color="#fff" />}
        />
        <Card
          label="Pôr do Sol"
          value={dataWeather?.sys.sunset}
          Icon={() => <IconFeather name="sunset" size={26} color="#fff" />}
        />
        <Card
          label="Vento"
          value={dataWeather?.wind.speed}
          Icon={() => <IconFeather name="wind" size={26} color="#fff" />}
        />
        <Card
          label="Sensação térmica"
          value={dataWeather?.main.feels_like}
          Icon={() => <IconFeather name="sunrise" size={26} color="#fff" />}
        />
        <Card
          label="Maxima"
          value={dataWeather?.main.temp_max}
          Icon={() => (
            <IconFontAwesome name="thermometer-full" size={26} color="#fff" />
          )}
        />
        <Card
          label="Minima"
          value={dataWeather?.main.temp_min}
          Icon={() => (
            <IconFontAwesome name="thermometer-empty" size={26} color="#fff" />
          )}
        />
      </Styled.Footer>
    </Styled.Container>
  );
};
