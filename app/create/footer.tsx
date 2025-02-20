import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


const ratios = ["1:1","4:5","16:9"];
const templates = ["인생책", "기간별", "읽고싶은책", "책속한줄"];
const backgrounds = [
  require("../../assets/icons/colorChoice/grey.png"),
  require("../../assets/icons/colorChoice/pink.png"),
  require("../../assets/icons/colorChoice/orange.png"),
  require("../../assets/icons/colorChoice/yellow.png"),
  require("../../assets/icons/colorChoice/purple.png"),
];

const ratioImages: Record<string, { default: any; white: any }> = {
  "1:1": {
    default: require("../../assets/icons/ratios/rectangle11grey.png"),
    white: require("../../assets/icons/ratios/rectangle11white.png"),
  },
  "4:5": {
    default: require("../../assets/icons/ratios/rectangle45grey.png"),
    white: require("../../assets/icons/ratios/rectangle45white.png"),
  },
  "16:9": {
    default: require("../../assets/icons/ratios/rectangle169grey.png"),
    white: require("../../assets/icons/ratios/rectangle169white.png"),
  },
};




interface FooterProps {
  selectedTemplate: string;
  setSelectedTemplate: React.Dispatch<React.SetStateAction<string>>;
  selectedRatio: string;
  setSelectedRatio: React.Dispatch<React.SetStateAction<string>>;
  selectedBackground: number;
  setSelectedBackground: React.Dispatch<React.SetStateAction<number>>;
}

const { width, height } = Dimensions.get("screen");

const Footer: React.FC<FooterProps> = ({
  selectedTemplate,
  setSelectedTemplate,
  selectedRatio,
  setSelectedRatio,
  selectedBackground,
  setSelectedBackground,
}) => {
  const [activeCategory, setActiveCategory] = useState<"ratio" | "template" | "background">("ratio");
  
  const renderOptions = () => {
    if (activeCategory === "ratio") {
      return (
        <View style={styles.optionsContainer}>
        {ratios.map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.optionContainer}
            onPress={() => setSelectedRatio(value)}
          >
            <Image
              source={selectedRatio === value ? ratioImages[value].white : ratioImages[value].default}
              style={styles.icon}
            />
            <Text style={[styles.buttonText, selectedRatio === value && styles.selectedText]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      );
    }
    if (activeCategory === "template") {
      return templates.map((template) => (
        <TouchableOpacity key={template} style={styles.optionContainer} onPress={() => setSelectedTemplate(template)}>
          <MaterialIcons
            name={
              template === "인생책"
                ? "book"
                : template === "기간별"
                ? "calendar-today"
                : template === "읽고싶은책"
                ? "import-contacts"
                : "article"
            }
            size={26}
            color={selectedTemplate === template ? "white" : "#8E8E93"}
          />
          <Text style={[styles.buttonText, selectedTemplate === template && styles.selectedText]}>
            {template === "인생책" ? "인생책 추천" : template === "기간별" ? "기간별 추천" : template === "읽고싶은책" ? "읽고 싶은 책" : "책 속 한 줄"}
          </Text>
        </TouchableOpacity>
      ));
    }
    if (activeCategory === "background") {
      return backgrounds.map((icon, index) => (
        <TouchableOpacity key={index} style={styles.optionContainer} onPress={() => setSelectedBackground(index)}>
          <Image source={icon} style={styles.icon} />
        </TouchableOpacity>
      ));
    }
    return null;
  };
  
  return (
    <View style={styles.container}>
      {/* 상위 카테고리 버튼 */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={() => setActiveCategory("template")} style={styles.categoryButtonContainer}>
          <MaterialIcons name="my-library-books" size={26} color={activeCategory === "template" ? "black" : "#A5A5A9"} />
          <Text style={[styles.categoryButton, activeCategory === "template" && styles.activeCategory]}>템플릿</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveCategory("ratio")} style={styles.categoryButtonContainer}>
          <MaterialIcons name="content-copy" size={24} color={activeCategory === "ratio" ? "black" : "#A5A5A9"} />
          <Text style={[styles.categoryButton, activeCategory === "ratio" && styles.activeCategory]}>비율</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveCategory("background")} style={styles.categoryButtonContainer}>
          <MaterialIcons name="texture" size={24} color={activeCategory === "background" ? "black" : "#A5A5A9"} />
          <Text style={[styles.categoryButton, activeCategory === "background" && styles.activeCategory]}>배경</Text>
        </TouchableOpacity>
      </View>

      {/* 하위 카테고리 옵션 */}
      <View style={styles.optionsContainer}>{renderOptions()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(28, 28, 30, 1)",
    justifyContent: "space-between",
    bottom: 0,
    marginBottom: 0,
    width: width,
    position: "absolute",
  },
  buttonGroup: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: height * 0.01,
   
  },
  categoryButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  categoryButton: {
    fontSize: Math.max(width * 0.035),
    padding: Math.max(6, width * 0.02),
    color: "#8E8E93",
  },
  activeCategory: {
    color: "black",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: height * 0.02,
    marginTop:height * 0.02,
    justifyContent: "space-evenly", // 균등한 간격 유지
    height:height*0.07,
  },
  optionContainer: {
    
    alignItems: "center",
    justifyContent: "center",
   // marginHorizontal: width * 0.01, //하위 아이콘 간격
    width: width*0.18, // 최소 너비 추가하여 버튼 크기 일정하게 유지
    paddingVertical: 10, // 터치 영역 균일하게 설정
  },
  buttonText: {
    fontSize: Math.max(width * 0.035),
    textAlign: "center",
    color: "#8E8E93",
    marginTop: 5, // 아이콘과 텍스트 간격 조정
  },
  selectedText: {
    color: "white",
  },
  icon: {
    width: width*0.08,
    height:width*0.08,
    resizeMode: "contain",
  },
});

export default Footer;
