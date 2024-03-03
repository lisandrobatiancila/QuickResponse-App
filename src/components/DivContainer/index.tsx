import React from 'react';
import * as S from './style';

type DivComponentProps = {
  children?: React.ReactNode;
  alignItems?: string;
  justifyContent?: string;
  display?: string;
  padding?: string;
  flexDirection?: string;
  width?: string;
  backgroundColor?: string;
};

export default function DivComponent(props: DivComponentProps) {
  const {
    children,
    alignItems,
    display,
    flexDirection,
    justifyContent,
    padding,
    width,
    backgroundColor,
  } = props;
  return (
    <S.DivContainer
      alignItems={alignItems}
      backgroundColor={backgroundColor}
      justifyContent={justifyContent}
      display={display}
      flexDirection={flexDirection}
      padding={padding}
      width={width}>
      {children}
    </S.DivContainer>
  );
}
