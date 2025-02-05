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
  const scrollX = useRef(new Animated.Value(0)).current; // 스크롤 위치를 추적적
  
  function renderItem({ item, index }: { item: any; index: number }) {
    // 현재 아이템의 애니메이션 값 계산
    const inputRange = [
      (index - 1) * (pageWidth + gap), // 이전 페이지
      index * (pageWidth + gap),       // 현재 페이지
      (index + 1) * (pageWidth + gap), // 다음 페이지
    ];

    // 크기 애니메이션 값 계산 (현재 페이지는 100%, 나머지는 75%)
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [pageHeight * 0.75, pageHeight, pageHeight * 0.75],
      extrapolate: 'clamp', // 설정된 범위를 벗어나지 않음
    });
    
    return (
      <Page item={item} style={{width: pageWidth, marginHorizontal: gap / 2}} />
    );
  }

  //onScroll 통해 focus된 page index 확인 가능
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
          paddingHorizontal: offset + gap / 2, // page의 양쪽 margin
        }}
        data={pages}
        horizontal
        keyExtractor={(item: any) => `page__${item.color}`}
        onScroll={onScroll}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        pagingEnabled // 페이지 이동 단위 깔끔하게
        decelerationRate="fast" // 페이지 이동 단위 깔끔하게
        snapToInterval={pageWidth + gap} // 페이지 이동 단위 깔끔하게
        snapToAlignment="start" // 페이지 이동 단위 깔끔하게
        scrollEventThrottle={16} // 부드러운 애니메이션을 위한 설정
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