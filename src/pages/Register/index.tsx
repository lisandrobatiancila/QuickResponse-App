/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import DividerComponent from '../../components/Divider';
import {ButtonComponent} from '../../components/Buttons';
import {Dimensions, TextInput, View} from 'react-native';
import TextComponent from '../../components/Text';

export default function Registration() {
  return (
    <>
      <DividerComponent margin="10px 0 0 0" />
      <View
        style={{
          justifyContent: 'center',
          height: Dimensions.get('window').height,
        }}>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <ButtonComponent
          alignSelf="center"
          title="Log in"
          textAlign="center"
          backgroundColor="#D11042"
          margin="80px 0 0 0"
          padding="10"
          borderRadius="10"
        />
        <DividerComponent margin="5px 0 0 0" />
        <TextComponent
          title="Don't have an account? Sign up"
          textAlign="center"
        />
      </View>
    </>
  );
}
