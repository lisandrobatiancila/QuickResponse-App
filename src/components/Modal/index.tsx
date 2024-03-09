import React from 'react';
import {Portal} from 'react-native-paper';
import * as S from './style';
import TextLabel from '../TextLabel';
import {View} from 'react-native';
import {CloseButtonComponent} from '../CloseButtons';
import {COLOR_LISTS} from '../../constants/colors';
import {TextAlignmentEnum} from '../../constants/string';
import {APP_WIDTH} from '../../constants/dimensions';

type QRModalComponentProps = {
  visibility: boolean;
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
  contentWidth?: number;
  contentHeight?: number;
  contentPadding?: number;
  children?: React.ReactNode;
  closeModal?: () => void;
};

export const QRModalComponent = (props: QRModalComponentProps) => {
  const {
    visibility,
    width,
    height,
    borderRadius,
    backgroundColor,
    contentWidth,
    contentHeight,
    contentPadding,
    children,
    closeModal,
  } = props;

  return (
    <Portal>
      <S.QRModalContainer
        visible={visibility}
        width={width}
        height={height}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        contentContainerStyle={{position: 'absolute', bottom: 0}}
        padding={contentPadding}>
        <S.QRModalContentContainer width={contentWidth} height={contentHeight}>
          <CloseButtonComponent
            width={40}
            height={40}
            fontSize={30}
            marginTop={10}
            marginRight={10}
            backgroundColor={COLOR_LISTS.RED_500}
            borderRadius={100}
            texAlign={TextAlignmentEnum.CENTER}
            closeModal={closeModal}
          />

          {children}
        </S.QRModalContentContainer>
      </S.QRModalContainer>
    </Portal>
  );
};
