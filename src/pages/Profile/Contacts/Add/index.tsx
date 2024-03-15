import React from 'react';
import {ToastAndroid, View} from 'react-native';
import TextInputComponent from '../../../../components/TextInput';
import TextInputEnum from '../../../../enums/TextInput.enum';
import TextLabel from '../../../../components/TextLabel';
import {COLOR_LISTS} from '../../../../constants/colors';
import {ButtonComponent} from '../../../../components/Buttons';
import DividerComponent from '../../../../components/Divider';
import {APP_HEIGHT, APP_WIDTH} from '../../../../constants/dimensions';
import {Formik} from 'formik';
import {useUserProfile} from '../../../../hooks/profileUserHooks';
import {useAccountContext} from '../../../../providers/AccountProvider';
import {ContactDTO} from '../../../../types/User.type';
import * as Yup from 'yup';

export default function AddNewContacts() {
  const initValues: ContactDTO = {
    name: '',
    contactno: '',
  };
  const {sendAddNewContacts} = useUserProfile();
  const {activeUserInformation} = useAccountContext();

  const contactValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    contactno: Yup.string().required('Contact is required'),
  });

  const onSaveContacts = async (values: ContactDTO) => {
    await sendAddNewContacts(
      activeUserInformation?.account?.fbID ?? '',
      values,
    );
    ToastAndroid.show('New contacts was added.', ToastAndroid.SHORT);
  };

  return (
    <View
      style={{
        backgroundColor: COLOR_LISTS.WHITE,
        width: APP_WIDTH,
        height: APP_HEIGHT / 2,
        padding: 10,
      }}>
      <TextLabel title="Add new contacts" textAlign="center" fontSize={20} />
      <DividerComponent margin="10px 0 0 0" />
      <Formik
        initialValues={initValues}
        validationSchema={contactValidationSchema}
        onSubmit={(values: ContactDTO, {resetForm}) => {
          onSaveContacts(values);
          resetForm();
        }}>
        {({handleSubmit, handleChange, values, errors}) => (
          <>
            {errors?.name && (
              <TextLabel
                title={`${errors?.name}`}
                textColor={COLOR_LISTS.RED_400}
              />
            )}
            <TextInputComponent
              textMode={TextInputEnum.OUTLINED}
              label="Name"
              value={values.name}
              onChangeText={handleChange('name')}
            />
            {errors?.contactno && (
              <TextLabel
                title={`${errors?.contactno}`}
                textColor={COLOR_LISTS.RED_400}
              />
            )}
            <TextInputComponent
              textMode={TextInputEnum.OUTLINED}
              label="Phone#"
              value={values.contactno}
              onChangeText={handleChange('contactno')}
              keyboardType="phone-pad"
            />
            <DividerComponent margin="10px 0 0 0" />
            <ButtonComponent
              title="Save"
              backgroundColor={COLOR_LISTS.RED_400}
              padding={'10'}
              borderRadius={'10'}
              textAlign="center"
              fontSize={18}
              textColor={COLOR_LISTS.WHITE}
              alignSelf="center"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
}
