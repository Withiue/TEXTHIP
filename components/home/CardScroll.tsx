import React, {useRef, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Animated,
} from 'react-native';

import Page from './Page';

type ICarousel = {
  gap: number;
  offset: number;
  pages: any[];
  pageWidth: number;
}

type ItemData = {
  index: number;
  id: string;
  title: string;
  image: number;
};

const DATA: ItemData[] = [
  {
    index: 1,
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image: require('@/assets/images/background-image.png'),
  },
];

export default function CardScroll({pages, pageWidth, pageHeight, gap, offset}: ICarousel) {
  const [page, setPage] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current; // ��ũ�� ��ġ�� ������
  
  function renderItem({ item, index }: { item: any; index: number }) {
    // ���� �������� �ִϸ��̼� �� ���
    const inputRange = [
      (index - 1) * (pageWidth + gap), // ���� ������
      index * (pageWidth + gap),       // ���� ������
      (index + 1) * (pageWidth + gap), // ���� ������
    ];

    // ũ�� �ִϸ��̼� �� ��� (���� �������� 100%, �������� 75%)
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [pageHeight * 0.75, pageHeight, pageHeight * 0.75],
      extrapolate: 'clamp', // ������ ������ ����� ����
    });
    
    return (
      <Page item={item} style={{width: pageWidth, marginHorizontal: gap / 2}} />
    );
  }

  //onScroll ���� focus�� page index Ȯ�� ����
  const onScroll = (e: any) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setPage(newPage);
  };

  return (
    <View style={styles.container}>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2, // page�� ���� margin
        }}
        data={pages}
        horizontal
        keyExtractor={(item: any) => `page__${item.color}`}
        onScroll={onScroll}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        pagingEnabled // ������ �̵� ���� ����ϰ�
        decelerationRate="fast" // ������ �̵� ���� ����ϰ�
        snapToInterval={pageWidth + gap} // ������ �̵� ���� ����ϰ�
        snapToAlignment="start" // ������ �̵� ���� ����ϰ�
        scrollEventThrottle={16} // �ε巯�� �ִϸ��̼��� ���� ����
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});