import React, { useEffect } from 'react';
import {View} from 'react-native';
import TextLabel from '../../components/TextLabel';
import { useAccountContext } from '../../providers/AccountProvider';

export default function HomeDashBoard() {
  const {activeUserInformation} = useAccountContext();

  return (
    <View>
      <TextLabel title={`Welcome to HomeDashboard ${JSON.stringify(activeUserInformation)}`} />
    </View>
  );
}
