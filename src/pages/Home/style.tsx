import {View} from 'react-native';
import styled from 'styled-components';

type HomeContainerProps = {
  display?: string;
  justifyContent?: string;
  height?: number;
};
export const HomeContainer = styled(View)<HomeContainerProps>`
  display: flex;
  justify-content: ${(props: HomeContainerProps) => props.justifyContent};
  height: ${(props: HomeContainerProps) => props.height}px;
`;
