import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled.View`
  width: 100%;
  flex: 1;
`;

export const Content = styled.View`
  width: 100%;
  padding: 30px 20px;
  flex: 1;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  border-radius: 50px;
`;

export const TextPrimary = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TextSecondary = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
`;

export const Bio = styled.Text`
  width: 80%;
  text-align: center;
  margin: 10px 0;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
`;
