import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, ToastAndroid, View} from 'react-native';
import TextLabel from '../../components/TextLabel';
import * as S from './style';
import DividerComponent from '../../components/Divider';
import {COLOR_LISTS} from '../../constants/colors';
import TextInputComponent from '../../components/TextInput';
import TextInputEnum from '../../enums/TextInput.enum';
import {useAccountContext} from '../../providers/AccountProvider';
import {ButtonComponent} from '../../components/Buttons';
import storage from '@react-native-firebase/storage';
import DivComponent from '../../components/DivContainer';
import DocumentPicker from 'react-native-document-picker';
import firestore from '@react-native-firebase/firestore';
import ImageComponent from '../../components/ImageContainer';

export default function ProfileDashBoard() {
  const {activeUserInformation} = useAccountContext();
  const [img, setImage] = useState<any>(
    require('../../assets/QRApp-img1.jpeg'),
  );
  const [isRemoteFile, setIsRemoteFile] = useState<boolean>(false);

  useEffect(() => {
    if (!isRemoteFile) {
      setImage(require('../../assets/QRApp-img1.jpeg'));
    }
  }, []);

  const onSelectImageFromGallery = async () => {
    try {
      const fbRef = storage().ref(`images-${Date.now().toString()}/`);
      const docs = (await DocumentPicker.pick({
        type: DocumentPicker.types.images,
        allowMultiSelection: false,
      })) as unknown as any;

      await fbRef.putFile(docs[0].uri);

      await firestore()
        .collection('Users')
        .doc('dtGbWr3YWLpqIaJ24bZi')
        .update({'account.profile': await fbRef.getDownloadURL()});

      ToastAndroid.show('Profile was uploaded', ToastAndroid.SHORT);
    } catch (error: any) {
      Alert.alert('Something went wrong', error?.message);
    }
  };

  return (
    <ScrollView>
      <View>
        <DividerComponent margin="10px 0 0 0" />
        <S.ProfileBadgeContainer
          backgroundColor={COLOR_LISTS.RED_400}
          width="50">
          <TextLabel
            title="Profile Information"
            textColor={COLOR_LISTS.WHITE}
            fontSize={15}
            textAlign="center"
          />
        </S.ProfileBadgeContainer>
        <DivComponent
          display="flex"
          justifyContent="center"
          flexDirection="row">
          <ImageComponent
            imageSrc={img}
            isRemoteFile={isRemoteFile}
            width={80}
            height={80}
            borderRadius={100}
          />
          <S.UploadFileContainer onPress={onSelectImageFromGallery}>
            <TextLabel
              title="+"
              fontSize={20}
              textColor={COLOR_LISTS.WHITE}
              textAlign="center"
            />
          </S.UploadFileContainer>
        </DivComponent>
        <DividerComponent margin="10px 0 0 0" />
        <S.ProfileBadgeContainer borderColor={COLOR_LISTS.RED_500} width="90">
          <TextLabel title="Firstname" fontSize={15} />
          <TextInputComponent
            value={activeUserInformation?.account?.firstname}
            textMode={TextInputEnum.OUTLINED}
          />
          <TextLabel title="Firstname" fontSize={15} />
          <TextInputComponent
            value={activeUserInformation?.account?.middlename}
            textMode={TextInputEnum.OUTLINED}
          />
          <TextLabel title="Lastname" fontSize={15} />
          <TextInputComponent
            value={activeUserInformation?.account?.lastname}
            textMode={TextInputEnum.OUTLINED}
          />
          <TextLabel title="Email" fontSize={15} />
          <TextInputComponent
            value={activeUserInformation?.credentials?.loginEmail}
            textMode={TextInputEnum.OUTLINED}
          />
          <TextLabel title="Cellphone Number" fontSize={15} />
          <TextInputComponent
            value={activeUserInformation?.account?.mobilenumber}
            textMode={TextInputEnum.OUTLINED}
          />
        </S.ProfileBadgeContainer>
        <DividerComponent margin="10px 0 0 0" />
        <S.ProfileBadgeContainer
          backgroundColor={COLOR_LISTS.RED_400}
          width="50">
          <TextLabel
            title="Medical Information"
            textColor={COLOR_LISTS.WHITE}
            fontSize={15}
            textAlign="center"
          />
        </S.ProfileBadgeContainer>
        <DividerComponent margin="10px 0 0 0" />
        <S.ProfileBadgeContainer borderColor={COLOR_LISTS.RED_400} width="90">
          <TextLabel title="Allergies" fontSize={15} />
          <TextLabel title="Conditions" fontSize={15} />
          <TextLabel title="Blood Type" fontSize={15} />
          <TextLabel title="Do you have Medical Aid?" fontSize={15} />
        </S.ProfileBadgeContainer>
        <DividerComponent margin="10px 0 0 0" />
        <S.ProfileBadgeContainer
          backgroundColor={COLOR_LISTS.RED_400}
          width="50">
          <TextLabel
            title="Emergency Contacts"
            textColor={COLOR_LISTS.WHITE}
            fontSize={15}
            textAlign="center"
          />
        </S.ProfileBadgeContainer>
        <DividerComponent margin="10px 0 0 0" />
        <S.ProfileBadgeContainer borderColor={COLOR_LISTS.RED_400} width="90">
          <TextLabel title="Contact" fontSize={15} />
          <TextLabel title="Contact" fontSize={15} />
          <TextLabel title="Contact" fontSize={15} />
          <TextLabel title="Contact" fontSize={15} />
        </S.ProfileBadgeContainer>
        <DividerComponent margin="10px 0 0 0" />
        <ButtonComponent
          alignSelf="center"
          backgroundColor={COLOR_LISTS.RED_400}
          borderRadius="10"
          title="Save"
          textAlign="center"
          padding="10"
          fontSize={18}
          textColor={COLOR_LISTS.WHITE}
          width={80}
        />
      </View>
      <DividerComponent margin="10px 0 0 0" />
    </ScrollView>
  );
}
