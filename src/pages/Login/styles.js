import styled from 'styled-components/native';

export const Container = styled.View``;

export const LogoContainer = styled.View`
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`;

export const BtnLogin = styled.TouchableOpacity`
  width: 80%;
  height: 45;
  border-radius: 5;
  background-color: #1b1f23;
  justify-content: center;
  margin-top: 35;
`;

export const BtnLoginText = styled.Text`
  font-size: 12;
  text-align: center;
  color: #ffffff;
  margin-left: 10;
`;

export const BtnContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
