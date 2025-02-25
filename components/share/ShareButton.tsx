import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import * as Sharing from 'expo-sharing';
import { Asset } from 'expo-asset';

import CustomText from '../CustomText';
import UploadSvg from '@/utils/upload';

const { width, height } = Dimensions.get('window');

const ShareButton = () => {
  const imgPath = require('@/assets/images/cards/legend169example.png');

  const onShare = async () => {
    try {
      const isAvailable = await Sharing.isAvailableAsync();
      
      if (!isAvailable) {
        throw new Error('공유 기능을 사용할 수 없습니다.');
      }

      // 이미지를 임시 파일로 복사
      const asset = Asset.fromModule(imgPath);
      await asset.downloadAsync();
      
      const localUri = asset.localUri;
      if (!localUri) {
        throw new Error('이미지를 불러올 수 없습니다.');
      }

      // Android 공유 옵션
      const shareOptions = {
        dialogTitle: '이미지 공유하기',
        mimeType: 'image/jpeg'
      };

      await Sharing.shareAsync(localUri, shareOptions);
    } catch (error) {
      console.error('Share failed:', error);
    }
  };

  if (Platform.OS !== 'android') return null;

  return (
    <TouchableOpacity 
      style={[styles.button, {width: width * 0.43, height: height * 0.078125}]} 
      onPress={onShare}
    >
      <UploadSvg />
      <CustomText style={styles.text}>공유</CustomText>
    </TouchableOpacity>
  );
};

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

export default ShareButton;