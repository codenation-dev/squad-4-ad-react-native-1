import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 130px;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin-right: 20px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-top: 8px;
`;
