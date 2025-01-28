import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions,SafeAreaView } from "react-native";
import Header from "./header";
import {Stack} from "expo-router";
import CreateCard from "./CreateCard";

const CreatePage: React.FC = () => {
  const { width } = useWindowDimensions(); // 현재 화면의 너비

  const imageSize = width * 0.6; // 화면 너비의 60%로 이미지 크기 설정

  return (
    <SafeAreaView style={styles.safeContainer} >
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <Header />
        <CreateCard/>
      </View>
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff", // 전체 배경색 설정,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center", // 세로 방향 중앙 정렬
    alignItems: "center", // 가로 방향 중앙 정렬
    paddingBottom: 32, // 하단 여백 추가
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    textAlign: "center",
  },
});

export default CreatePage;