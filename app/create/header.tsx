import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Header() {
  const [searchText, setSearchText] = useState(""); // 검색어 상태
  const router = useRouter();

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      //router.push(`/search?query=${encodeURIComponent(searchText)}`); // 검색 페이지로 이동
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGO</Text>
      <View style={styles.actions}>
        <Text style={styles.actionText} onPress={() => router.push("/")}>
          취소
        </Text>
        <Text style={styles.actionText} onPress={() => router.push("/")}>
          완료
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="제목, 저자, 출판사 검색"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={handleSearch} // 엔터 키 입력 시 검색
        returnKeyType="search" // 키패드에 '검색' 표시
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50, // 상태바 공간
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 8,
  },
  actionText: {
    fontSize: 16,
    marginLeft: 16,
    color: "#888",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    fontSize: 16,
    paddingVertical: 8,
  },
});
