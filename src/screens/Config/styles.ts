import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
  padding: 50px 20px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${({theme}) => theme.colors.font};
`;

export const Label = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colors.font};
`;

export const WrapperSelection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Separation = styled.View`
  width: 100%;
  height: 1px;
  margin: 20px 0;
  background: #cdcdcd;
`;
