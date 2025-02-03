import React, { useState, useRef } from 'react';
import {Button, Image, View, StyleSheet} from 'react-native';
import Share from 'react-native-share';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import * as MediaLibrary from 'expo-media-library'; // 이미지 저장에 필요
import { captureRef } from 'react-native-view-shot'; // 이미지 저장에 필요

const ShareExample = () => {
  const PlaceholderImage = require('@/assets/images/background-image.png');
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  if (status === null) {
    requestPermission();
  }

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        format: "jpg",
        quality: 1.0,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert('Saved!');
      }
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.imageContainer}>  
        <View ref={imageRef} collapsable={false}>
          <Image source={PlaceholderImage} />
        </View>
        <Button onPress={onSaveImageAsync} title="Save" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ShareExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  }
});