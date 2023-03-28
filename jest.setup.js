import React from 'react';
import '@testing-library/jest-native/extend-expect';

global.ReanimatedDataMock = {
  now: () => 0,
};

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockedNavigate,
      addListener: jest.fn().mockImplementation((event, callback) => {
        callback();
      }),
    }),
    useRoute: () => ({}),
  };
});

jest.mock('react-native-vector-icons/Feather', () => 'MockedFeather');
jest.mock('react-native-vector-icons/FontAwesome', () => 'MockedFontAwesome');
jest.mock('react-native-geolocation-service', () => 'MockedFontAwesome');

jest.mock('react-native-chart-kit', () => ({
  LineChart: () => <></>,
}));

// jest.mock('react-native-permissions', () =>
//   require('react-native-permissions/mock'),
// );

jest.mock('react-native-permissions', () => {
  const {
    PERMISSIONS,
    RESULTS,
    check,
    request,
  } = require('react-native-permissions/mock');
  return {PERMISSIONS, RESULTS, check, request};
});

jest.mock('react-native-geolocation-service', () => ({
  requestAuthorization: jest.fn(),
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
  clearWatch: jest.fn(),
  stopObserving: jest.fn(),
}));

global.React = React;
