import React from 'react-native';
import * as S from './style';
type DividerProps = {
  margin: string;
};
export default function DividerComponent(props: DividerProps) {
  const {margin} = props;
  return <S.DividerContainer margin={margin} />;
}
