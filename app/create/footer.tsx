import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";

const templates = ["인생책", "기간별", "읽고싶은책", "책속한줄"];
const ratios = ["1:1", "4:5", "16:9"];
const backgrounds = [
  require("../../assets/icons/colorChoice/grey.png"), // 배경 아이콘 이미지
  require("../../assets/icons/colorChoice/pink.png"),
  require("../../assets/icons/colorChoice/orange.png"),
  require("../../assets/icons/colorChoice/yellow.png"),
  require("../../assets/icons/colorChoice/purple.png"),
];


interface FooterProps {
  selectedTemplate: string;
  setSelectedTemplate: React.Dispatch<React.SetStateAction<string>>;
  selectedRatio: string;
  setSelectedRatio: React.Dispatch<React.SetStateAction<string>>;
  selectedBackground: number;
  setSelectedBackground: React.Dispatch<React.SetStateAction<number>>;
}

const { width, height } = Dimensions.get('screen');

const Footer: React.FC<FooterProps> = ({
  selectedTemplate,
  setSelectedTemplate,
  selectedRatio,
  setSelectedRatio,
  selectedBackground,
  setSelectedBackground,
}) => {
  const [activeCategory, setActiveCategory] = useState<"ratio" | "template" | "background" | null>(null);
 // 화면 크기 가져오기
  const buttonWidth = Math.min(width * 0.2, 100); // 버튼 너비를 화면 크기에 비례하여 설정, 최대 100


  const renderOptions = () => {
    if (activeCategory === "ratio") {
      return ratios.map((ratio) => (
        <TouchableOpacity
          key={ratio}
          style={[styles.button, selectedRatio === ratio && styles.selectedButton, { width: buttonWidth }]}
          onPress={() => setSelectedRatio(ratio)}
        >
          <Text style={styles.buttonText}>{ratio}</Text>
        </TouchableOpacity>
      ));
    }
    if (activeCategory === "template") {
      return templates.map((template) => (
        <TouchableOpacity
          key={template}
          style={[styles.button, selectedTemplate === template && styles.selectedButton, { width: buttonWidth }]}
          onPress={() => setSelectedTemplate(template)}
        >
        {template==="인생책" &&(
          <Text style={styles.buttonText}>인생책 추천</Text>
        )}
          
        {template==="기간별" &&(
          <Text style={styles.buttonText}>기간별 추천</Text>
        )}
          
        {template==="읽고싶은책" &&(
          <Text style={styles.buttonText}>읽고 싶은 책</Text>
        )}
          
        {template==="책속한줄" &&(
          <Text style={styles.buttonText}>책 속 한 줄</Text>
        )}
          
        </TouchableOpacity>
      ));
    }
    if (activeCategory === "background") {
      return backgrounds.map((icon, index) => (
        <TouchableOpacity
          key={index}
          style={[
          styles.iconButton,selectedBackground === index && styles.selectedIcon]}
          onPress={() => setSelectedBackground(index)}
        >
          <Image source={icon} style={styles.icon}/>
        </TouchableOpacity>
      ));
    }
    return null;
  };

  return (
    <>

      <View style={styles.container}>
      {/* 상위 카테고리 버튼 */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={() => setActiveCategory("ratio")}>
          <Text style={[styles.categoryButton, activeCategory === "ratio" && styles.activeCategory]}>비율</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveCategory("template")}>
          <Text style={[styles.categoryButton, activeCategory === "template" && styles.activeCategory]}>템플릿</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveCategory("background")}>
          <Text style={[styles.categoryButton, activeCategory === "background" && styles.activeCategory]}>배경</Text>
        </TouchableOpacity>
      </View>

      {/* 하위 카테고리 옵션 */}
      <View style={styles.optionsContainer}>{renderOptions()}</View>
    </View>
    </>

  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(28, 28, 30, 1)",
    justifyContent: "space-between", // 위와 아래에 요소 배치
    bottom:0,
    marginBottom:0,
    width: width, // 화면 너비와 동일하게 설정
    position: "absolute", // 절대 위치로 설정

  },
  buttonGroup: {
    backgroundColor:"#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: height * 0.01, // 버튼 그룹과 하단 옵션 간의 간격
    paddingBottom: height * 0.03, // Footer 근처로 이동
  },
  categoryButton: {
    fontSize: Math.max(12, width * 0.04), // 텍스트 크기 비율 조정
    padding: Math.max(6, width * 0.02), // 텍스트 패딩 동적 설정
    //color: "#333",
  },
  activeCategory: {
    fontWeight: "bold",
    color: "#007BFF",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: height * 0.05, // 하단 간격 조정
  },
  button: {
    padding: Math.max(8, width * 0.02), // 버튼 패딩 비율 설정
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: Math.max(4, width * 0.01), // 버튼 모서리 반응형
    margin: Math.max(4, width * 0.01), // 버튼 간격 반응형
  },
  selectedButton: {
    backgroundColor: "#ddd",
  },
  buttonText: {
    fontSize: Math.max(12, width * 0.04), // 버튼 텍스트 크기
    textAlign: "center",
  },
  colorButton: {
    borderRadius: Math.max(20, width * 0.05), // 색상 버튼 반응형
    margin: Math.max(4, width * 0.01), // 색상 버튼 간격
    width: Math.max(40, width * 0.1), // 색상 버튼 크기
    height: Math.max(40, width * 0.1),
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: "#000",
  },
  iconButton: {
    margin: Math.max(4, width * 0.01),
    borderRadius: Math.max(20, width * 0.05),
    borderWidth: 2,
    borderColor: "transparent",
    overflow: "hidden",
  },
  selectedIcon: {
    borderColor: "#007BFF",
  },
  icon: {
    width: Math.max(40, width * 0.1),
    height: Math.max(40, width * 0.1),
    resizeMode: "contain",
  },
});



export default Footer;
