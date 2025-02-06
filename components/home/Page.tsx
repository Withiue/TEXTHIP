// °¢ Carousel item ÇÏ³ª.
import React from 'react';
import { StyleSheet, Image, ImageStyle } from 'react-native';

type IPage = {
  item: {
    num: number;
    image: number;
  };
  style: ImageStyle;
}

export default function Page({ item, style }: IPage) {
  return (
    <Image style={[styles.pageImage, style]} source={item.image}/>
  );
}

const styles = StyleSheet.create({
  pageImage: {
    width: '100%',
    borderRadius: 20,
  },
});