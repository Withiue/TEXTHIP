import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import CardScroll from '@/components/home/CardScroll';
import ThemeGallery from '@/components/home/ThemeGallery';
import { themeImages, ThemeId } from '@/data/themeData';
import GoCardButton from '@/components/home/GoCardButton';

const { width, height } = Dimensions.get('window');

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeId>('legend');

  const handleThemeSelect = (themeId: ThemeId) => {
    setSelectedTheme(themeId); // CardScroll 컴포넌트에 선택된 테마 전달
  };

  return (
    <View style={styles.container}>
      <CardScroll 
        gap={width * 0.05} // 화면 너비의 5%
        offset={width * 0.2} // 화면 너비의 20%
        pages={themeImages[selectedTheme]}
        pageWidth={width * (1 - (0.05 + 0.2) * 2)}
         />
      <GoCardButton
        buttonWidth={width * 0.305}
        buttonHeight={height * 0.05625}
      />
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