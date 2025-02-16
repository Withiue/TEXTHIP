import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from "react-native-svg"
// 모듈 불러오기

export default function EditSvg() {
  return (
    <View style={styles.container}>
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path d="M2.32916 14.5458V17.6708H5.45416L14.6708 8.4541L11.5458 5.3291L2.32916 14.5458ZM17.6708 5.4541L14.5458 2.3291L12.4375 4.44577L15.5625 7.57077L17.6708 5.4541Z" fill="white"/>
        </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});