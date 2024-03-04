import React from 'react';
import {Portal} from 'react-native-paper';
import * as S from './style';
import TextLabel from '../TextLabel';

type QRModalComponentProps = {
  visibility: boolean;
  width?: number;
  height?: number;
  borderRadius?: number;
};

export const QRModalComponent = (props: QRModalComponentProps) => {
  const {visibility, width, height, borderRadius} = props;

  return (
    <Portal>
      <S.QRModalContainer
        visible={visibility}
        width={width}
        height={height}
        borderRadius={borderRadius}>
        <TextLabel title="wewe" />
      </S.QRModalContainer>
    </Portal>
  );
};
