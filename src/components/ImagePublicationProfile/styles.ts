import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
  width: ${width / 3 - 1}px;
  height: 100px;
  margin-right: 1px;
  margin-bottom: 1px;
`;

export const Image = styled.Image`
  flex: 1;
`;
