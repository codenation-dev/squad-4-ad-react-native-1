import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {Container, Text} from './styles';
export default function Button({children, loading, onPress, ...rest}) {
  return (
    <Container onPress={onPress} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  loading: false,
};
