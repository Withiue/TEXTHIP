import { Text, View, StyleSheet, Pressable, Dimensions, Image } from 'react-native';

import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

const PlaceholderImage = require('@/assets/images/background-image.png');
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default function Share() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => alert('You pressed a TextHip button.')}>
          <Text style={styles.buttonLabel}>TextHip</Text>
        </Pressable>
        <Text>Share</Text>
        <Pressable onPress={() => alert('You pressed a Done button.')}>
          <Text style={styles.buttonLabel}>Done</Text>
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} />
      </View>
      <View style={styles.bottomButtonsContainer}>
        <Pressable onPress={() => alert('You pressed a save button.')}>
          <Text style={styles.buttonLabel}>save</Text>
        </Pressable>
        <Pressable onPress={() => alert('You pressed a share button.')}>
          <Text style={styles.buttonLabel}>share</Text>
        </Pressable>
      </View>
    </View>
  );
}

const MARGIN_RATIO = 0.0444;  // 16px / 360px
const GRID_MARGIN = windowWidth * MARGIN_RATIO;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    flex: 1 / 8,
  },
  imageContainer: {
    flex: 1,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: 'black',
    fontSize: 16,
  },
  bottomButtonsContainer: {
    flex: 1 / 6,
  },
});