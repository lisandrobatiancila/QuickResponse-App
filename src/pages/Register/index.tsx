/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ButtonComponent} from '../../components/Buttons';
import {Alert, Dimensions, ScrollView, ToastAndroid, View} from 'react-native';
import TextInputComponent from '../../components/TextInput';
import TextInputEnum from '../../enums/TextInput.enum';
import ImageComponent from '../../components/ImageContainer';
import DivComponent from '../../components/DivContainer';
import {useUserCredentials} from '../../hooks/useUserHooks';
import {RegistrationDTO} from '../../types/Registration.type';
import {Formik} from 'formik';
import { COLOR_LISTS } from '../../constants/colors';

export default function Registration() {
  const {sendRegisterQRUser} = useUserCredentials();
  const initValues: RegistrationDTO = {
    firstname: '',
    middlename: '',
    lastname: '',
    mobilenumber: '',
    address: '',
    email: '',
    password: '',
    isActive: 1,
  };

  const onRegister = (values: RegistrationDTO) => {
    sendRegisterQRUser(values)
      .then(() => {
        ToastAndroid.show('New user was created', ToastAndroid.SHORT);
      })
      .catch((error: any) => {
        Alert.alert('Something went wrong', error?.message);
      });
  };

  return (
    <>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            height: Dimensions.get('window').height - 100,
            padding: 10,
          }}>
          <DivComponent alignItems="center">
            <ImageComponent
              imageSrc={require('../../assets/QRApp-img3.jpeg')}
              width={200}
              height={100}
            />
          </DivComponent>
          <Formik
            initialValues={initValues}
            onSubmit={(values, {resetForm}) => {
              resetForm();
              onRegister(values);
            }}>
            {({handleChange, handleSubmit, values}) => (
              <>
                <TextInputComponent
                  label="Firstname"
                  borderRadius={10}
                  textMode={TextInputEnum.OUTLINED}
                  value={values.firstname}
                  onChangeText={handleChange('firstname')}
                />
                <TextInputComponent
                  label="Middlename"
                  borderRadius={10}
                  textMode={TextInputEnum.OUTLINED}
                  onChangeText={handleChange('middlename')}
                />
                <TextInputComponent
                  label="Lastname"
                  borderRadius={10}
                  textMode={TextInputEnum.OUTLINED}
                  onChangeText={handleChange('lastname')}
                />
                <TextInputComponent
                  label="Contact No."
                  borderRadius={10}
                  textMode={TextInputEnum.OUTLINED}
                  onChangeText={handleChange('mobilenumber')}
                  keyboardType="phone-pad"
                />
                <TextInputComponent
                  label="Address"
                  borderRadius={10}
                  textMode={TextInputEnum.OUTLINED}
                  onChangeText={handleChange('address')}
                />
                <TextInputComponent
                  label="Email"
                  borderRadius={10}
                  textMode={TextInputEnum.OUTLINED}
                  onChangeText={handleChange('email')}
                  keyboardType="email-address"
                />
                <TextInputComponent
                  label="Password"
                  borderRadius={10}
                  textMode={TextInputEnum.OUTLINED}
                  onChangeText={handleChange('password')}
                  secureTextEntry
                />
                <ButtonComponent
                  alignSelf="center"
                  backgroundColor="#D11042"
                  borderRadius="10"
                  title="Sign up"
                  textAlign="center"
                  textColor={COLOR_LISTS.WHITE}
                  margin="30px 0 0 0"
                  padding="10"
                  fontSize={18}
                  width={60}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </>
  );
}
