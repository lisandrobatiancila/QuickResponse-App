import React from 'react';
import * as S from './style';
type TextProps = {
  title?: string;
  fontWeight?: string;
  fontSize?: number;
  textAlign?: string;
  textColor?: string;
};

export default function TextLabel(props: TextProps) {
  const {title, fontWeight, fontSize, textAlign, textColor} = props;
  return (
    <S.TextContainer
      fontWeight={fontWeight}
      fontSize={fontSize}
      textAlign={textAlign}
      textColor={textColor}>
      {title}
    </S.TextContainer>
  );
}
