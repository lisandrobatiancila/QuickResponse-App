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
import {Formik} from 'formik';
import {Modal, PaperProvider, Portal, Switch} from 'react-native-paper';
import AddNewAllergies from './AddAllergies';
import {QRModalComponent} from '../../components/Modal';
import { APP_HEIGHT, APP_WIDTH } from '../../constants/dimensions';
import { formatPasswordDisplay } from '../../utils/format-display';

export default function ProfileDashBoard(props: any) {
  const {activeUserInformation} = useAccountContext();
  const [img, setImage] = useState<any>(
    require('../../assets/QRApp-img1.jpeg'),
  );
  const initialValues = {
    firstname: activeUserInformation?.account?.firstname,
    middlename: activeUserInformation?.account?.middlename,
    lastname: activeUserInformation?.account?.lastname,
    email: activeUserInformation?.credentials?.loginEmail,
    mobilenumber: activeUserInformation?.account?.mobilenumber,
  };
  const [isRemoteFile, setIsRemoteFile] = useState<boolean>(false);
  const [switchMedicalAid, setSwitchMedicalAid] = useState<boolean>(false);
  const [toggledModal, setToggledModal] = useState<boolean>(false);
  const [activeModalView, setActiveModalView] = useState<string>('');

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
        .doc(activeUserInformation?.account?.fbID)
        .update({'account.profile': await fbRef.getDownloadURL()});

      ToastAndroid.show('Profile was uploaded', ToastAndroid.SHORT);
    } catch (error: any) {
      Alert.alert('Something went wrong', error?.message);
    }
  };

  const onEditPersonalInformation = () => {
    props.navigation.navigate('Edit Profile')
  }

  const onToggledMedicalAid = () => {
    setSwitchMedicalAid(!switchMedicalAid);
  };

  const updateProfileBasicInformation = (values: any) => {
    console.log(values);

    // firestore().collection('MedicalInformation').add({

    // })
  };

  const onPressAddNewAllergies = () => {
    setActiveModalView('add-new-alergies');
    setToggledModal(true);
  };

  const closeModal = () => {
    setToggledModal(false);
  }

  return (
    <PaperProvider>
      <ScrollView>
        <QRModalComponent visibility={toggledModal} width={100} height={100} contentWidth={APP_WIDTH / 2} contentHeight={APP_HEIGHT / 2} contentPadding={10} backgroundColor={COLOR_LISTS.GREY_300} closeModal={closeModal}>
          <AddNewAllergies />
        </QRModalComponent>
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
                <S.ProfileBadgeContainer
                  borderColor={COLOR_LISTS.RED_500}
                  width="90">
                  <TextLabel title="Firstname" fontSize={15} />
                  <DividerComponent margin="3px 0 0 0"/>
                  <TextInputComponent
                    value={activeUserInformation?.account?.firstname}
                    textMode={TextInputEnum.OUTLINED}
                    disabled
                  />
                  <DividerComponent margin="3px 0 0 0"/>
                    <TextLabel title="Middlename" fontSize={15} />
                  <DividerComponent margin="3px 0 0 0"/>
                  <TextInputComponent
                    value={activeUserInformation?.account?.middlename}
                    textMode={TextInputEnum.OUTLINED}
                    disabled
                  />
                  <DividerComponent margin="3px 0 0 0"/>
                    <TextLabel title="Lastname" fontSize={15} />
                  <DividerComponent margin="3px 0 0 0"/>
                  <TextInputComponent
                    value={activeUserInformation?.account?.lastname}
                    textMode={TextInputEnum.OUTLINED}
                    disabled
                  />
                  <DividerComponent margin="3px 0 0 0"/>
                    <TextLabel title="Email" fontSize={15} />
                  <DividerComponent margin="3px 0 0 0"/>
                  <TextInputComponent
                    value={activeUserInformation?.credentials?.loginEmail}
                    textMode={TextInputEnum.OUTLINED}
                    disabled
                  />
                  <DividerComponent margin="3px 0 0 0"/>
                    <TextLabel title="Password" fontSize={15} />
                  <DividerComponent margin="3px 0 0 0"/>
                  <TextInputComponent
                    value={formatPasswordDisplay(activeUserInformation?.credentials?.loginPassword)}
                    textMode={TextInputEnum.OUTLINED}
                    disabled
                  />
                  <DividerComponent margin="3px 0 0 0"/>
                    <TextLabel title="Cellphone Number" fontSize={15} />
                  <DividerComponent margin="3px 0 0 0"/>
                  <TextInputComponent
                    value={activeUserInformation?.account?.mobilenumber}
                    textMode={TextInputEnum.OUTLINED}
                    disabled
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
                <S.ProfileBadgeContainer
                  borderColor={COLOR_LISTS.RED_400}
                  width="90">
                  <DivComponent
                    flexDirection="row"
                    justifyContent="space-between">
                    <TextLabel title="Allergies" fontSize={15} />
                    <DivComponent
                      display="flex"
                      flexDirection="row"
                      justifyContent="flex-end"
                      width="60">
                      <ButtonComponent
                        title="View"
                        fontSize={15}
                        width={20}
                        textColor={COLOR_LISTS.RED_400}
                      />
                      <TextLabel title="/" textColor={COLOR_LISTS.RED_400} />
                      <ButtonComponent
                        title="Add"
                        fontSize={15}
                        width={23}
                        textColor={COLOR_LISTS.RED_400}
                        onPress={onPressAddNewAllergies}
                      />
                    </DivComponent>
                  </DivComponent>
                  <DivComponent
                    flexDirection="row"
                    justifyContent="space-between">
                    <TextLabel title="Conditions" fontSize={15} />
                    <DivComponent
                      display="flex"
                      flexDirection="row"
                      justifyContent="flex-end"
                      width="60">
                      <ButtonComponent
                        title="View"
                        fontSize={15}
                        width={20}
                        textColor={COLOR_LISTS.RED_400}
                      />
                      <TextLabel title="/" textColor={COLOR_LISTS.RED_400} />
                      <ButtonComponent
                        title="Add"
                        fontSize={15}
                        width={23}
                        textColor={COLOR_LISTS.RED_400}
                      />
                    </DivComponent>
                  </DivComponent>
                  <DivComponent
                    flexDirection="row"
                    justifyContent="space-between"
                    width="100">
                    <TextLabel title="Blood Type" fontSize={15} />
                    <DivComponent
                      display="flex"
                      flexDirection="row"
                      justifyContent="flex-end"
                      width="60">
                      <ButtonComponent
                        title="View"
                        fontSize={15}
                        width={20}
                        textColor={COLOR_LISTS.RED_400}
                      />
                      <TextLabel title="/" textColor={COLOR_LISTS.RED_400} />
                      <ButtonComponent
                        title="Add"
                        fontSize={15}
                        width={23}
                        textColor={COLOR_LISTS.RED_400}
                      />
                    </DivComponent>
                  </DivComponent>
                  <DivComponent
                    flexDirection="row"
                    justifyContent="space-between"
                    width="100">
                    <TextLabel title="Do you have Medical Aid?" fontSize={15} />
                    <Switch
                      value={switchMedicalAid}
                      onValueChange={onToggledMedicalAid}
                    />
                  </DivComponent>
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
                <S.ProfileBadgeContainer
                  borderColor={COLOR_LISTS.RED_400}
                  width="90">
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
                  title="Edit Personal Information"
                  textAlign="center"
                  padding="10"
                  fontSize={18}
                  textColor={COLOR_LISTS.WHITE}
                  width={80}
                  onPress={onEditPersonalInformation}
                />
        </View>
        <DividerComponent margin="10px 0 0 0" />
      </ScrollView>
    </PaperProvider>
  );
}
