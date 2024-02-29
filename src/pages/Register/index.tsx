/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ButtonComponent} from '../../components/Buttons';
import {Alert, Dimensions, ScrollView, ToastAndroid, View} from 'react-native';
import TextInputComponent from '../../components/TextInput';
import TextInputEnum from '../../enums/TextInput.enum';
import ImageComponent from '../../components/ImageContainer';
import DivComponent from '../../components/DivContainer';
import {Formik} from 'formik';
import { COLOR_LISTS } from '../../constants/colors';
import firestore from '@react-native-firebase/firestore';
import { sha256 } from 'react-native-sha256';
import { RegistrationDTO } from '../../types/Registration.type';
import { useUserCredentials } from '../../hooks/useUserHooks';

export default function Registration() {
  const initValues: RegistrationDTO = {
    profile: '',
    firstname: '',
    middlename: '',
    lastname: '',
    mobilenumber: '',
    address: '',
    email: '',
    password: '',
    isActive: true,
  };
  const {sendRegisterQRUser} = useUserCredentials();

  const onRegister = async (values: RegistrationDTO) => {    
    try{
      const registrationResponse = await sendRegisterQRUser(values);      
      ToastAndroid.show('Your registration was successful!', ToastAndroid.SHORT);
    }
    catch(error: any) {
      Alert.alert('Something went wrong', error?.message);
    }
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
                  value={values.middlename}
                  onChangeText={handleChange('middlename')}
                />
                <TextInputComponent
                  label="Lastname"
                  borderRadius={10}
                  textMode={TextInputEnum.OUTLINED}
                  value={values.lastname}
                  onChangeText={handleChange('lastname')}
                />
                <TextInputComponent
                  label="Contact No."
                  borderRadius={10}
                  textMode={TextInputEnum.OUTLINED}
                  value={values.mobilenumber}
                  onChangeText={handleChange('mobilenumber')}
                  keyboardType="phone-pad"
                />
                <TextInputComponent
                  label="Address"
                  borderRadius={10}
                  textMode={TextInputEnum.OUTLINED}
                  value={values.address}
                  onChangeText={handleChange('address')}
                />
                <TextInputComponent
                  label="Email"
                  borderRadius={10}
                  textMode={TextInputEnum.OUTLINED}
                  onChangeText={handleChange('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                <TextInputComponent
                  label="Password"
                  borderRadius={10}
                  textMode={TextInputEnum.OUTLINED}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry
                />
                <ButtonComponent
                  alignSelf="center"
                  backgroundColor={COLOR_LISTS.RED_400}
                  borderRadius="10"
                  title="Sign up"
                  textAlign="center"
                  textColor={COLOR_LISTS.WHITE}
                  margin="30px 0 0 0"
                  padding="15"
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
