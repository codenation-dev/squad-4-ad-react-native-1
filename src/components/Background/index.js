import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

export default styled(LinearGradient).attrs({
  colors: ['#ED4420', '#EE2D58'],
})`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
