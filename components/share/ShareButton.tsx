import React, { useRef } from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Share from 'react-native-share';

import CustomText from '../CustomText';
import UploadSvg from '@/utils/upload';

const { width, height } = Dimensions.get('window');

const ShareExample = () => {
  const PlaceholderImage = require('@/assets/images/background-image.png');
  const imageRef = useRef<View>(null);

  return (
    <TouchableOpacity style={[styles.button, {width: width * 0.43, height: height * 0.078125}]} onPress={() => {}}>
        <UploadSvg />
        <CustomText style={styles.text}>공유</CustomText>
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