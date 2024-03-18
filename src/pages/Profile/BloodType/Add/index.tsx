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
import {BloodTypeDTO} from '../../../../types/User.type';
import * as Yup from 'yup';

export default function AddBloodType() {
  const initValues: BloodTypeDTO = {
    bloodType: '',
  };
  const {sendAddNewBloodType} = useUserProfile();
  const {activeUserInformation} = useAccountContext();

  const bloodTypeValidationSchema = Yup.object().shape({
    bloodType: Yup.string().required('Please specify your Bloodtype'),
  });

  const onSaveBloodType = async (values: BloodTypeDTO) => {
    await sendAddNewBloodType(
      activeUserInformation?.account?.fbID ?? '',
      values,
    );
    ToastAndroid.show('New BloodType was set.', ToastAndroid.SHORT);
  };

  return (
    <View
      style={{
        backgroundColor: COLOR_LISTS.WHITE,
        width: APP_WIDTH,
        height: APP_HEIGHT / 2,
        padding: 10,
      }}>
      <TextLabel title="Add new bloodtype" textAlign="center" fontSize={20} />
      <DividerComponent margin="10px 0 0 0" />
      <Formik
        initialValues={initValues}
        validationSchema={bloodTypeValidationSchema}
        onSubmit={(values: BloodTypeDTO, {resetForm}) => {
          onSaveBloodType(values);
          resetForm();
        }}>
        {({handleChange, handleSubmit, values, errors}) => (
          <>
            {errors?.bloodType && (
              <TextLabel
                title={`${errors.bloodType}`}
                textColor={`${COLOR_LISTS.RED}`}
              />
            )}
            <TextInputComponent
              textMode={TextInputEnum.OUTLINED}
              label="Bloodtype"
              value={values.bloodType}
              onChangeText={handleChange('bloodType')}
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
