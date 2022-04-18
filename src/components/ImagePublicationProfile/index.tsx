import React from 'react';
import {Container, Image} from './styles';

export const ImagePublicationProfile: React.FC<any> = ({item, index}) => {
  return (
    <Container
      activeOpacity={0.9}
      onPress={() => console.log('abrir foto', index)}>
      <Image source={{uri: item}} />
    </Container>
  );
};
