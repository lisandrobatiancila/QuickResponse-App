import React, {View, ScrollView, Alert, ToastAndroid} from 'react-native';
import TextComponent from '../../components/TextLabel';
import ImageComponent from '../../components/ImageContainer';
import {APP_HEIGHT, APP_WIDTH} from '../../constants/dimensions';
import {ButtonComponent} from '../../components/Buttons';
import TextInputComponent from '../../components/TextInput';
import TextInputEnum from '../../enums/TextInput.enum';
import DivComponent from '../../components/DivContainer';
import TextLabel from '../../components/TextLabel';
import {LoginDTO} from '../../types/User.type';
import {useUserCredentials} from '../../hooks/useUserHooks';
import DividerComponent from '../../components/Divider';
import {Formik} from 'formik';

export default function Login(props: any) {
  const {sendLoginQRUser} = useUserCredentials();

  const initValues: LoginDTO = {
    email: '',
    password: '',
  };

  const {navigation} = props;

  const onSignup = () => {
    navigation.navigate('Register');
  };

  const onLoginUser = (values: LoginDTO) => {
    sendLoginQRUser(values)
      .then((response: any) => {
        if (response.length === 0) {
          ToastAndroid.show('Invalid credentials', ToastAndroid.LONG);
          return;
        }
        navigation.navigate('Dashboard');
      })
      .catch((error: any) => {
        Alert.alert('Something went wrong', error?.message);
      });
  };

  return (
    <ScrollView>
      <View>
        <ImageComponent
          imageSrc={require('../../assets/QRApp-img2.jpeg')}
          width={APP_WIDTH}
          height={200}
          borderRadius={50}
        />
        <View style={{height: APP_HEIGHT / 2}}>
          <DividerComponent margin="40px 0 0 0" />
          <TextComponent
            title="Log In Now"
            fontWeight="bold"
            fontSize={32}
            textAlign="center"
          />
          <Formik
            initialValues={initValues}
            onSubmit={values => onLoginUser(values)}>
            {({handleSubmit, handleChange, values}) => (
              <>
                <DivComponent padding="10">
                  <DividerComponent margin="20px 0 0 0" />
                  <TextInputComponent
                    label="Email"
                    borderRadius={10}
                    textMode={TextInputEnum.OUTLINED}
                    value={values.email}
                    keyboardType={'email-address'}
                    onChangeText={handleChange('email')}
                  />
                  <TextInputComponent
                    label="Password"
                    borderRadius={10}
                    textMode={TextInputEnum.OUTLINED}
                    value={values.password}
                    secureTextEntry
                    onChangeText={handleChange('password')}
                  />
                  <ButtonComponent
                    alignSelf="center"
                    borderRadius="10"
                    fontSize={18}
                    title="Log in"
                    textAlign="center"
                    backgroundColor="#D11042"
                    margin="40px 0 0 0"
                    padding="15"
                    onPress={handleSubmit}
                  />
                </DivComponent>
              </>
            )}
          </Formik>
          <DividerComponent margin="5px 0 0 0" />
          <DivComponent flexDirection="row" justifyContent="center">
            <TextLabel
              title="Don't have an account? "
              textAlign="center"
              fontSize={15}
            />
            <ButtonComponent
              title="Sign up"
              textColor="#0000EE"
              fontWeight="bold"
              fontSize={15}
              textAlign="center"
              width={15}
              onPress={onSignup}
            />
          </DivComponent>
        </View>
      </View>
    </ScrollView>
  );
}
