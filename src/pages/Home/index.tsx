import React, {Dimensions, View} from 'react-native';
import TextComponent from '../../components/TextLabel';
import {ButtonComponent} from '../../components/Buttons';
import * as S from './style';
import {APP_WIDTH} from '../../constants/dimensions';
import ImageComponent from '../../components/ImageContainer';
import { COLOR_LISTS } from '../../constants/colors';
import { useEffect } from 'react';
import { getAsyncStorage } from '../../utils/utility';
import { STORAGE_KEY } from '../../constants/string';
import { useUserCredentials } from '../../hooks/useUserHooks';

export default function Home(props: any) {
  const {navigation} = props;
  const {sendActiveUserInformation} = useUserCredentials();

  

  const checkIfUserHasLoggedInAlready = async () => {
    const fbID = await getAsyncStorage(STORAGE_KEY.FB_ID);
    console.log('FBID >>> ', fbID);
    
    if (fbID) {
      const result = await sendActiveUserInformation(fbID);
      console.log('RESS >>>');
      console.log(result);
      
      // navigation.navigate('Dashboard');
    }
    return;
  }

  function onGetStarted() {
    navigation.navigate('Login');
  }

  useEffect(() => {
    checkIfUserHasLoggedInAlready();
  }, []);

  return (
    <View>
      <View>
        <ImageComponent
          borderRadius={50}
          imageSrc={require('../../assets/QRApp-img1.jpeg')}
          width={APP_WIDTH}
          height={210}
        />
        <S.HomeContainer
          justifyContent="center"
          height={Dimensions.get('window').height / 2}>
          <TextComponent
            title="Welcome To"
            fontWeight="bold"
            fontSize={32}
            textAlign="center"
            textColor={COLOR_LISTS.GREY_500}
          />
          <TextComponent
            title="QR App: Emergency Quick Response"
            fontWeight="normal"
            textAlign="center"
            fontSize={18}
            textColor={COLOR_LISTS.GREY_400}
          />
          <ButtonComponent
            alignSelf="center"
            borderRadius="10"
            fontSize={15}
            title="Let's get you Started"
            textAlign="center"
            backgroundColor={COLOR_LISTS.RED_400}
            margin="80px 0 0 0"
            padding="15"
            textColor={COLOR_LISTS.WHITE}
            onPress={onGetStarted}
          />
        </S.HomeContainer>
      </View>
    </View>
  );
}
