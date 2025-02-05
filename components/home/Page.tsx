// 각 Carousel item 하나.
import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

type IPage = {
  item: {
    num: number;
    color: string;
  };
  style: ViewStyle;
}

export default function Page({ item, style }: IPage) {
  return (
    <View style={[styles.pageItem, { backgroundColor: item.color }, style]}>
      <Text style={styles.pageNum}>{item.num}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pageItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  pageNum: {
    // 여기에 Text에 대한 스타일을 추가
  },
});