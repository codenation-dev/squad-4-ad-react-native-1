import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {closeActiveDev, setFavoriteDev} from '../../store/modules/devs/actions';
import Button from '../../components/Button';

import {Text, TouchableOpacity, StatusBar} from 'react-native';

import {
  Container,
  Header,
  Content,
  Followers,
  Avatar,
  Name,
  Bio,
  Repos,
  RepoItem,
  Info,
  Stars,
  Title,
  Author,
  Footer,
} from './styles';

export default function DevDescriptions({modalVisible, closeModal}) {
  const dispatch = useDispatch();

  const dev = useSelector(state => state.devs.activeDev);
  const devs = useSelector(state => state.devs.favoriteDevs);

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const devIsFavorite = devs.find(d => d.login === dev.login);
    if (devIsFavorite) {
      setFavorite(true);
    }
  }, [dev.login, devs]);

  function handleCloseModal() {
    closeModal();
    dispatch(closeActiveDev());
  }

  function handleRemoveDevOnFavorites() {
    setFavorite(false);
  }

  function handleAddDevOnFavorites() {
    setFavorite(true);
  }

  return (
    <Container
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={handleCloseModal}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <Header>
        <Content>
          <Followers>
            <Title>followers</Title>
            {dev.followers && <Text>{dev.followers.totalCount}</Text>}
          </Followers>

          {favorite ? (
            <TouchableOpacity onPress={handleRemoveDevOnFavorites}>
              <Icon name="heart" size={26} color="#ED4420" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleAddDevOnFavorites}>
              <Icon name="heart-outline" size={26} />
            </TouchableOpacity>
          )}
        </Content>

        <Avatar source={{uri: dev.avatarUrl}} />
        <Name>{dev.name}</Name>
        <Text>{dev.login}</Text>
        <Bio>{dev.email}</Bio>
      </Header>
      <Repos
        data={dev.repos}
        keyExtractor={star => String(star.id)}
        renderItem={({item}) => (
          <RepoItem>
            <Info>
              <Title>{item.name}</Title>
              <Title>tecnologias</Title>
              <Author>{item.language}</Author>
            </Info>
            <Stars>
              <Title>stars</Title>
              <Text>{item.stargazers_count}</Text>
            </Stars>
          </RepoItem>
        )}
      />
      <Footer>
        <Button onPress={handleCloseModal}>Fechar descrição</Button>
      </Footer>
    </Container>
  );
}
