import React from 'react';
import {Dimensions, FlatList} from 'react-native';
import {useTheme} from 'styled-components/native';
import {LineChart} from 'react-native-chart-kit';

import {RowItem} from '../../components';
import {useForecastViewModel} from './view.model';

import * as Styled from './styles';

export const Forecast: React.FC = () => {
  const {dataForecast, dataForecastToGraph, isLoading} = useForecastViewModel();
  const theme = useTheme();

  return (
    <Styled.Container>
      <Styled.Title>Previsão para os próximos dias:</Styled.Title>

      {dataForecastToGraph ? (
        <Styled.ChartWrapper testID="chart-wrapper">
          <LineChart
            data={{
              labels: dataForecastToGraph.labels,
              datasets: [
                {
                  data: dataForecastToGraph.data,
                },
              ],
            }}
            width={Dimensions.get('window').width - 40}
            height={115}
            withInnerLines={false}
            chartConfig={{
              backgroundGradientFrom: theme.colors.background,
              backgroundGradientTo: theme.colors.background,
              decimalPlaces: 0,
              color: () => theme.colors.font,
              labelColor: () => theme.colors.font,
              propsForDots: {
                r: '4',
                strokeWidth: '2',
                stroke: theme.colors.font,
              },
            }}
            bezier
            style={{
              alignSelf: 'center',
              paddingBottom: 20,
              paddingTop: 20,
              borderRadius: 8,
              borderColor: '#cdcdcd',
              borderWidth: 1,
              marginBottom: 20,
            }}
          />
        </Styled.ChartWrapper>
      ) : (
        <></>
      )}
      <FlatList
        style={{width: '100%', paddingHorizontal: 20}}
        data={dataForecast?.list}
        renderItem={({item}) => <RowItem item={item} />}
      />
    </Styled.Container>
  );
};
