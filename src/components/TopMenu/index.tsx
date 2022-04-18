import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, UserText, ContainerMenu} from './styles';

export const TopMenu: React.FC<any> = ({openModalFunction}) => {
  return (
    <Container>
      <UserText>mt03_gol_taylor</UserText>
      <ContainerMenu onPress={openModalFunction}>
        <Icon name="menu" color={'#FFF'} size={25} />
      </ContainerMenu>
    </Container>
  );
};
