import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';

export default function Header({ showHeaderContent = true, title = "Text Hip" }) {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="white"
      />
      {showHeaderContent && (
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // iOS 노치 디자인 대응
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
  },
  header: {
    height: 44, // iOS 기본 헤더 높이
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
});