import {View} from 'react-native';
import styled from 'styled-components';

type DivContainerProps = {
  alignItems?: string;
  justifyContent?: string;
  display?: string;
  padding?: string;
  flexDirection?: string;
};

export const DivContainer = styled(View)<DivContainerProps>`
  display: ${(props: DivContainerProps) => props.display};
  flex-direction: ${(props: DivContainerProps) => props.flexDirection};
  align-items: ${(props: DivContainerProps) => props.alignItems};
  justify-content: ${(props: DivContainerProps) => props.justifyContent};
  padding: ${(props: DivContainerProps) => props.padding ?? 0}px;
`;
