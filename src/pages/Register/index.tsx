/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import DividerComponent from '../../components/Divider';
import {ButtonComponent} from '../../components/Buttons';
import {Dimensions, ScrollView, View} from 'react-native';
import TextInputComponent from '../../components/TextInput';
import TextInputEnum from '../../enums/TextInput.enum';
import ImageComponent from '../../components/ImageContainer';
import DivComponent from '../../components/DivContainer';

export default function Registration() {
  return (
    <>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            height: Dimensions.get('window').height - 150,
            padding: 10,
          }}>
          <DivComponent alignItems="center">
            <ImageComponent
              imageSrc={require('../../assets/QRApp-img3.jpeg')}
              width={200}
              height={100}
            />
          </DivComponent>
          <DividerComponent margin="20px 0 0 0" />
          <TextInputComponent
            label="Fullname"
            borderRadius={10}
            textMode={TextInputEnum.OUTLINED}
          />
          <TextInputComponent
            label="Address"
            borderRadius={10}
            textMode={TextInputEnum.OUTLINED}
          />
          <TextInputComponent
            label="Contact No."
            borderRadius={10}
            textMode={TextInputEnum.OUTLINED}
          />
          <TextInputComponent
            label="Email"
            borderRadius={10}
            textMode={TextInputEnum.OUTLINED}
          />
          <TextInputComponent
            label="Password"
            borderRadius={10}
            textMode={TextInputEnum.OUTLINED}
          />
          <ButtonComponent
            alignSelf="center"
            backgroundColor="#D11042"
            borderRadius="10"
            title="Sign up"
            textAlign="center"
            margin="80px 0 0 0"
            padding="10"
            fontSize={18}
            width={60}
          />
        </View>
      </ScrollView>
    </>
  );
}
