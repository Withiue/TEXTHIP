import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import SearchScreen from "./search";

const { width, height } = Dimensions.get("screen");
interface HeaderProps {
  setSelectedBook:
   (book: 
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

const Header: React.FC<HeaderProps> = ({ setSelectedBook }) => {


  return (
    <View style={styles.container}>
      {/* 상단 로고와 버튼 */}
      <View style={styles.topRow}>
        <Text style={styles.logo}>Text Hip</Text>
        <View style={styles.actions}>
          <TouchableOpacity>
            <Text style={styles.actionText}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.actionText}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* 검색 바 */}
      <View style={styles.searchRow}>
        <SearchScreen onBookSelect={setSelectedBook} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    position: "absolute", // 절대 위치 설정
    top: "2%", // 화면 상단에 배치
    paddingHorizontal: width * 0.05,
    zIndex: 10, // z-index로 우선 순위 설정
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  logo: {
    fontSize: width * 0.06,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.04, // 버튼 간 간격
  },
  actionText: {
    fontSize: width * 0.045,
    color: "#555",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.04,
  },
 
});

export default Header;