import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {CLIENT_ID} from '../../config/config';

import Icon from 'react-native-vector-icons/FontAwesome';

import logo from '../../assets/images/logo.png';

import {signInRequest} from '../../store/modules/auth/actions';

import {Image, Platform, Linking, ActivityIndicator} from 'react-native';

import {LogoContainer, BtnContent, BtnLoginText, BtnLogin} from './styles';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const [callbackCode, setCallbackCode] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => handleOpenURL(url));
    } else {
      Linking.addEventListener('url', ({url}) => handleOpenURL(url));
    }

    Linking.removeEventListener('url');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (callbackCode) {
      dispatch(signInRequest(callbackCode, navigation));
      setCallbackCode(null);
    }
    setLoading(false);
  }, [callbackCode, dispatch, navigation]);

  function handleOpenURL(url) {
    if (url) {
      const [, code] = url.split('code=');
      setCallbackCode(code);
    }
  }

  function handleSingin() {
    setLoading(true);
    Linking.openURL(
      `https://github.com/login/oauth/authorize?scope=user,email&client_id=${CLIENT_ID}`,
    );
  }

  return (
    <LinearGradient colors={['#ED4420', '#EE2D58']} style={{flex: 1}}>
      <LogoContainer>
        <Image source={logo} />

        <BtnLogin onPress={handleSingin}>
          <BtnContent>
            <Icon name="github" size={30} color="#FFF" />
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <BtnLoginText>Login with Github</BtnLoginText>
            )}
          </BtnContent>
        </BtnLogin>
      </LogoContainer>
    </LinearGradient>
  );
}
