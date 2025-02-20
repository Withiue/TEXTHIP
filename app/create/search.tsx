import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { searchBooks } from "./aladinApi";

const { width, height } = Dimensions.get("screen");

// ✅ SearchScreenProps 인터페이스 추가
interface SearchScreenProps {
  onBookSelect: (book: {
    id: string;
    title: string;
    author: string;
    cover: string;
    pubDate: Date;
    isbn: string;
    priceSales: number;
    publisher: string;
  }) => void;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  isSearchBarVisible?: boolean; // 🔥 검색창이 기본 UI에서 보일지 여부 (기본값 true)
}

const SearchScreen: React.FC<SearchScreenProps> = ({ onBookSelect, modalVisible, setModalVisible ,isSearchBarVisible=true}) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await searchBooks(query);
      setBooks(results);
    } catch (error) {
      console.error("도서 검색 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔥 검색창 (기본 UI에 항상 존재) */}
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.fakeInput}>
            <Image source={require("../../assets/icons/search.png")} style={styles.searchIcon} />
            <Text style={styles.searchPlaceholder}>제목, 저자, 출판사</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 🔥 팝업이 열릴 때만 모달 표시 */}
      {modalVisible && (
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          
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
                        onPress={() => {
                          onBookSelect(item);
                          setModalVisible(false);
                        }}
                      >
                        <View style={styles.bookItem}>
                          <Image source={{ uri: item.cover }} style={styles.bookCover} />
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
          
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  //팝업 전 
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.8,
    borderBottomColor: "black",
    width:"90%",
  },
  fakeInput: {
    flexDirection: "row",
    alignItems: "center",
    top:"0%",
    marginBottom: width *0.01, //막대랑 검색텍스트 사이 간격 
  },
  // 팝업 후 
  modalContainer: {
    alignSelf: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: "100%",
    height: "90%", // 푸터까지 덮도록 설정
    position: "absolute",
    bottom: 0,
  },  
   modalInput: {
     fontSize: width * 0.045,
     borderBottomWidth: 0.8,
     marginBottom: height * 0.02, //검색 결과 출력 후 검색 리스트와 검색 창 사이 간격 ,
     marginTop:"1%",
     width:"90%",
     height: "9%",
     alignSelf: "center" , //중앙 이동 
     paddingBottom:0,
   },
  container: {
    // width:"100%",
     flex: 1,
     backgroundColor: "#fff",
   },
 
   searchInputContainer: {
     flex: 1, // 남은 공간을 검색창이 채우도록 설정
     justifyContent: "center",
     height: height * 0.06,
   },


   searchPlaceholder: {
     fontSize: width * 0.04,
     color: "#888",
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
