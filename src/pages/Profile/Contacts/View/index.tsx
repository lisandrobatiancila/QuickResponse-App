import React, {useEffect, useMemo, useState} from 'react';
import {ScrollView, ToastAndroid, TouchableOpacity, View} from 'react-native';
import TextLabel from '../../../../components/TextLabel';
import {COLOR_LISTS} from '../../../../constants/colors';
import {APP_HEIGHT, APP_WIDTH} from '../../../../constants/dimensions';
import {useUserProfile} from '../../../../hooks/profileUserHooks';
import {useAccountContext} from '../../../../providers/AccountProvider';
import {ContactDTO} from '../../../../types/User.type';
import {CardComponent} from '../../../../components/Card';
import DivComponent from '../../../../components/DivContainer';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import DividerComponent from '../../../../components/Divider';
import EditContacts from '../Edit';

export default function ViewContacts() {
  const {sendGetAllContacts, deleteContactInformation} = useUserProfile();
  const {activeUserInformation} = useAccountContext();
  const [contactRecords, setContactRecords] = useState<ContactDTO[]>([]);
  const [editCertainContact, setEditCertainContact] =
    useState<ContactDTO | null>(null);
  const [isEditAction, setIsEditAction] = useState<boolean>(false);
  const [editCertainContactID, setEditCertainContactID] = useState<number>(0);

  const getAllContacts = async (activeUserID: string) => {
    const result = await sendGetAllContacts(activeUserID);
    const records = result?.data()?.contacts as ContactDTO[];

    setContactRecords(records);
  };

  useEffect(() => {
    getAllContacts(activeUserInformation?.account?.fbID ?? '');
  }, []);

  const onEditContact = (record: ContactDTO, index: number) => {
    setIsEditAction(true);
    setEditCertainContact(record);
    setEditCertainContactID(index);
  };

  const onCancelEdit = () => {
    setIsEditAction(false);
  };

  const onRemoveCertainContact = async (record: ContactDTO) => {
    await deleteContactInformation(
      activeUserInformation?.account?.fbID ?? '',
      record,
      contactRecords,
    );

    ToastAndroid.show('Contact was removed.', ToastAndroid.SHORT);
  };

  const listOfContacts = useMemo(() => {
    if (contactRecords) {
      return contactRecords.map((record: ContactDTO, i: number) => {
        return (
          <CardComponent
            key={i}
            width={100}
            height={20}
            backgroundColor={COLOR_LISTS.BLUE_500}
            padding={10}
            borderRadius={6}
            margin="3px 0 0 0">
            <DivComponent
              flexDirection="row"
              justifyContent="space-evenly"
              width="100"
              backgroundColor={COLOR_LISTS.RED}>
              <DivComponent backgroundColor={COLOR_LISTS.BLUE_500} width="80">
                <TextLabel title={`Name: ${record.name}`} fontSize={18} />
                <TextLabel
                  title={`Contactno: ${record.contactno}`}
                  fontSize={18}
                />
              </DivComponent>
              <DivComponent
                backgroundColor={COLOR_LISTS.BLUE_500}
                width="22"
                flexDirection="row"
                justifyContent="center"
                alignItems="center">
                <TouchableOpacity onPress={() => onEditContact(record, i)}>
                  <FontAwesome6Icon
                    name={'pen'}
                    size={20}
                    color={COLOR_LISTS.WHITE}
                  />
                </TouchableOpacity>
                <DividerComponent margin="0 10px 0 0" />
                <TouchableOpacity
                  onPress={() => onRemoveCertainContact(record)}>
                  <FontAwesome6Icon
                    name={'trash'}
                    size={20}
                    color={COLOR_LISTS.WHITE}
                  />
                </TouchableOpacity>
              </DivComponent>
            </DivComponent>
          </CardComponent>
        );
      });
    } else {
      return (
        <DivComponent>
          <TextLabel title="No contact records." />
        </DivComponent>
      );
    }
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
          title={!isEditAction ? 'List of all contacts' : 'Edit contacts'}
          fontSize={20}
          textAlign="center"
        />
        {!isEditAction && listOfContacts}
        {isEditAction && (
          <EditContacts
            contactRecords={editCertainContact}
            originalContactInfo={contactRecords}
            index={editCertainContactID}
            onCancelEdit={onCancelEdit}
          />
        )}
      </View>
    </ScrollView>
  );
}
