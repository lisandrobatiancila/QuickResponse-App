import {View} from 'react-native';
import {Modal} from 'react-native-paper';
import styled from 'styled-components';
import {COLOR_LISTS} from '../../constants/colors';

type QRModalContainerProps = {
  padding?: number;
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
};

type QRModalContentContainerProps = {
  width?: number;
  height?: number;
  backgroundColor?: string;
  padding?: number;
};
export const QRModalContainer = styled(Modal)<QRModalContainerProps>`
  padding: ${(props: QRModalContainerProps) => props.padding ?? 0}px;
  width: ${(props: QRModalContainerProps) => props.width ?? '50'}%;
  height: ${(props: QRModalContainerProps) => props.height ?? '100'}%;
  border-radius: ${(props: QRModalContainerProps) => props.borderRadius ?? 5}px;
  background-color: ${(props: QRModalContainerProps) =>
    props.backgroundColor ?? COLOR_LISTS.WHITE};
`;

export const QRModalContentContainer = styled(
  View,
)<QRModalContentContainerProps>`
  width: ${(props: QRModalContentContainerProps) => props.width ?? '50'}%;
  height: ${(props: QRModalContentContainerProps) => props.height ?? '50'}px;
  background-color: ${(props: QRModalContentContainerProps) =>
    props.backgroundColor ?? COLOR_LISTS.WHITE};
  padding: ${(props: QRModalContentContainerProps) => props.padding ?? '0'}px;
  display: flex;
`;
