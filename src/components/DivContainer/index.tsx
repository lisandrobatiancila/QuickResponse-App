import React from 'react';
import * as S from './style';

type DivComponentProps = {
  children?: React.ReactNode;
  alignItems?: string;
  justifyContent?: string;
  display?: string;
  padding?: string;
  flexDirection?: string;
};

export default function DivComponent(props: DivComponentProps) {
  const {
    children,
    alignItems,
    display,
    flexDirection,
    justifyContent,
    padding,
  } = props;
  return (
    <S.DivContainer
      alignItems={alignItems}
      justifyContent={justifyContent}
      display={display}
      flexDirection={flexDirection}
      padding={padding}>
      {children}
    </S.DivContainer>
  );
}
