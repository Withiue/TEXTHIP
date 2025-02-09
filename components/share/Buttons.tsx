import React from "react";
import { View, StyleSheet, Dimensions, ImageSourcePropType } from "react-native";

import DownloadButton from "@/components/share/DownloadButton";
import ShareButton from "@/components/share/ShareButton";

const { width } = Dimensions.get('window');

interface ButtonsProps {
    imgPath: ImageSourcePropType;
}

const Buttons = ({ imgPath }: ButtonsProps) => {

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <DownloadButton imgPath={imgPath} />
                <ShareButton />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 48,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: width * 0.044, // 좌우 여백
    width: '100%',
}
});

export default Buttons;