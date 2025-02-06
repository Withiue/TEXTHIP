// ThemeGallery.tsx
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import CustomText from '../CustomText';
import { ThemeId } from '@/data/themeData';

type ThemeGalleryProps = {
  onThemeSelect: (themeId: ThemeId) => void;
  selectedTheme: ThemeId;
};

const themes: Array<{
  id: ThemeId;
  title: string;
  image: any;
}> = [
  {
    id: 'legend',
    title: '인생책 추천',
    image: require('@/assets/images/legend169yellow.png')
  },
  {
    id: 'period',
    title: '기간별 추천',
    image: require('@/assets/images/period169purple.png')
  },
  {
    id: 'want',
    title: '읽고 싶은 책',
    image: require('@/assets/images/want169pink.png')
  },
  {
    id: 'line',
    title: '책 속 한 줄',
    image: require('@/assets/images/line169yellow.png')
  }
];

const ThemeGallery: React.FC<ThemeGalleryProps> = ({ onThemeSelect, selectedTheme }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>둘러보기</CustomText>
      <View style={styles.gallery}>
        {themes.map((theme) => (
          <TouchableOpacity
            key={theme.id}
            style={[
              styles.themeContainer,
              selectedTheme === theme.id && styles.selectedTheme
            ]}
            onPress={() => onThemeSelect(theme.id)}
          >
            <Image source={theme.image} style={styles.themeImage} />
            <CustomText style={styles.themeTitle}>{theme.title}</CustomText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 12,
  },
  gallery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  themeContainer: {
    width: '23%',
    marginBottom: 10,
  },
  selectedTheme: {
    borderWidth: 2,
    borderColor: '#2952e3',
    borderRadius: 8,
  },
  themeImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  themeTitle: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  }
});

export default ThemeGallery;