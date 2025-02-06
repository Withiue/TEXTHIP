import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Animated,
  useAnimatedValue,
  ImageStyle,
} from 'react-native';

import Page from './Page';

type ICarousel = {
  gap: number;
  offset: number;
  pages: any[];
  pageWidth: number;
}

export default function CardScroll({pages, pageWidth, gap, offset}: ICarousel) {
  const [page, setPage] = useState(0);
  const scrollX = useAnimatedValue(0); // ��ũ�� ��ġ�� ����
  const cardHeight = pageWidth * (16 / 9); // ī�� ������ ���̸� �ʺ� �������� ��� (16:9)
  const flatListRef = React.useRef<FlatList>(null);

  // pages prop�� ����� ������ ù �������� ��ũ��
  useEffect(() => {
    setPage(0);
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  }, [pages]);

  function renderItem({ item, index }: { item: any; index: number }) {
    // scale(ũ��) �ִϸ��̼� �� ��� (���� �������� 100%, �������� 75%)
    const scale = scrollX.interpolate({
      inputRange : [
        (index - 1) * (pageWidth + gap),  //���� ������
        index * (pageWidth + gap),        //���� ������
        (index + 1) * (pageWidth + gap),  //���� ������
      ],
      outputRange: [0.75, 1, 0.75],
      extrapolate: 'clamp', // ������ ������ ����� ����
    });
    
    return (
      <Animated.View>
        <Page item={item} style={{width: pageWidth, height: cardHeight, marginHorizontal: gap / 2} as ImageStyle} />
      </Animated.View>
    );
  }

  //onScroll ���� focus�� page index Ȯ�� ����
  //onScroll �ϸ� -1, +1 �ε��� ũ�Ⱑ scale ��ŭ �پ��� �ϰ� ����
  const onScroll = (e: any) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setPage(newPage);
  };

  return (
    <View style={styles.outerContainer}>
    <View style={{ height: cardHeight }}>
      <FlatList
        ref={flatListRef}
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
    </View></View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});