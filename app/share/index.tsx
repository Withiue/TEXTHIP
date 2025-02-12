import React from 'react';
import { View, StyleSheet } from 'react-native';

import CardImage from '@/components/share/CardImage';
import Buttons from '@/components/share/Buttons';


export default function Share() {
  const imgPath = require('@/assets/images/legend169yellow.png');

  return (
    <View style={styles.container}>
      <CardImage imgPath={imgPath} />
      <Buttons imgPath={imgPath} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 24,
  },
});