import {Text} from 'react-native';
import styled from 'styled-components';

type TextProps = {
  fontSize?: number;
  fontWeight?: string;
  fontStyle?: string;
  textColor?: string;
  textAlign?: string;
};

export const TextContainer = styled(Text)<TextProps>`
  font-size: ${(props: TextProps) => props.fontSize ?? 12}px;
  font-weight: ${(props: TextProps) => props.fontWeight ?? 'normal'};
  font-style: ${(props: TextProps) => props.fontStyle ?? 'normal'};
  color: ${(props: TextProps) => props.textColor ?? '#000'};
  text-align: ${(props: TextProps) => props.textAlign ?? 'left'};
`;
