import React, {useEffect} from 'react';
import {Dimensions, FlatList} from 'react-native';
import {RowItem} from '../../components';

import * as Styled from './styles';
import useWeatherViewModel from './view.model';

import {LineChart} from 'react-native-chart-kit';

export const Forecast: React.FC = () => {
  const {isMorning, dataForecast, dataForecastToGraph, fetchData} =
    useWeatherViewModel();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Styled.Container>
      {dataForecastToGraph ? (
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
            backgroundGradientFrom: '#2f3543',
            backgroundGradientTo: '#2f3543',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(230, 230, 230, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(230, 230, 230, ${opacity})`,
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: '#fff',
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
