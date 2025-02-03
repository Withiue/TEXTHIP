import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="white"
      />
      <View style={styles.header}>
        <Text style={styles.title}>Text Hip</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // iOS 노치 디자인 대응
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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