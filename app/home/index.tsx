import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { router } from 'expo-router';

import CardScroll from '@/components/home/CardScroll';
import ThemeGallery from '@/components/home/ThemeGallery';

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState('best');

  const handleThemeSelect = (themeId) => {
    setSelectedTheme(themeId);
    // CardScroll 컴포넌트에 선택된 테마 전달
  };

  return (
    <View style={styles.container}>
      <CardScroll theme={selectedTheme} />
      <View>
        <Button
          title="Make a Card"
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