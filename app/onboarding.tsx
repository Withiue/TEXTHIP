import * as React from "react";
import { Dimensions, Text, View, StyleSheet, Image } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

import { OnboardingData, data } from "../data";
import StartButton from "@/components/onboarding/StartButton";

const { width, height } = Dimensions.get('window');

export default function Onboarding() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  // progress 값이 변경될 때 currentIndex 업데이트
  React.useEffect(() => {
    setCurrentIndex(Math.round(progress.value));
  }, [progress.value]);

  // 직접 페이지 변경 감지 함수
  const handleScroll = (index: number) => {
    setCurrentIndex(index);
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.carouselWrapper}>
      <Carousel
        ref={ref}
        loop={false}
        width={width}
        height={height * 0.728}
        enabled={true}
        data={data}
        onProgressChange={progress}
        onScrollEnd={(index) => handleScroll(index)}
        renderItem={({ index }) => (
          <View style={styles.slideContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{data[index].title}</Text>
              <Text style={styles.content}>{data[index].content}</Text>
            </View>
            
            <View style={styles.imageOuterContainer}>
              {index === 1 ? (
                  <View style={styles.templateGrid}>
                    {data[index].templateImages && data[index].templateImages.map((image, idx) => (
                      <View key={idx} style={styles.templateCardContainer}>
                        <Image source={image} style={styles.templateImage} />
                      </View>
                    ))}
                  </View>
                ) : (
                  <View style={styles.imageContainer}>
                    <Image source={data[index].image} style={styles.image} />
                  </View>
                )}
            </View>
          </View>
        )}
        />
      </View>

      <View style={styles.pagination}>
              <Pagination.Basic
                progress={progress}
                data={data}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                containerStyle={styles.paginationContainer}
                onPress={onPressPagination}
              />
      </View>

      <View style={styles.buttonContainer}>
      <StartButton 
        isLastPage={currentIndex === data.length - 1}
      />
      </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  carouselWrapper: {
    height: height * 0.73,
  },
  slideContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    justifyContent: 'space-between',
  },
  textContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "left",
    fontWeight: 700,
    color: '#1C1C1E',
    marginBottom: 8,
  },
  content: {
    textAlign: "left", 
    fontSize: 16,
    lineHeight: 20,
    color: '#1C1C1E',
    marginBottom: 24,
    fontWeight: 400,
  },
  imageOuterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  templateGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 5,
  },
  templateCardContainer: {
    width: width * 0.42,
    height: height * 0.25,
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#000',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  templateImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  pagination: {
    marginVertical: 30,
    alignItems: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: "#D1D1D6",
    borderRadius: 50,
  },
  activeDot: {
    width: 8,
    height: 8,
    backgroundColor: "#1C1C1E",
    borderRadius: 50,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  }
});