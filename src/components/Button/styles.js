import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  align-items: center;
  justify-content: center;
  margin-top: ${props => (props.marginTop ? `${props.marginTop}px` : '5px')};

  background: ${props => (props.background ? props.background : '#ED4420')};
  border-radius: 4px;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
