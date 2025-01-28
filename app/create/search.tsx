import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { searchBooks } from "./aladinApi";
import { useRouter } from "expo-router";

interface BookItem {
  id: string;
  title: string;
  author: string;
  cover: string;
}

const { width, height } = Dimensions.get("screen");

const SearchScreen: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState(""); // 검색창에 입력된 검색어
  const [books, setBooks] = useState<BookItem[]>([]); // 검색 결과: 책 리스트
  const [loading, setLoading] = useState(false); // 검색 중 여부
  const [modalVisible, setModalVisible] = useState(false); // 모달 표시 여부

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await searchBooks(query); // 알라딘 API 호출
      setBooks(results); // 검색 결과 저장
    } catch (error) {
      console.error("도서 검색 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "android" ? undefined : "padding"}
      keyboardVerticalOffset={height * 0.1} // 적절한 높이 조정
    >
      {/* 상단 검색창 */}
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.searchInputContainer}
          onPress={() => setModalVisible(true)}
        >
          <View style={styles.fakeInput}>
            <Image
              source={require("../../assets/icons/search.png")}
              style={styles.searchIcon}
            />
            <Text style={styles.searchPlaceholder}>제목, 저자, 출판사</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 모달 */}
      {modalVisible && (
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalBackground}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.modalContainer}>
                <TextInput
                  style={styles.modalInput}
                  placeholder="제목, 저자, 출판사 검색"
                  value={query}
                  onChangeText={setQuery}
                  onSubmitEditing={handleSearch}
                  autoFocus
                />
                {loading ? (
                  <Text style={styles.loadingText}>검색 중...</Text>
                ) : (
                  <FlatList
                    data={books}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() =>
                          router.push({
                            pathname: "/create",
                            params: {
                              id: item.id,
                              title: item.title,
                              author: item.author,
                              cover: item.cover,
                            },
                          })
                        }
                      >
                        <View style={styles.bookItem}>
                          <Image
                            source={{ uri: item.cover }}
                            style={styles.bookCover}
                          />
                          <View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.author}>{item.author}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.04,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: height * 0.02,
  },
  searchInputContainer: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.03,
    height: height * 0.06,
    justifyContent: "center",
  },
  fakeInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    width: width * 0.05,
    height: width * 0.05,
    marginRight: width * 0.02,
  },
  searchPlaceholder: {
    fontSize: width * 0.04,
    color: "#888",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: width * 0.04,
    height: height *0.8, // 모달 높이 제한
  },
  modalInput: {
    fontSize: width * 0.045,
    borderBottomWidth: 1,
    //borderBottomColor: "#ccc",
    marginBottom: height * 0.02,
  },
  loadingText: {
    textAlign: "center",
    marginVertical: height * 0.02,
  },
  bookItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: height * 0.02,
  },
  bookCover: {
    width: width * 0.12,
    height: height * 0.09,
    marginRight: width * 0.03,
  },
  title: {
    fontWeight: "bold",
    fontSize: width * 0.045,
  },
  author: {
    fontSize: width * 0.035,
    color: "#555",
  },
});

export default SearchScreen;
