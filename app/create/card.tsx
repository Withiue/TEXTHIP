
import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Card: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/lineBook1.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>윤짜요's 책 속 한 줄</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: width * 0.8,
    height: (width * 0.8 * 9) / 16, // 이미지 비율 16:9
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    position: "absolute", // 이미지 위에 텍스트를 배치
    top: "4%", // 이미지 컨테이너의 상단에서 10%
    left: "30%", // 이미지 컨테이너의 왼쪽에서 5%
    transform: [{ rotate: "-6deg" }], // 글씨를 -4도 회전
    fontSize: width * 0.015,
    fontWeight: "bold",
    color: "#000", 
    padding: 5, 
    borderRadius: 5, 
  },
});

export default Card;
