import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { 
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Page from './Page';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type ICarousel = {
  gap: number;
  offset: number;
  pages: any[];
  pageWidth: number;
}

export default function CardScroll({ pages, pageWidth, gap, offset }: ICarousel) {

  const cardHeight = pageWidth * (16 / 9);  // 카드 섹션의 높이를 너비 기준으로 계산 (16:9)

  const renderItem = ({ item, animationValue }: any) => {
    const animatedStyle = useAnimatedStyle(() => {
      const scale = interpolate(
        animationValue.value,
        [-1, 0, 1],
        [0.75, 1, 0.75]
      );

      return {
        transform: [{ scale }],
      };
    });

    return (
      <Animated.View style={[animatedStyle, { width: pageWidth }]}>
        <Page 
          item={item} 
          style={{
            width: pageWidth,
            height: cardHeight,
            marginHorizontal: gap / 2
          }}
        />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.carouselContainer, { height: cardHeight }]}>
        <Carousel
          loop={true}
          width={pageWidth + gap}
          height={cardHeight}
          data={pages}
          renderItem={renderItem}
          style={{
            width: SCREEN_WIDTH,
            height: cardHeight,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 30,
          }}
          snapEnabled={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  carouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});