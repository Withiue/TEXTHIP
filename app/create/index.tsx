import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import Header from "./header";
import { Stack } from "expo-router";
import CreateCard from "./CreateCard";
import SearchScreen from "./search";

const { width, height } = Dimensions.get("screen");

const CreatePage: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<{
    id: string;
    title: string;
    author: string;
    cover: string;
    pubDate: Date;
    isbn: string;
    priceSales: number;
    publisher: string;
  } | null>(null);

  // 🔥 검색 모달 상태 추가
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <Header setSelectedBook={setSelectedBook} />

        {/* 🔥 기본 UI에 검색창을 추가 (Header 밑으로 배치) */}
        <View style={styles.searchContainer}>
          <SearchScreen
            onBookSelect={(book) => {
              setSelectedBook(book);
              setModalVisible(false);
            }}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            isSearchBarVisible={true} // 기본 UI에서는 검색창만 표시
          />
        </View>

        {/* 🔥 모달이 열릴 때만 전체화면 검색창 표시 */}
        {modalVisible && (
          <View style={styles.modalBackground}>
            <SearchScreen
              onBookSelect={(book) => {
                setSelectedBook(book);
                setModalVisible(false);
              }}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              isSearchBarVisible={false} // 모달에서는 검색창 없이 검색 결과만 표시
            />
          </View>
        )}

        {/* CreateCard: 검색 결과 반영 */}
        <CreateCard selectedBook={selectedBook} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    marginTop: height * 0.07, // 🔥 Header와 겹치지 않도록 조정
    width: "100%",
    alignItems: "center",
    position: "absolute",
    zIndex:3,
  },
  modalBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // 배경 흐리게
    justifyContent: "flex-end", // 팝업을 아래에서 뜨도록
    zIndex: 100,
  },
});

export default CreatePage;
