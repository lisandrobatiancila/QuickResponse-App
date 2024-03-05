import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { COLOR_LISTS } from "../../constants/colors";

type CloseButtonProps = {
    width?: number;
    height?: number;
    padding?: number;
    backgroundColor?: string;
    borderRadius?: number;
};

export const CloseButtonContainer = styled(TouchableOpacity)<CloseButtonProps>`
    width: ${(props: CloseButtonProps) => props.width ?? 0}px;
    height: ${(props: CloseButtonProps) => props.height ?? 0}px;
    padding: ${(props: CloseButtonProps) => props.padding ?? 0}px;
    background-color: ${(props: CloseButtonProps) => props.backgroundColor ?? COLOR_LISTS.WHITE};
    border-radius: ${(props: CloseButtonProps) => props.borderRadius ?? 0}px;
`;
