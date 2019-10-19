import styled from 'styled-components/native';

export const Container = styled.Modal`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  margin-top: 20px;
  border-color: #eee;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Followers = styled.View``;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const Repos = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
  padding-right: 15px;
  padding-left: 15px;
`;

export const RepoItem = styled.View`
  height: 100px;
  flex-direction: row;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const OwnerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Stars = styled.View``;

export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;

export const Footer = styled.View`
  align-items: center;
  padding: 10px;
`;
