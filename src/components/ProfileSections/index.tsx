import React, {useState} from 'react';
import {Container, ButtonIcon} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
export const ProfileSections: React.FC<any> = ({setListItem}) => {
  const [imageList, setImageList] = useState<boolean>(true);
  const [videoList, setVideoList] = useState<boolean>(false);
  const [markedList, setMarkedList] = useState<boolean>(false);

  const selectItem = (name: string) => {
    if (name === 'image') {
      setListItem(name);
      setVideoList(false);
      setMarkedList(false);
      return setImageList(true);
    }

    if (name === 'video') {
      setListItem(name);
      setImageList(false);
      setMarkedList(false);
      return setVideoList(true);
    }

    if (name === 'marked') {
      setListItem(name);
      setImageList(false);
      setVideoList(false);
      return setMarkedList(true);
    }
  };

  return (
    <Container>
      <ButtonIcon onPress={() => selectItem('image')}>
        <Icon name="grid-on" color={imageList ? '#FFF' : '#666'} size={28} />
      </ButtonIcon>
      <ButtonIcon onPress={() => selectItem('video')}>
        <Icon name="play-arrow" color={videoList ? '#FFF' : '#666'} size={40} />
      </ButtonIcon>
      <ButtonIcon onPress={() => selectItem('marked')}>
        <Icon
          name="settings-display"
          color={markedList ? '#FFF' : '#666'}
          size={30}
        />
      </ButtonIcon>
    </Container>
  );
};
