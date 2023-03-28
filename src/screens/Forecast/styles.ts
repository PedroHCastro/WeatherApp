import {LineChart} from 'react-native-chart-kit';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${({theme}) => theme.colors.font};
`;

export const ChartWrapper = styled.View`
  width: 100%;
`;
