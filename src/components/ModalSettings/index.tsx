import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  Container,
  Content,
  Blackout,
  TopClose,
  CloseItem,
  Image,
} from './styles';

export const ModalSettings: React.FC<any> = ({setOpenModalFunction}) => {
  const offset = useSharedValue(900);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: offset.value}],
    opacity: interpolate(offset.value, [0, -280], [1, 0.5]),
  }));

  offset.value = withSpring(20);

  const animatedAndClose = () => {
    offset.value = withTiming(
      1200,
      {
        duration: 800,
      },
      () => {
        'worklet';

        runOnJS(setOpenModalFunction)();
      },
    );
  };

  return (
    <Blackout>
      <Container>
        <Animated.View style={[animatedStyles, styles.animated]}>
          <Content>
            <TopClose onPress={animatedAndClose}>
              <CloseItem />
            </TopClose>
            <Image
              source={{
                uri: 'https://cdn.dribbble.com/users/745861/screenshots/7889509/media/5891d9d48179ca0b3a8fcdf178db8737.png',
              }}
            />
          </Content>
        </Animated.View>
      </Container>
    </Blackout>
  );
};

const styles = StyleSheet.create({
  animated: {
    flex: 1,
  },
});
