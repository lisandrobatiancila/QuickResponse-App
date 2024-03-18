import { TouchableOpacity } from "react-native"
import * as S from './style';

type TouchableCardComponentProps = {
    children: React.ReactNode;
    padding?: number;
    width?: number;
    height?: number;
    margin?: string;
    onPressFirstAidInformation?: () => void;
}
export const TouchableCardComponent = (props: TouchableCardComponentProps) => {
    const {children, padding, width, height, margin, onPressFirstAidInformation} = props;

    return <S.TouchableCardContainer padding={padding} width={width} height={height} margin={margin}
        onPress={onPressFirstAidInformation}
    >
        {children}
    </S.TouchableCardContainer>
}