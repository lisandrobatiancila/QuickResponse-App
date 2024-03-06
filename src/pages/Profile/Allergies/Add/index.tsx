import React from 'react';
import {ToastAndroid, View} from 'react-native';
import TextInputComponent from '../../../../components/TextInput';
import TextInputEnum from '../../../../enums/TextInput.enum';
import TextLabel from '../../../../components/TextLabel';
import {COLOR_LISTS} from '../../../../constants/colors';
import {ButtonComponent} from '../../../../components/Buttons';
import DividerComponent from '../../../../components/Divider';
import {APP_HEIGHT} from '../../../../constants/dimensions';
import {Formik} from 'formik';
import {useUserProfile} from '../../../../hooks/profileUserHooks';
import {useAccountContext} from '../../../../providers/AccountProvider';

type AddNewAllergiesProps = {
  allergy: string;
};

export default function AddNewAllergies() {
  const initValues: AddNewAllergiesProps = {
    allergy: '',
  };
  const {sendAddNewAllergies} = useUserProfile();
  const {activeUserInformation} = useAccountContext();

  const onSaveAllergy = async (values: AddNewAllergiesProps) => {
    await sendAddNewAllergies(
      activeUserInformation?.account?.fbID ?? '',
      values,
    );
    ToastAndroid.show('New allergies was added.', ToastAndroid.SHORT);
  };

  return (
    <View
      style={{
        backgroundColor: COLOR_LISTS.WHITE,
        height: APP_HEIGHT / 2,
        padding: 10,
      }}>
      <TextLabel title="Add new allergies" textAlign="center" fontSize={20} />
      <DividerComponent margin="10px 0 0 0" />
      <Formik
        initialValues={initValues}
        onSubmit={(values: AddNewAllergiesProps, {resetForm}) => {
          onSaveAllergy(values);
          resetForm();
        }}>
        {({handleSubmit, handleChange, values}) => (
          <>
            <TextInputComponent
              textMode={TextInputEnum.OUTLINED}
              label="Allergies"
              value={values.allergy}
              onChangeText={handleChange('allergy')}
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
