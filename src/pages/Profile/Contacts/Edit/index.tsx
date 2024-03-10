import React from 'react';
import {ToastAndroid, View} from 'react-native';
import TextInputComponent from '../../../../components/TextInput';
import TextInputEnum from '../../../../enums/TextInput.enum';
import {COLOR_LISTS} from '../../../../constants/colors';
import {ButtonComponent} from '../../../../components/Buttons';
import DividerComponent from '../../../../components/Divider';
import {Formik} from 'formik';
import {useUserProfile} from '../../../../hooks/profileUserHooks';
import {useAccountContext} from '../../../../providers/AccountProvider';
import {ContactDTO} from '../../../../types/User.type';
import DivComponent from '../../../../components/DivContainer';

type EditContactsProps = {
  onCancelEdit: () => void;
  contactRecords: ContactDTO | null;
  originalContactInfo: ContactDTO[];
  index: number;
};

export default function EditContacts(props: EditContactsProps) {
  const {onCancelEdit, contactRecords} = props;

  const initValues: ContactDTO = {
    name: contactRecords?.name as string,
    contactno: contactRecords?.contactno as string,
  };
  const {sendEditContacts} = useUserProfile();
  const {activeUserInformation} = useAccountContext();

  const onEditContacts = async (values: ContactDTO) => {
    await sendEditContacts(activeUserInformation?.account?.fbID ?? '', values);
    ToastAndroid.show('Contact information was updated.', ToastAndroid.SHORT);
  };

  return (
    <View>
      <DividerComponent margin="10px 0 0 0" />
      <Formik
        initialValues={initValues}
        onSubmit={(values: ContactDTO, {resetForm}) => {
          onEditContacts(values);
          resetForm();
        }}>
        {({handleSubmit, handleChange, values}) => (
          <>
            <TextInputComponent
              textMode={TextInputEnum.OUTLINED}
              label="Name"
              value={values.name}
              onChangeText={handleChange('name')}
            />
            <TextInputComponent
              textMode={TextInputEnum.OUTLINED}
              label="Phone#"
              value={values.contactno}
              onChangeText={handleChange('contactno')}
              keyboardType="phone-pad"
            />
            <DividerComponent margin="10px 0 0 0" />
            <DivComponent flexDirection="row">
              <ButtonComponent
                title="Save"
                backgroundColor={COLOR_LISTS.GREEN_500}
                padding={'10'}
                borderRadius={'10'}
                textAlign="center"
                fontSize={18}
                textColor={COLOR_LISTS.WHITE}
                alignSelf="center"
                onPress={handleSubmit}
              />
              <DividerComponent margin="0 3px 0 0" />
              <ButtonComponent
                title="Cancel"
                backgroundColor={COLOR_LISTS.RED_400}
                padding={'10'}
                borderRadius={'10'}
                textAlign="center"
                fontSize={18}
                textColor={COLOR_LISTS.WHITE}
                alignSelf="center"
                onPress={onCancelEdit}
              />
            </DivComponent>
          </>
        )}
      </Formik>
    </View>
  );
}
