// �� Carousel item �ϳ�.
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
    // ���⿡ Text�� ���� ��Ÿ���� �߰�
  },
});