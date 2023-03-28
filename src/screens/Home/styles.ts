import styled from 'styled-components/native';

export const Scroll = styled.ScrollView`
  background: ${({theme}) => theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 50px;
`;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const CityLabel = styled.Text`
  font-size: 22px;
  color: ${({theme}) => theme.colors.font};
`;

export const DateLabel = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.font};
`;

export const CurrentImage = styled.Image`
  width: 200px;
  height: 200px;
  box-shadow: 4px 3px 5px #aaa;
`;

export const TemperatureLabel = styled.Text`
  font-size: 36px;
  color: ${({theme}) => theme.colors.font};
`;

export const Description = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.font};
  margin-bottom: 20px;
`;

export const ForecastButton = styled.TouchableOpacity`
  width: 100%;
  height: 36px;
  margin-top: 30px;
  border: 1px solid #cdcdcd;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const LabelButton = styled.Text`
  color: ${({theme}) => theme.colors.font};
  font-size: 16px;
  font-weight: bold;
`;

export const WeatherWrapper = styled.View`
  width: 100%;
`;
