import { router } from "expo-router";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";

import CustomText from '@/components/CustomText';

const { width, height } = Dimensions.get('window');

export default function StartButton({ isLastPage = false }) {
    return (
      <TouchableOpacity
        style={[
          styles.button, 
          isLastPage ? styles.activeButton : styles.inactiveButton
        ]}
        onPress={() => router.push('/home')}
        disabled={!isLastPage}
      >
        <CustomText style={styles.text}>시작하기</CustomText>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      width: width * 0.91,
      height: width * 0.91 * 0.164,
      display: 'flex',
      padding: 14,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#D1D1D6',
    },
    activeButton: {
      backgroundColor: '#1C1C1E',
    },
    inactiveButton: {
      backgroundColor: '#D1D1D6',
    },
    text: {
      color: 'white',
      fontSize: 16,
      fontWeight: 600,
    }
   });