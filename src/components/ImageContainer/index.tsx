import React from 'react';
import {Image} from 'react-native';

type ImageComponentProps = {
  imageSrc: any;
  width?: number;
  height?: number;
  borderRadius?: number;
};
export default function ImageComponent(props: ImageComponentProps) {
  const {borderRadius, imageSrc, width, height} = props;

  return (
    <Image
      source={imageSrc}
      style={{width: width, height: height, borderRadius: borderRadius}}
    />
  );
}
