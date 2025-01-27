import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { searchBooks } from "./aladinApi";
import { useRouter } from "expo-router";

interface BookItem {
  id: string;
  title: string;
  author: string;
  cover: string;
}

const {width,height} = Dimensions.get('screen');
const SearchScreen: React.FC = () => {
  const router = useRouter();
  // 화면 크기 가져오기
  const [query, setQuery] = useState(""); // 검색창에 입력된 검색어
  const [books, setBooks] = useState<BookItem[]>([]); // 검색 결과: 책 리스트
  const [loading, setLoading] = useState(false); // 검색 중 여부
  const [modalVisible, setModalVisible] = useState(false); // 모달 표시 여부
  const translateY = new Animated.Value(height * -0.2); // 초기 모달 위치: 화면 높이의 40%

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

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = ({ nativeEvent }: any) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationY > height * 0.1) {
        // 스와이프 거리 감지 (화면 높이의 10% 이상 아래로 스와이프하면 닫기)
        setModalVisible(false);
      } else {
        // 모달 원위치로 복귀
        Animated.spring(translateY, {
          toValue: height * 0.4, // 초기 위치로 복귀
          useNativeDriver: true,
        }).start();
      }
    }
  };

  return (
    <View style={[styles.container, { padding: width * 0.05 }]}>
      {/* 검색창 */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <TextInput
          style={[
            styles.input,
            { height: height * 0.06, fontSize: width * 0.04 },
          ]}
          placeholder="도서를 검색해보세요"
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      {/* 모달 */}
      {modalVisible && (
        <View style={styles.modalBackground}>
          <PanGestureHandler
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}
          >
            <Animated.View
              style={[
                styles.modalContainer,
                {
                  transform: [{ translateY: translateY }],
                  width: width, // 화면 전체 너비
                  height: height, // 화면 전체 높이
                },
              ]}
            >
              <TextInput
                style={styles.modalInput}
                placeholder="제목, 저자, 출판사 검색"
                value={query}
                onChangeText={setQuery}
                onSubmitEditing={handleSearch}
                autoFocus={true}
              />
              {loading ? (
                <Text style={[styles.loadingText, { fontSize: width * 0.04 }]}>
                  검색 중...
                </Text>
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
                      <View
                        style={[
                          styles.bookItem,
                          {
                            paddingVertical: height * 0.02,
                            paddingHorizontal: width * 0.03,
                          },
                        ]}
                      >
                        <Image
                          source={{ uri: item.cover }}
                          style={{
                            width: width * 0.12,
                            height: height * 0.09,
                            marginRight: width * 0.03,
                          }}
                        />
                        <View>
                          <Text
                            style={[
                              styles.title,
                              { fontSize: width * 0.045 },
                            ]}
                          >
                            {item.title}
                          </Text>
                          <Text
                            style={[
                              styles.author,
                              { fontSize: width * 0.035 },
                            ]}
                          >
                            {item.author}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              )}
            </Animated.View>
          </PanGestureHandler>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    backgroundColor: "#fff",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: height * 0.06, // 입력창 높이를 반응형으로 설정
    fontSize: width * 0.04, // 폰트 크기를 반응형으로 설정
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: width * 0.04, // 반응형으로 경계선 곡률 설정
    borderTopRightRadius: width * 0.04,
    width: width * 0.95, // 모달 너비를 화면 너비의 95%로 설정
    height: height * 0.8, // 모달 높이를 화면 높이의 80%로 설정
    alignSelf: "center", // 화면 중앙 정렬
    paddingHorizontal: width * 0.05, // 내부 여백 반응형 설정
    paddingVertical: height * 0.02,
  },
  modalInput: {
    borderColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: height * 0.02, // 반응형으로 여백 설정
    paddingHorizontal: width * 0.03,
    fontSize: width * 0.04, // 입력창 폰트 크기 반응형 설정
    height: height * 0.06,
  },
  loadingText: {
    textAlign: "center",
    marginVertical: height * 0.02, // 반응형으로 여백 설정
    fontSize: width * 0.04,
  },
  bookItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: height * 0.02, // 리스트 아이템의 상하 여백 반응형 설정
    paddingHorizontal: width * 0.03, // 리스트 아이템의 좌우 여백 반응형 설정
  },
  title: {
    fontWeight: "bold",
    fontSize: width * 0.045, // 제목 폰트 크기 반응형 설정
  },
  author: {
    color: "#555",
    fontSize: width * 0.035, // 저자 폰트 크기 반응형 설정
  },
});


export default SearchScreen;
