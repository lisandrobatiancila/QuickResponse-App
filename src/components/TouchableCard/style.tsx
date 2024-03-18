import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { COLOR_LISTS } from "../../constants/colors";

type TouchableCardContainerProps = {
    backgroundColor?: string;
    padding?: number;
    width?: number;
    height?: number;
    margin?: string;
}

export const TouchableCardContainer = styled(TouchableOpacity)<TouchableCardContainerProps>`
    background-color: ${(props: TouchableCardContainerProps) => props.backgroundColor ?? COLOR_LISTS.WHITE};
    padding: ${(props: TouchableCardContainerProps) => props.padding ?? 0}px;
    width: ${(props: TouchableCardContainerProps) => props.width ?? 'auto'}px;
    height: ${(props: TouchableCardContainerProps) => props.height ?? 'auto'}px;
    margin: ${(props: TouchableCardContainerProps) => props.margin ?? 0}px;
`;