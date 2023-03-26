import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({isMorning}) => (isMorning ? '#dde4ec' : '#2f3543')};
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
  color: #ffffff;
`;

export const DateLabel = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;

export const CurrentImage = styled.Image`
  width: 200px;
  height: 200px;
  box-shadow: 4px 3px 5px #aaa;
`;

export const TemperatureLabel = styled.Text`
  font-size: 36px;
  color: #ffffff;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;
