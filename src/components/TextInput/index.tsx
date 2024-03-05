import React, {ChangeEvent} from 'react';
import * as S from './style';
import TextInputEnum from '../../enums/TextInput.enum';
import {KeyboardTypeOptions} from 'react-native';

type TextInputComponentProps = {
  label?: string;
  borderRadius?: number;
  textMode: TextInputEnum;
  value?: string;
  height?: string;
  onChangeText?: (param: string | ChangeEvent<Element>) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  disabled?: boolean;
};
export default function TextInputComponent(props: TextInputComponentProps) {
  const {
    label,
    borderRadius,
    textMode,
    value,
    height,
    onChangeText,
    secureTextEntry,
    keyboardType,
    disabled
  } = props;

  return (
    <S.TextInputContainer
      label={label}
      borderRadius={borderRadius}
      value={value}
      mode={textMode}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType ?? 'default'}
      height={height}
      disabled={disabled}
    />
  );
}
