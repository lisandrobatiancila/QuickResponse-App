import React, {useEffect, useMemo, useState} from 'react';
import {ScrollView, View} from 'react-native';
import TextLabel from '../../../../components/TextLabel';
import {COLOR_LISTS} from '../../../../constants/colors';
import {APP_HEIGHT, APP_WIDTH} from '../../../../constants/dimensions';
import {useUserProfile} from '../../../../hooks/profileUserHooks';
import {useAccountContext} from '../../../../providers/AccountProvider';
import {AllergyDTO} from '../../../../types/User.type';
import {ButtonComponent} from '../../../../components/Buttons';
import DividerComponent from '../../../../components/Divider';

export default function ViewAllergies() {
  const {sendGetAllAllergies} = useUserProfile();
  const {activeUserInformation} = useAccountContext();
  const [allergyRecords, setAllergyRecords] = useState<AllergyDTO[]>([]);

  const getAllAllergies = async (activeUserID: string) => {
    const result = await sendGetAllAllergies(activeUserID);
    const records = result.data()?.allergies as AllergyDTO[];
    setAllergyRecords(records);
  };

  useEffect(() => {
    getAllAllergies(activeUserInformation?.account?.fbID ?? '');
  }, []);

  const listOfAllergies = useMemo(() => {
    if (allergyRecords) {
      return allergyRecords.map((record: any, i: number) => {
        return (
          <View key={i}>
            <DividerComponent margin="3px 0 0 0" />
            <ButtonComponent
              title={record}
              key={i}
              backgroundColor={COLOR_LISTS.RED_400}
              textAlign="center"
              fontSize={20}
              alignSelf="center"
              padding="5"
              borderRadius="5"
              textColor={COLOR_LISTS.WHITE}
              width={80}
            />
          </View>
        );
      });
    } else {
      return <TextLabel title="No allergy record exists." />;
    }
  }, [allergyRecords]);

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: COLOR_LISTS.WHITE,
          width: APP_WIDTH,
          height: APP_HEIGHT / 2,
          padding: 10,
        }}>
        <TextLabel
          title="List of all allergies"
          fontSize={20}
          textAlign="center"
        />
        {listOfAllergies}
      </View>
    </ScrollView>
  );
}
