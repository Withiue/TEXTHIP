import React, { useRef } from 'react';
import {TouchableOpacity, View, StyleSheet, Dimensions} from 'react-native';
import * as MediaLibrary from 'expo-media-library'; // 이미지 저장에 필요
import { captureRef } from 'react-native-view-shot'; // 이미지 저장에 필요

import CustomText from '@/components/CustomText';
import DownloadSvg from '@/utils/download';

const { width, height } = Dimensions.get('window');

const ShareExample = () => {
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
        alert('카드가 갤러리에 저장되었습니다.');
      }
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <TouchableOpacity style={[styles.button, {width: width * 0.43, height: height * 0.078125}]} onPress={onSaveImageAsync}>
        <DownloadSvg />
        <CustomText style={styles.text}>이미지 저장</CustomText>
    </TouchableOpacity>
  );
};

export default ShareExample;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    flexShrink: 0,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#1C1C1E',
    backgroundColor: '#1C1C1E',
  },
  text: {
    color: 'white',
    fontSize: 16,
  }
 });