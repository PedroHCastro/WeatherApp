import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #cdcdcd;
  border-radius: 8px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
`;

export const Value = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;

export const StatusImage = styled.Image`
  width: 30px;
  height: 30px;
  margin: 5px 5px 0 0;
`;

export const StatusWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
`;

export const TemperatureWrapper = styled.View``;
