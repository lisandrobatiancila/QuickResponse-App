import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {COLOR_LISTS} from '../../constants/colors';

type CloseButtonProps = {
  width?: number;
  height?: number;
  padding?: number;
  backgroundColor?: string;
  borderRadius?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
};

export const CloseButtonContainer = styled(TouchableOpacity)<CloseButtonProps>`
  width: ${(props: CloseButtonProps) => props.width ?? 0}px;
  height: ${(props: CloseButtonProps) => props.height ?? 0}px;
  padding: ${(props: CloseButtonProps) => props.padding ?? 0}px;
  background-color: ${(props: CloseButtonProps) =>
    props.backgroundColor ?? COLOR_LISTS.WHITE};
  border-radius: ${(props: CloseButtonProps) => props.borderRadius ?? 0}px;
  margin-top: ${(props: CloseButtonProps) => props.marginTop ?? 0}px;
  margin-right: ${(props: CloseButtonProps) => props.marginRight ?? 0}px;
  margin-bottom: ${(props: CloseButtonProps) => props.marginBottom ?? 0}px;
  margin-left: ${(props: CloseButtonProps) => props.marginLeft ?? 0}px;
`;
