import React, { useState } from 'react';
import { View, StyleSheet, Button, Dimensions } from 'react-native';
import { router } from 'expo-router';

import CardScroll from '@/components/home/CardScroll';
import ThemeGallery from '@/components/home/ThemeGallery';

const { width } = Dimensions.get('window');
const PAGES = [
  {
    num: 1,
    color: '#86E3CE',
    image: require('@/assets/images/legend169yellow.png'),
  },
  {
    num: 2,
    color: '#D0E6A5',
    image: require('@/assets/images/legend169yellow.png'),
  },
  {
    num: 3,
    color: '#FFDD94',
    image: require('@/assets/images/legend169yellow.png'),
  },
  {
    num: 4,
    color: '#FA897B',
    image: require('@/assets/images/legend169yellow.png'),
  },
  {
    num: 5,
    color: '#CCABD8',
    image: require('@/assets/images/legend169yellow.png'),
  },
];

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState('best');

  const handleThemeSelect = (themeId: React.SetStateAction<string>) => {
    setSelectedTheme(themeId);
    // CardScroll 컴포넌트에 선택된 테마 전달
  };

  return (
    <View style={styles.container}>
      <CardScroll 
        gap={width * 0.05} // 화면 너비의 5%
        offset={width * 0.2} // 화면 너비의 20%
        pages={PAGES}
        pageWidth={width * (1 - (0.05 + 0.2) * 2)}
         />
      <View>
        <Button
          title="제작하기"
          onPress={() => router.push('/create/card')}
        />
      </View>
      <ThemeGallery 
        selectedTheme={selectedTheme}
        onThemeSelect={handleThemeSelect}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});