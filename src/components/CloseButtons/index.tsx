import React from 'react';
import {Text} from 'react-native';
import * as S from './style';
import {TextAlignmentEnum} from '../../constants/string';
import {COLOR_LISTS} from '../../constants/colors';

type CloseButtonComponentProps = {
  width?: number;
  height?: number;
  padding?: number;
  backgroundColor?: string;
  fontSize?: number;
  texAlign?: TextAlignmentEnum;
  borderRadius?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  closeModal?: () => void;
};

export const CloseButtonComponent = (props: CloseButtonComponentProps) => {
  const {
    width,
    height,
    backgroundColor,
    borderRadius,
    padding,
    fontSize,
    texAlign,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    closeModal,
  } = props;

  return (
    <S.CloseButtonContainer
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      padding={padding}
      marginTop={marginTop}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      style={{
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignSelf: 'flex-end',
      }}
      onPress={closeModal}>
      <Text
        style={{
          fontSize: fontSize ?? 18,
          textAlign: texAlign,
          color: COLOR_LISTS.WHITE,
        }}>
        &times;
      </Text>
    </S.CloseButtonContainer>
  );
};
