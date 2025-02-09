import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions, Image, ImageSourcePropType} from 'react-native';
import * as MediaLibrary from 'expo-media-library'; // 이미지 저장에 필요
import * as FileSystem from 'expo-file-system'; // 이미지 저장에 필요

import CustomText from '@/components/CustomText';
import DownloadSvg from '@/utils/download';

const { width, height } = Dimensions.get('window');

interface DownloadButtonProps {
  imgPath: ImageSourcePropType;
}

const DownloadButton = ({ imgPath }: DownloadButtonProps) => {
  const [status, requestPermission] = MediaLibrary.usePermissions();

  if (status === null) {
    requestPermission(); //갤러리 사용 동의 받기
  }

  //Andriod와 IOS의 보안 정책상 앱의 저장소에 다운받은 다음 갤러리로 이동시켜야 한다.
  const saveImage = async () => {
    try {
      const imageUri = Image.resolveAssetSource(imgPath).uri;
      
      // 먼저 이미지를 임시 다운로드
      const fileUri = `${FileSystem.cacheDirectory}temp_image.jpg`;
      const downloadResult = await FileSystem.downloadAsync(
        imageUri,
        fileUri
      );

      if (downloadResult.status === 200) {
        // 다운로드된 이미지를 갤러리에 저장
        const asset = await MediaLibrary.createAssetAsync(fileUri);
        if (asset) {
          alert('이미지가 갤러리에 저장되었습니다.');
        }
        // 임시 파일 삭제
        await FileSystem.deleteAsync(fileUri);
      }
    } catch (e) {
      console.log(e);
      alert('이미지 저장에 실패했습니다.');
    }
  };
  
  return (
    <TouchableOpacity 
      style={[styles.button, {width: width * 0.43, height: height * 0.078125}]} 
      onPress={saveImage}
      >
        <DownloadSvg />
        <CustomText style={styles.text}>이미지 저장</CustomText>
    </TouchableOpacity>
  );
};

export default DownloadButton;

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