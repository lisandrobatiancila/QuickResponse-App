import {Modal} from 'react-native-paper';
import styled from 'styled-components';

type QRModalContainerProps = {
  padding?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
};

export const QRModalContainer = styled(Modal)<QRModalContainerProps>`
  padding: ${(props: QRModalContainerProps) => props.padding ?? 0};
  width: ${(props: QRModalContainerProps) => props.width ?? '50'}%;
  height: ${(props: QRModalContainerProps) => props.height ?? '100'}px;
  border-radius: ${(props: QRModalContainerProps) => props.borderRadius ?? 5} px;
`;
