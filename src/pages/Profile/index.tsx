import React from 'react';
import {ScrollView, View} from 'react-native';
import TextLabel from '../../components/TextLabel';
import * as S from './style';
import DividerComponent from '../../components/Divider';
import {COLOR_LISTS} from '../../constants/colors';
import TextInputComponent from '../../components/TextInput';
import TextInputEnum from '../../enums/TextInput.enum';
import {useAccountContext} from '../../providers/AccountProvider';
import {ButtonComponent} from '../../components/Buttons';
import DivComponent from '../../components/DivContainer';

export default function ProfileDashBoard() {
  const {activeUserInformation} = useAccountContext();

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
          <DivComponent flexDirection="row" justifyContent="space-between">
            <TextLabel title="Allergies" fontSize={15} />
            <DivComponent
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              width="60">
              <ButtonComponent
                title="View"
                fontSize={15}
                width={23}
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
          <DivComponent flexDirection="row" justifyContent="space-between">
            <TextLabel title="Conditions" fontSize={15} />
            <DivComponent
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              width="60">
              <ButtonComponent
                title="View"
                fontSize={15}
                width={23}
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
                width={23}
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
            width="60">
            <TextLabel title="Do you have Medical Aid?" fontSize={15} />
            <DivComponent
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              width="60">
              <ButtonComponent
                title="View"
                fontSize={15}
                width={23}
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
