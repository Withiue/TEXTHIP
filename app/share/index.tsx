import { View, StyleSheet } from 'react-native';

import CardImage from '@/components/share/CardImage';
import Buttons from '@/components/share/Buttons';


export default function Share() {
  return (
    <View style={styles.container}>
      <CardImage />
      <Buttons />
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