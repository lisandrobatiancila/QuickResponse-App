import React from 'react';
import * as S from './style';
import TextInputEnum from '../../enums/TextInput.enum';

type TextInputComponentProps = {
  label?: string;
  borderRadius?: number;
  textMode: TextInputEnum;
};
export default function TextInputComponent(props: TextInputComponentProps) {
  const {label, borderRadius, textMode} = props;

  return (
    <S.TextInputContainer
      label={label}
      borderRadius={borderRadius}
      mode={textMode}
    />
  );
}
