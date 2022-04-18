import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 65%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const Content = styled.View`
  flex: 1;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  height: 900px;
  background: #fff;
`;

export const Blackout = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000055;
`;

export const TopClose = styled.TouchableOpacity`
  width: 100%;
  height: 20px;
  align-items: center;
  justify-content: center;
`;

export const CloseItem = styled.View`
  width: 100px;
  height: 7px;
  background: grey;
  border-radius: 8px;
`;

export const Image = styled.Image`
  flex: 1;
`;
