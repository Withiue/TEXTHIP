import { View, StyleSheet } from 'react-native';

import ShareButtons from '@/components/share/ShareButtons';
import CardImage from '@/components/share/CardImage';

export default function Share() {
  return (
    <View style={styles.container}>
      <CardImage />
      <ShareButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});