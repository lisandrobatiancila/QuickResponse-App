import React, {useEffect, useMemo, useState} from 'react';
import {ScrollView, View} from 'react-native';
import TextLabel from '../../../../components/TextLabel';
import {COLOR_LISTS} from '../../../../constants/colors';
import {APP_HEIGHT, APP_WIDTH} from '../../../../constants/dimensions';
import {useUserProfile} from '../../../../hooks/profileUserHooks';
import {useAccountContext} from '../../../../providers/AccountProvider';
import {ContactDTO} from '../../../../types/User.type';
import DividerComponent from '../../../../components/Divider';
import { CardComponent } from '../../../../components/Card';

export default function ViewContacts() {
  const {sendGetAllContacts} = useUserProfile();
  const {activeUserInformation} = useAccountContext();
  const [contactRecords, setConditionRecords] = useState<ContactDTO[]>([]);

  const getAllContacts = async (activeUserID: string) => {
    const result = await sendGetAllContacts(activeUserID);
    const records = result?.data()?.contacts as ContactDTO[];

    setConditionRecords(records);
};

  useEffect(() => {
    getAllContacts(activeUserInformation?.account?.fbID ?? '');
  }, []);

  const listOfContacts = useMemo(() => {
    return contactRecords.map((record: ContactDTO, i: number) => {
      return (
        <CardComponent width={100} height={20} backgroundColor={COLOR_LISTS.RED} padding={10} borderRadius={6} margin="3px 0 0 0">
            <TextLabel title={`Name: ${record.name}`} fontSize={18} />
            <TextLabel title={`Contactno: ${record.contactno}`} fontSize={18} />
        </CardComponent>
      );
    });
  }, [contactRecords]);

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
          title="List of all contacts"
          fontSize={20}
          textAlign="center"
        />
        {listOfContacts}
      </View>
    </ScrollView>
  );
}
