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
import {COLOR_LISTS} from '../../constants/colors';
import {Formik} from 'formik';
import { useAccountContext } from '../../providers/AccountProvider';

export default function Login(props: any) {
  const {sendLoginQRUser} = useUserCredentials();
  const {setActiveUserInformation} = useAccountContext();

  const initValues: LoginDTO = {
    email: '',
    password: '',
  };

  const {navigation} = props;

  const onSignup = () => {
    navigation.navigate('Register');
  };

  const onLoginUser = async (values: LoginDTO) => {
    try {
      const result = await sendLoginQRUser(values);
      if (!result) {
        ToastAndroid.show('Invalid credentials', ToastAndroid.SHORT);
        return;
      }
      navigation.navigate('Dashboard');
    } catch (error: any) {
      Alert.alert('Something went wrong', error?.message);
    }
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
            textColor={COLOR_LISTS.GREY_500}
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
              textColor={COLOR_LISTS.GREY_400}
            />
            <ButtonComponent
              title="Sign up"
              textColor={COLOR_LISTS.BLUE_500}
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
