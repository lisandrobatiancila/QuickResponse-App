import {TextInput} from 'react-native-paper';
import styled from 'styled-components';

type TextInputContainerProps = {
  borderRadius?: number;
};
export const TextInputContainer = styled(TextInput)<TextInputContainerProps>`
  border-radius: ${(props: TextInputContainerProps) =>
    props.borderRadius ?? 0}px;
`;
