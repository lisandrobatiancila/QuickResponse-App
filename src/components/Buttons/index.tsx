import React from 'react';
import * as S from './style';
import TextComponent from '../Text';

type ButtonContainerProps = {
  title?: string;
  backgroundColor?: string;
  textColor?: string;
  fontWeight?: string;
  fontSize?: string;
  textAlign?: string;
  margin?: string;
  alignSelf?: string;
  padding?: string;
  borderRadius?: string;
  onPress?: () => void;
};

export const ButtonComponent = (props: ButtonContainerProps) => {
  const {
    title,
    backgroundColor,
    textColor,
    fontWeight,
    fontSize,
    textAlign,
    margin,
    alignSelf,
    padding,
    borderRadius,
    onPress,
  } = props;

  return (
    <S.ButtonContainer
      alignSelf={alignSelf}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      textColor={textColor}
      fontWeight={fontWeight}
      fontSize={fontSize}
      margin={margin}
      onPress={onPress}
      padding={padding}>
      <TextComponent title={title} textAlign={textAlign} />
    </S.ButtonContainer>
  );
};
