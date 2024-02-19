import React from 'react';
import * as S from './style';
type TextProps = {
  title?: string;
  fontWeight?: string;
  fontSize?: number;
  textAlign?: string;
};

export default function TextComponent(props: TextProps) {
  const {title, fontWeight, fontSize, textAlign} = props;
  return (
    <S.TextContainer
      fontWeight={fontWeight}
      fontSize={fontSize}
      textAlign={textAlign}>
      {title}
    </S.TextContainer>
  );
}
