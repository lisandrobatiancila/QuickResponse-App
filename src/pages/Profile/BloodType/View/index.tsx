import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import TextLabel from '../../../../components/TextLabel';
import {COLOR_LISTS} from '../../../../constants/colors';
import {APP_HEIGHT, APP_WIDTH} from '../../../../constants/dimensions';
import {useUserProfile} from '../../../../hooks/profileUserHooks';
import {useAccountContext} from '../../../../providers/AccountProvider';
import {BloodTypeDTO} from '../../../../types/User.type';
import DividerComponent from '../../../../components/Divider';

export default function ViewBloodType() {
  const {sendGetBloodType} = useUserProfile();
  const {activeUserInformation} = useAccountContext();
  const [bloodTypeRecord, setBloodTypeRecord] = useState<BloodTypeDTO>();

  const getBloodType = async (activeUserID: string) => {
    const result = await sendGetBloodType(activeUserID);
    setBloodTypeRecord(result?.data() as BloodTypeDTO);
  };

  useEffect(() => {
    getBloodType(activeUserInformation?.account?.fbID ?? '');
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: COLOR_LISTS.WHITE,
          width: APP_WIDTH,
          height: APP_HEIGHT / 2,
          padding: 10,
        }}>
        <TextLabel title="Your BloodType is" fontSize={20} textAlign="center" />
        <DividerComponent margin="10px 0 0 0" />
        <TextLabel
          title={bloodTypeRecord?.bloodType ?? 'N/A'}
          textAlign="center"
          fontSize={80}
          textColor={COLOR_LISTS.RED_400}
        />
      </View>
    </ScrollView>
  );
}
