/* eslint-disable react-native/no-inline-styles */
import React, {Dimensions, View} from 'react-native';
import {DividerContainer} from '../../components/Divider/style';
import TextComponent from '../../components/Text';
import {ButtonComponent} from '../../components/Buttons';

export default function Home(props: any) {
  const {navigation} = props;

  function onGetStarted() {
    navigation.navigate('Register');
  }
  return (
    <View>
      <DividerContainer margin="10px 0 0 0 " />

      <View
        style={{
          justifyContent: 'center',
          backgroundColor: 'teal',
          height: Dimensions.get('window').height,
        }}>
        <TextComponent
          title="Welcome To"
          fontWeight="bold"
          fontSize={32}
          textAlign="center"
        />
        <TextComponent
          title="QR App: Emergency Quick Response"
          fontWeight="normal"
          textAlign="center"
          fontSize={18}
        />
        <ButtonComponent
          alignSelf="center"
          borderRadius="10"
          fontSize="15"
          title="Let's get you Started"
          textAlign="center"
          backgroundColor="#D11042"
          margin="80px 0 0 0"
          padding="10"
          onPress={onGetStarted}
        />
      </View>
    </View>
  );
}
