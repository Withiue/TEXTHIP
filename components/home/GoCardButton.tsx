import { router } from "expo-router";
import { TouchableOpacity, StyleSheet } from "react-native";

import CustomText from '@/components/CustomText';
import EditSvg from '@/components/home/EditSvg';

type IButton = {
    buttonWidth: number;
    buttonHeight: number;
}

export default function GoCardButton({buttonWidth, buttonHeight}: IButton) {
    return (
      <TouchableOpacity
        style={[styles.button, {width: buttonWidth, height: buttonHeight}]}
        onPress={() => router.push('/create/card')}
        >
        <EditSvg />
        <CustomText style={styles.text}>제작하기</CustomText>
      </TouchableOpacity>
    )
}

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