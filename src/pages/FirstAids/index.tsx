import React from 'react';
import {FlatList, View} from 'react-native';
import TextLabel from '../../components/TextLabel';
import {FIRST_AID_LIST} from '../../constants/string';
import {CardComponent} from '../../components/Card';
import DivComponent from '../../components/DivContainer';
import { APP_HEIGHT } from '../../constants/dimensions';

export default function FirstAidDashBoard() {
  const renderFirstAid = ({item}: any) => {
    return (
      <CardComponent width={100} height={40}>
        <DivComponent>
          <TextLabel title={item} />
        </DivComponent>
      </CardComponent>
    );
  };

  return (
    <View style={{height: APP_HEIGHT, padding: 10, backgroundColor: 'teal'}}>
      <FlatList data={FIRST_AID_LIST} renderItem={renderFirstAid} />
    </View>
  );
}
