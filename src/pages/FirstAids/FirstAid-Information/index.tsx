import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import TextLabel from '../../../components/TextLabel';
import {useFirstAid} from '../../../hooks/useFirstAidHooks';
import {FirstAidDTO} from '../../../types/FirstAid.type';
import {convertFirstCharacterOfWordToUpperCase} from '../../../utils/format-display';
import {
  APP_FONT_SIZE,
  APP_MARGIN,
  APP_PADDING,
} from '../../../constants/number';
import DivComponent from '../../../components/DivContainer';
import DividerComponent from '../../../components/Divider';

export default function FirstAidInformation(props: any) {
  const {firstAidID, firstAidTitle} = props.route.params;
  const [specificFirstAid, setSpecificFirstAid] = useState<
    string[] | undefined
  >(undefined);
  const {sendGetSpecificFirstAid} = useFirstAid();

  const getSpecificFirstAid = async () => {
    const result = await sendGetSpecificFirstAid(firstAidID);

    setSpecificFirstAid(result.data()?.description);
  };

  const renderFirstAidList = ({item}: any) => {
    return (
      <>
        <DividerComponent margin="3px 0 0 0" />
        <TextLabel title={item} fontSize={15} />
      </>
    );
  };

  useEffect(() => {
    getSpecificFirstAid();
  }, []);
  return (
    <View>
      <View style={{padding: APP_PADDING.TEN}}>
        <TextLabel
          title={convertFirstCharacterOfWordToUpperCase(firstAidTitle)}
          textAlign="center"
          fontSize={APP_FONT_SIZE.TWENTY_FIVE}
        />
        <FlatList data={specificFirstAid} renderItem={renderFirstAidList} />
        <View style={{marginBottom: APP_MARGIN.ONE}} />
      </View>
    </View>
  );
}
