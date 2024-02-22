import React, {View, ScrollView} from 'react-native';
import TextComponent from '../../components/TextLabel';
import ImageComponent from '../../components/ImageContainer';
import {APP_HEIGHT, APP_WIDTH} from '../../constants/dimensions';
import {ButtonComponent} from '../../components/Buttons';
import TextInputComponent from '../../components/TextInput';
import TextInputEnum from '../../enums/TextInput.enum';
import DivComponent from '../../components/DivContainer';
import TextLabel from '../../components/TextLabel';
import DividerComponent from '../../components/Divider';
import {COLOR_LISTS} from '../../constants/colors';

export default function Login(props: any) {
  const {navigation} = props;

  const onSignup = () => {
    navigation.navigate('Register');
  };

  const onGoToDashboard = () => {
    navigation.navigate('Dashboard');
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
          <DivComponent padding="10">
            <DividerComponent margin="20px 0 0 0" />
            <TextInputComponent
              label="Email"
              borderRadius={10}
              textMode={TextInputEnum.OUTLINED}
            />
            <TextInputComponent
              label="Password"
              borderRadius={10}
              textMode={TextInputEnum.OUTLINED}
            />
          </DivComponent>
          <ButtonComponent
            alignSelf="center"
            borderRadius="10"
            fontSize={18}
            title="Log in"
            textAlign="center"
            textColor={COLOR_LISTS.WHITE}
            backgroundColor="#D11042"
            margin="40px 0 0 0"
            padding="15"
            onPress={onGoToDashboard}
          />
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
