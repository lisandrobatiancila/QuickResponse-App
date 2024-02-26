import React, {View, ScrollView, Alert, ToastAndroid} from 'react-native';
import TextComponent from '../../components/TextLabel';
import ImageComponent from '../../components/ImageContainer';
import {APP_HEIGHT, APP_WIDTH} from '../../constants/dimensions';
import {ButtonComponent} from '../../components/Buttons';
import TextInputComponent from '../../components/TextInput';
import TextInputEnum from '../../enums/TextInput.enum';
import DivComponent from '../../components/DivContainer';
import TextLabel from '../../components/TextLabel';
import {LoginDTO, UserDTO} from '../../types/User.type';
import DividerComponent from '../../components/Divider';
import {COLOR_LISTS} from '../../constants/colors';
import {Formik} from 'formik';
import firestore, { Filter } from '@react-native-firebase/firestore';
import { useAccountContext } from '../../providers/AccountProvider';
import { sha256 } from 'react-native-sha256';

export default function Login(props: any) {
  const initValues: LoginDTO = {
    loginEmail: '',
    loginPassword: '',
  };
  const {setActiveUserInformationFunction} = useAccountContext();

  const {navigation} = props;

  const onSignup = () => {
    navigation.navigate('Register');
  };

  const onLoginUser = async (values: LoginDTO) => {
    try {
      const {loginEmail, loginPassword} = values;
      const results = await firestore().collection('Users').where('email', '==', loginEmail).get();
    
      if (results.docs.length === 0) {
        Alert.alert('Message', 'Invalid credentials');
        return;
      }
      const activeUser: UserDTO = results.docs[0].data() as UserDTO;
      const {email, password, isActive, account} = activeUser;
      
      const loginPassSha256 = await sha256(loginPassword);
      
      if (loginPassSha256 !== password) {
        Alert.alert('Message', 'Invalid credentials');
        return;
      }

      const {firstname, middlename, lastname, mobilenumber, address} = account;
      setActiveUserInformationFunction({
        account: {
          firstname, middlename, lastname, mobilenumber, address
        },
        credentials: {
          loginEmail: email,
          loginPassword: password,
        }
      });
      
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
            onSubmit={(values) => {
              onLoginUser(values);
            }}>
            {({handleSubmit, handleChange, values}) => (
              <>
                <DivComponent padding="10">
                  <DividerComponent margin="20px 0 0 0" />
                  <TextInputComponent
                    label="Email"
                    borderRadius={10}
                    textMode={TextInputEnum.OUTLINED}
                    value={values.loginEmail}
                    keyboardType={'email-address'}
                    onChangeText={handleChange('loginEmail')}
                  />
                  <TextInputComponent
                    label="Password"
                    borderRadius={10}
                    textMode={TextInputEnum.OUTLINED}
                    value={values.loginPassword}
                    secureTextEntry
                    onChangeText={handleChange('loginPassword')}
                  />
                  <ButtonComponent
                    alignSelf="center"
                    borderRadius="10"
                    fontSize={18}
                    title="Log in"
                    textAlign="center"
                    textColor={COLOR_LISTS.WHITE}
                    backgroundColor={COLOR_LISTS.RED_400}
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
