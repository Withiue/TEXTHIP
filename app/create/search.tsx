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
  pubDate:Date; 
  isbn:string; 
  priceSales:number;
  publisher:string;  
}

const { width, height } = Dimensions.get("screen");
interface SearchScreenProps { //부모의 상태를 업데이트 해주는 상태
  onBookSelect:  (book: 
    { id: string;
      title: string; 
      author: string; 
      cover: string;
      pubDate:Date; 
      isbn:string; 
      priceSales:number;
      publisher:string;  
    } 
  ) => void;
}
const SearchScreen: React.FC<SearchScreenProps> = ({ onBookSelect }) => {
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
          <View style={[StyleSheet.absoluteFillObject, styles.modalBackground]}>
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
                      <TouchableOpacity onPress={() => {
                        onBookSelect(item);
                        setModalVisible(false); // 모달 닫기
                      }}>
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
   // width:"100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row", // 수평 정렬
    alignItems: "center", // 세로 중앙 정렬
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  searchInputContainer: {
    flex: 1, // 남은 공간을 검색창이 채우도록 설정
    justifyContent: "center",
    paddingHorizontal: width * 0.01,
    height: height * 0.06,
  },
  fakeInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    width: width * 0.06, // 검색 아이콘 크기
    height: width * 0.06,
    marginRight: width * 0.02,
  },
  searchPlaceholder: {
    fontSize: width * 0.04,
    color: "#888",
  },
  modalBackground: {
    ...StyleSheet.absoluteFillObject,
    //flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    justifyContent: "flex-start",
    width:"100%",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%", // 좌우로 꽉 채우기
    height: height*0.9, // 필요에 따라 조정
    // paddingHorizontal: width * 0.04, // 양쪽 패딩 추가
    // paddingVertical: height * 0.02, // 상하 패딩 추가
    zIndex:100,
  },
  modalInput: {
    fontSize: width * 0.045,
    borderBottomWidth: 1,
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
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04, // 양쪽 여백
  },
  bookCover: {
    width: width * 0.15, // 표지 크기 조정
    height: height * 0.1, // 표지 비율 유지
    marginRight: width * 0.03,
    borderRadius: 4, // 모서리 둥글게
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
