import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import {Stack} from "expo-router";
export default function Header() {
  const { width, height } = useWindowDimensions(); // 화면 크기 가져오기
  const router = useRouter();
  const paddingHorizontal = width * 0.04; // 화면 너비의 4%를 padding으로 설정
  const paddingTop = height *0.04; // 화면 높이의 5%를 padding으로 설정
  const fontSize = width * 0.06; // 화면 너비의 6%를 글씨 크기로 설정
  const buttonSpacing = width * 0.035; // 버튼 간 간격 설정 (화면 크기 대비 비율)

  return (
    <View style={[styles.container, { paddingTop, paddingHorizontal }]}>
       <Stack.Screen options={{ headerShown: false }} />
      <Text style={[styles.logo, { fontSize }]}>Text Hip</Text>
      <View style={[styles.actions, { marginRight: paddingHorizontal }]}>
        <Text
          style={[styles.actionText, { marginRight: buttonSpacing }]}
          onPress={() => router.push("/")}
        >
          취소
        </Text>
        <Text
          style={styles.actionText}
          onPress={() => router.push("/")}
        >
          완료
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // 로고와 버튼 영역 간 간격 확보
    backgroundColor: "#fff",
  },
  logo: {
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    fontSize: 16,
    color: "#888",
  },
});
