import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import Footer from "./footer";

const { width, height } = Dimensions.get("screen");

// 이미지 경로 매핑
const imagePaths: Record<string, any> = {
  "인생책1:10": require("../../assets/images/cards/legend110.png"),
  "인생책4:50": require("../../assets/images/cards/legend450.png"),
  "인생책16:90": require("../../assets/images/cards/legend1690.png"),
  // 추가 이미지 경로...
};
interface CreateCardProps {
  selectedBook: { id: string; title: string; author: string; cover: string } | null;
}
const backgrounds = ["#FFFFFF", "#C1FFD7", "#D1D1FF", "#FFE6C1"];

const CreateCard: React.FC<CreateCardProps> = ({ selectedBook }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("인생책");
  const [selectedRatio, setSelectedRatio] = useState("1:1");
  const [selectedBackground, setSelectedBackground] = useState(0);

  // 이미지 키 계산
  const currentImageKey = `${selectedTemplate}${selectedRatio}${selectedBackground}`;
  const currentImage = imagePaths[currentImageKey];

  return (
    <View style={[styles.container ]}>
        {selectedBook ? (
          <>
            <Image source={{ uri: selectedBook.cover }} style={styles.bookCover} />
            <Text style={styles.title}>{selectedBook.title}</Text>
            <Text style={styles.author}>{selectedBook.author}</Text>
          </>
        ) : (
          <Text style={styles.placeholder}>책을 검색하고 선택하세요.</Text>
        )}

      <View style={styles.imageContainer}>
        {currentImage ? (
          <Image source={currentImage} style={styles.image} />
        ) : (
          <Text>이미지를 찾을 수 없습니다.</Text>
        )}
      </View>

      {/* Footer 컴포넌트 */}
      <Footer
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        selectedRatio={selectedRatio}
        setSelectedRatio={setSelectedRatio}
        selectedBackground={selectedBackground}
        setSelectedBackground={setSelectedBackground}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    height: height * 0.5,
    resizeMode: "contain",
  },
  placeholder: {
    fontSize: 16,
    color: "#aaa",
  },
  bookCover: {
    width: width * 0.4,
    height: width * 0.6,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  author: {
    fontSize: 16,
    color: "#555",
  },
});

export default CreateCard;
