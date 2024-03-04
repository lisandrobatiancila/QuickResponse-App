import React from 'react';
import {Dimensions, View} from 'react-native';
import TextInputComponent from '../../../components/TextInput';
import TextInputEnum from '../../../enums/TextInput.enum';
import TextLabel from '../../../components/TextLabel';
import {COLOR_LISTS} from '../../../constants/colors';
import {ButtonComponent} from '../../../components/Buttons';
import { DivContainer } from '../../../components/DivContainer/style';
import DivComponent from '../../../components/DivContainer';
import DividerComponent from '../../../components/Divider';

export default function AddNewAllergies() {
  return (
    <View
      style={{
        backgroundColor: COLOR_LISTS.WHITE,
        height: Dimensions.get('window').height / 2,
        padding: 10,
      }}>
      <TextLabel title="Add new allergies" textAlign="center" fontSize={20} />
      <DividerComponent margin="10px 0 0 0" />
      <TextInputComponent textMode={TextInputEnum.OUTLINED} />
      <DividerComponent margin="10px 0 0 0" />
      <ButtonComponent
        title="Save new allergies"
        backgroundColor={COLOR_LISTS.RED_400}
        padding={'10'}
        borderRadius={'10'}
        textAlign="center"
        fontSize={18}
        textColor={COLOR_LISTS.WHITE}
        alignSelf="center"
      />
    </View>
  );
}
