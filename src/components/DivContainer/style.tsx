import {View} from 'react-native';
import styled from 'styled-components';

type DivContainerProps = {
  alignItems?: string;
  backgroundColor?: string;
  justifyContent?: string;
  display?: string;
  padding?: string;
  flexDirection?: string;
  width?: string;
};

export const DivContainer = styled(View)<DivContainerProps>`
  display: ${(props: DivContainerProps) => props.display};
  background: ${(props: DivContainerProps) => props.backgroundColor ?? '#FFF'};
  flex-direction: ${(props: DivContainerProps) => props.flexDirection};
  align-items: ${(props: DivContainerProps) => props.alignItems};
  justify-content: ${(props: DivContainerProps) => props.justifyContent};
  padding: ${(props: DivContainerProps) => props.padding ?? 0}px;
  width: ${(props: DivContainerProps) => props.width ?? '100'}%;
`;
