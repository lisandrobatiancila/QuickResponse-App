import React from 'react';
import {Formik} from 'formik';
import DivComponent from '../../../components/DivContainer';
import TextInputComponent from '../../../components/TextInput';
import TextInputEnum from '../../../enums/TextInput.enum';
import {useAccountContext} from '../../../providers/AccountProvider';
import * as S from './style';
import {ButtonComponent} from '../../../components/Buttons';
import {COLOR_LISTS} from '../../../constants/colors';
import DividerComponent from '../../../components/Divider';
import {formatPasswordDisplay} from '../../../utils/format-display';
import {UpdateProfileDTO} from '../../../types/User.type';
import {useUserCredentials} from '../../../hooks/useUserHooks';

export default function EditPersonalInformationComponent() {
  const {activeUserInformation} = useAccountContext();
  const {sendUpdateInfromationOfQRUser} = useUserCredentials();

  const initValues = {
    firstname: activeUserInformation?.account?.firstname,
    middlename: activeUserInformation?.account?.middlename,
    lastname: activeUserInformation?.account?.lastname,
    mobilenumber: activeUserInformation?.account?.mobilenumber,
    password: activeUserInformation?.credentials?.loginPassword,
  };

  const onUpdateUserPersonalInformation = (values: UpdateProfileDTO) => {
    sendUpdateInfromationOfQRUser(
      activeUserInformation?.account?.fbID ?? '',
      values,
    );
  };

  return (
    <S.PersonalInformationContainer>
      <DivComponent padding="10">
        <Formik
          initialValues={initValues}
          onSubmit={values => {
            onUpdateUserPersonalInformation(values as UpdateProfileDTO);
          }}>
          {({handleSubmit, handleChange, values}) => (
            <>
              <DividerComponent margin="10px 0 0 0" />
              <TextInputComponent
                label="Firstname"
                textMode={TextInputEnum.OUTLINED}
                value={values.firstname}
                onChangeText={handleChange('firstname')}
              />
              <DividerComponent margin="10px 0 0 0" />
              <TextInputComponent
                label="Middlename"
                textMode={TextInputEnum.OUTLINED}
                value={values.middlename}
                onChangeText={handleChange('middlename')}
              />
              <DividerComponent margin="10px 0 0 0" />
              <TextInputComponent
                label="Lastname"
                textMode={TextInputEnum.OUTLINED}
                value={values.lastname}
                onChangeText={handleChange('lastname')}
              />
              <DividerComponent margin="10px 0 0 0" />
              <TextInputComponent
                label="Mobilenumber"
                textMode={TextInputEnum.OUTLINED}
                value={values.mobilenumber}
                onChangeText={handleChange('mobilenumber')}
              />
              <DividerComponent margin="10px 0 0 0" />
              <TextInputComponent
                label="Pass****"
                textMode={TextInputEnum.OUTLINED}
                onChangeText={handleChange('password')}
                secureTextEntry
              />
              <DividerComponent margin="10px 0 0 0" />
              <ButtonComponent
                title="Save"
                backgroundColor={COLOR_LISTS.RED_500}
                width={100}
                borderRadius="5"
                textAlign="center"
                padding="10"
                textColor={COLOR_LISTS.WHITE}
                fontSize={20}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </DivComponent>
    </S.PersonalInformationContainer>
  );
}
