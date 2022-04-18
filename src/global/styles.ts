import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #212121;
`;

export const HeaderContent = styled.View`
  width: 100%;
  padding: 20px;
`;

export const BodyContent = styled.View`
  width: 100%;
  flex-direction: row;
  padding-bottom: 262px;
`;

export const Header = styled.View`
  width: 100%;
`;

export const Profile = styled.View`
  width: 100%;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileImageContainer = styled.TouchableOpacity``;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #fff;
`;

export const ProfileTextContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ProfileText = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const ProfileTextNumber = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background: #000;
  padding: 8px;
  border-radius: 5px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;

export const PublicationList = styled.FlatList`
  width: 100%;
`;
