import React from 'react';
import {FlatList, View} from 'react-native';
import TextLabel from '../../components/TextLabel';
import {FIRST_AID_LIST} from '../../constants/string';
import { APP_HEIGHT, APP_WIDTH } from '../../constants/dimensions';
import { TouchableCardComponent } from '../../components/TouchableCard';
import { APP_FONT_SIZE, APP_PADDING } from '../../constants/number';
import { convertFirstCharacterOfWordToUpperCase } from '../../utils/format-display';

export default function FirstAidDashBoard(props: any) {
  const {navigation} = props;
  const onViewFirstAidInformation = (firstAidInfo: {firstAidID: number, firstAidTitle: string}) => {
    const {firstAidID, firstAidTitle} = firstAidInfo;
    
    navigation.navigate('FirstAid-Information', {firstAidID, firstAidTitle});
  };

  const renderFirstAid = ({item}: any) => {
    return (
        <TouchableCardComponent width={APP_WIDTH} padding={APP_PADDING.SEVEN} margin="5px 0 0 0" onPressFirstAidInformation={() => onViewFirstAidInformation(item)}>
          <TextLabel title={convertFirstCharacterOfWordToUpperCase(item.firstAidTitle)} fontSize={APP_FONT_SIZE.EIGHTEN} />
        </TouchableCardComponent>
    );
  };

  return (
    <View style={{paddingLeft: APP_PADDING.FIFTEN, paddingRight: APP_PADDING.FIFTEN, paddingTop: APP_PADDING.EIGHT}}>
      <FlatList data={FIRST_AID_LIST} renderItem={renderFirstAid} />
    </View>
  );
}
