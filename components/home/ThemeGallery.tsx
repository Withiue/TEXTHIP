// ThemeGallery.tsx
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

const themes = [
  {
    id: 'best',
    title: 'best book',
    image: require('@/assets/images/background-image.png')
  },
  {
    id: 'time',
    title: 'time book',
    image: require('@/assets/images/background-image.png')
  },
  {
    id: 'wishlist',
    title: 'wish book',
    image: require('@/assets/images/background-image.png')
  },
  {
    id: 'quote',
    title: 'quote',
    image: require('@/assets/images/background-image.png')
  }
];

const ThemeGallery = ({ onThemeSelect, selectedTheme }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Look Around</Text>
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
            <Text style={styles.themeTitle}>{theme.title}</Text>
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
    fontWeight: 'bold',
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