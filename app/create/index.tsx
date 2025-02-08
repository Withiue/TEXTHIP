import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions,SafeAreaView } from "react-native";
import Header from "./header";
import {Stack} from "expo-router";
import CreateCard from "./CreateCard";
import  { useFonts } from 'expo-font';

const CreatePage: React.FC = () => {

  const [fontsLoaded] = useFonts({
    "SUIT-Thin": require("../../assets/fonts/SUIT-Thin.ttf"),
    "SUIT-ExtraLight": require("../../assets/fonts/SUIT-ExtraLight.ttf"),
    "SUIT-Light": require("../../assets/fonts/SUIT-Light.ttf"),
    "SUIT-Regular": require("../../assets/fonts/SUIT-Regular.ttf"),
    "SUIT-Medium": require("../../assets/fonts/SUIT-Medium.ttf"),
    "SUIT-SemiBold": require("../../assets/fonts/SUIT-SemiBold.ttf"),
    "SUIT-Bold": require("../../assets/fonts/SUIT-Bold.ttf"),
    "SUIT-ExtraBold": require("../../assets/fonts/SUIT-ExtraBold.ttf"),
    "SUIT-Heavy": require("../../assets/fonts/SUIT-Heavy.ttf"),
  });
  if (!fontsLoaded) {
    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Loading Fonts...</Text>
    </View>;
  }
  const [selectedBook, setSelectedBook] = useState<{
    id: string;
    title: string;
    author: string; 
    cover: string; 
    pubDate:Date; 
    isbn:string; 
    priceSales:number;
    publisher:string; 
  } | null>(null);


  return (
    <SafeAreaView style={styles.safeContainer} >
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        {/* Header에 검색 결과 업데이트 함수 전달 */}
        <Header setSelectedBook={setSelectedBook} />
        {/* CreateCard에 선택된 책 데이터 전달 */}
        <CreateCard selectedBook={selectedBook} fontsLoaded={fontsLoaded} />
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
    paddingBottom: 10, // 하단 여백 추가
  },
 
});

export default CreatePage;