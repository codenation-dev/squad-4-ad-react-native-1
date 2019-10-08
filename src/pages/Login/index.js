import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {CLIENT_ID} from '../../config/config';

import Icon from 'react-native-vector-icons/FontAwesome';

import logo from '../../assets/images/logo.png';

import {signInRequest} from '../../store/modules/auth/actions';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  Linking,
  ActivityIndicator,
} from 'react-native';

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
      <View style={styles.logoContainer}>
        <Image source={logo} />

        <TouchableOpacity style={styles.btnLogin} onPress={handleSingin}>
          <View style={styles.btnContent}>
            <Icon name="github" size={30} color="#FFF" />
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.btnLoginText}>Login with Github</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  btnLogin: {
    width: '80%',
    height: 45,
    borderRadius: 5,
    backgroundColor: '#1B1F23',
    justifyContent: 'center',
    marginTop: 35,
  },
  btnLoginText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: 10,
  },
  btnContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
