import React from 'react';
import {View} from 'react-native';
import {CombineProviders} from '../../../../src/context';
import {render} from '@testing-library/react-native';

describe('Combine providers', () => {
  it('render combine providers', () => {
    const Children = () => <View testID="children"></View>;

    const providers = [Children] as React.FC[];
    const AppContextProvider = CombineProviders(providers);

    const {getByTestId} = render(<AppContextProvider />);

    expect(AppContextProvider).toBeDefined();
    expect(getByTestId('children')).toBeDefined();
  });
});
