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
  const scrollX = useAnimatedValue(0); // 스크롤 위치를 추적
  const cardHeight = pageWidth * (16 / 9); // 카드 섹션의 높이를 너비 기준으로 계산 (16:9)
  const flatListRef = React.useRef<FlatList>(null);

  // pages prop이 변경될 때마다 첫 페이지로 스크롤
  useEffect(() => {
    setPage(0);
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  }, [pages]);

  function renderItem({ item, index }: { item: any; index: number }) {
    // scale(크기) 애니메이션 값 계산 (현재 페이지는 100%, 나머지는 75%)
    const scale = scrollX.interpolate({
      inputRange : [
        (index - 1) * (pageWidth + gap),  //이전 페이지
        index * (pageWidth + gap),        //현재 페이지
        (index + 1) * (pageWidth + gap),  //다음 페이지
      ],
      outputRange: [0.75, 1, 0.75],
      extrapolate: 'clamp', // 설정된 범위를 벗어나지 않음
    });
    
    return (
      <Animated.View>
        <Page item={item} style={{width: pageWidth, height: cardHeight, marginHorizontal: gap / 2} as ImageStyle} />
      </Animated.View>
    );
  }

  //onScroll 통해 focus된 page index 확인 가능
  //onScroll 하면 -1, +1 인덱스 크기가 scale 만큼 줄어들게 하고 싶음
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
    </View></View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});