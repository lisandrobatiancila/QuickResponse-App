import React, {Dimensions, View} from 'react-native';
import TextComponent from '../../components/TextLabel';
import {ButtonComponent} from '../../components/Buttons';
import * as S from './style';
import {APP_WIDTH} from '../../constants/dimensions';
import ImageComponent from '../../components/ImageContainer';

export default function Home(props: any) {
  const {navigation} = props;

  function onGetStarted() {
    navigation.navigate('Login');
  }
  return (
    <View>
      <View>
        <ImageComponent
          borderRadius={50}
          imageSrc={require('../../assets/QRApp-img1.jpeg')}
          width={APP_WIDTH}
          height={200}
        />
        <S.HomeContainer
          justifyContent="center"
          height={Dimensions.get('window').height / 2}>
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
            fontSize={15}
            title="Let's get you Started"
            textAlign="center"
            backgroundColor="#D11042"
            margin="80px 0 0 0"
            padding="15"
            onPress={onGetStarted}
          />
        </S.HomeContainer>
      </View>
    </View>
  );
}
