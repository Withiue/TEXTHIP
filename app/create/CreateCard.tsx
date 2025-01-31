import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import Footer from "./footer";

const { width, height } = Dimensions.get("screen");

// 카드별 크기와 위치를 비율로 정의
const CARD_DIMENSIONS:Record<string, Record<string, any>> = {
  "인생책": {
    "1:1": { widthRatio: 0.2, heightRatio: 0.12, topRatio: 0.35, leftRatio: 0.747 },
    "4:5": { widthRatio: 0.15, heightRatio: 0.09, topRatio: 0.37, leftRatio: 0.65 },
    "16:9": { widthRatio: 0.1, heightRatio: 0.06, topRatio: 0.39, leftRatio: 0.608 },
  },
  "기간별": {
    "1:1": { widthRatio: 0.25, heightRatio: 0.15, topRatio: 0.34, leftRatio: 0.75 },
    "4:5": { widthRatio: 0.2, heightRatio: 0.1, topRatio: 0.36, leftRatio: 0.67 },
    "16:9": { widthRatio: 0.12, heightRatio: 0.07, topRatio: 0.38, leftRatio: 0.62 },
  },
  "책속한줄": {
    "1:1": { widthRatio: 0.25, heightRatio: 0.15, topRatio: 0.34, leftRatio: 0.75 },
    "4:5": { widthRatio: 0.2, heightRatio: 0.1, topRatio: 0.36, leftRatio: 0.67 },
    "16:9": { widthRatio: 0.12, heightRatio: 0.07, topRatio: 0.38, leftRatio: 0.62 },
  },
  "읽고싶은책": {
    "1:1": { widthRatio: 0.25, heightRatio: 0.15, topRatio: 0.34, leftRatio: 0.75 },
    "4:5": { widthRatio: 0.2, heightRatio: 0.1, topRatio: 0.36, leftRatio: 0.67 },
    "16:9": { widthRatio: 0.12, heightRatio: 0.07, topRatio: 0.38, leftRatio: 0.62 },
  },
};

//인생책 타이틀 , author
const legend_title_author:Record<string,any> = {
  "1:1": { topRatio: 0.537, leftRatio: 0.55 },
  "4:5": { widthRatio: 0.45, heightRatio: 0.6, topRatio: 0.2, leftRatio: 0.25 },
  "16:9": { widthRatio: 0.6, heightRatio: 0.4, topRatio: 0.3, leftRatio: 0.2 },
};


// 이미지 경로 매핑
const imagePaths: Record<string, any> = {
  //인생책 
  "인생책1:10": require("../../assets/images/cards/legend11grey.png"),
  "인생책4:50": require("../../assets/images/cards/legend45grey.png"),
  "인생책16:90": require("../../assets/images/cards/legend169grey.png"),
  "인생책1:11": require("../../assets/images/cards/legend11pink.png"),
  "인생책4:51": require("../../assets/images/cards/legend45pink.png"),
  "인생책16:91": require("../../assets/images/cards/legend169pink.png"),
  "인생책1:12": require("../../assets/images/cards/legend11orange.png"),
  "인생책4:52": require("../../assets/images/cards/legend45orange.png"),
  "인생책16:92": require("../../assets/images/cards/legend169orange.png"),
  "인생책1:13": require("../../assets/images/cards/legend11yellow.png"),
  "인생책4:53": require("../../assets/images/cards/legend45yellow.png"),
  "인생책16:93": require("../../assets/images/cards/legend169yellow.png"),
  "인생책1:14": require("../../assets/images/cards/legend11purple.png"),
  "인생책4:54": require("../../assets/images/cards/legend45purple.png"),
  "인생책16:94": require("../../assets/images/cards/legend169purple.png"),
 // 기간별 
  "기간별1:10": require("../../assets/images/cards/period11grey.png"),
  "기간별4:50": require("../../assets/images/cards/period45grey.png"),
  "기간별16:90": require("../../assets/images/cards/period169grey.png"),
  "기간별1:11": require("../../assets/images/cards/period11pink.png"),
  "기간별4:51": require("../../assets/images/cards/period45pink.png"),
  "기간별16:91": require("../../assets/images/cards/period169pink.png"),
  "기간별1:12": require("../../assets/images/cards/period11orange.png"),
  "기간별4:52": require("../../assets/images/cards/period45orange.png"),
  "기간별16:92": require("../../assets/images/cards/period169orange.png"),
  "기간별1:13": require("../../assets/images/cards/period11yellow.png"),
  "기간별4:53": require("../../assets/images/cards/period45yellow.png"),
  "기간별16:93": require("../../assets/images/cards/period169yellow.png"),
  "기간별1:14": require("../../assets/images/cards/period11purple.png"),
  "기간별4:54": require("../../assets/images/cards/period45purple.png"),
  "기간별16:94": require("../../assets/images/cards/period169purple.png"),
  //읽고싶은책
  "읽고싶은책1:10":require("../../assets/images/cards/want11grey.png"),
  "읽고싶은책4:50":require("../../assets/images/cards/want45grey.png"),
  "읽고싶은책16:90":require("../../assets/images/cards/want169grey.png"),
  "읽고싶은책1:11":require("../../assets/images/cards/want11pink.png"),
  "읽고싶은책4:51":require("../../assets/images/cards/want45pink.png"),
  "읽고싶은책16:91":require("../../assets/images/cards/want169pink.png"),
  "읽고싶은책1:12":require("../../assets/images/cards/want11orange.png"),
  "읽고싶은책4:52":require("../../assets/images/cards/want45orange.png"),
  "읽고싶은책16:92":require("../../assets/images/cards/want169orange.png"),
  "읽고싶은책1:13":require("../../assets/images/cards/want11yellow.png"),
  "읽고싶은책4:53":require("../../assets/images/cards/want45yellow.png"),
  "읽고싶은책16:93":require("../../assets/images/cards/want169yellow.png"),
  "읽고싶은책1:14":require("../../assets/images/cards/want11purple.png"),
  "읽고싶은책4:54":require("../../assets/images/cards/want45purple.png"),
  "읽고싶은책16:94":require("../../assets/images/cards/want169purple.png"),


  //책속한줄
  "책속한줄1:10": require("../../assets/images/cards/line11grey.png"),
  "책속한줄4:50": require("../../assets/images/cards/line45grey.png"),
  "책속한줄16:90":require("../../assets/images/cards/line169grey.png"),
  "책속한줄1:11":require("../../assets/images/cards/line11pink.png"),
  "책속한줄4:51":require("../../assets/images/cards/line45pink.png"),
  "책속한줄16:91":require("../../assets/images/cards/line169pink.png"),
  "책속한줄1:12":require("../../assets/images/cards/line11orange.png"),
  "책속한줄4:52":require("../../assets/images/cards/line45orange.png"),
  "책속한줄16:92":require("../../assets/images/cards/line169orange.png"),
  "책속한줄1:13":require("../../assets/images/cards/line11yellow.png"),
  "책속한줄4:53":require("../../assets/images/cards/line45yellow.png"),
  "책속한줄16:93":require("../../assets/images/cards/line169yellow.png"),
  "책속한줄1:14":require("../../assets/images/cards/line11purple.png"),
  "책속한줄4:54":require("../../assets/images/cards/line45purple.png"),
  "책속한줄16:94":require("../../assets/images/cards/line169purple.png"),
  
};
interface CreateCardProps {
  selectedBook: { id: string; title: string; author: string; cover: string } | null;
}



const CreateCard: React.FC<CreateCardProps> = ({ selectedBook }) => {

  const [nickname,setNickname] = useState("윤짜요");

  const [selectedTemplate, setSelectedTemplate] = useState("인생책");
  const [selectedRatio, setSelectedRatio] = useState("1:1");
  const [selectedBackground, setSelectedBackground] = useState(0);

  const cardConfig = CARD_DIMENSIONS[selectedTemplate][selectedRatio];
  const cardWidth = width * cardConfig.widthRatio;
  const cardHeight = height * cardConfig.heightRatio;
  const cardTop = height * cardConfig.topRatio;
  const cardLeft = width * cardConfig.leftRatio;

  const infoConfig = legend_title_author[selectedRatio];
  const infoTop = height * infoConfig.topRatio;
  const infoLeft = width * infoConfig.leftRatio;
 

  // 이미지 키 계산
  const currentImageKey = `${selectedTemplate}${selectedRatio}${selectedBackground}`;
  const currentImage = imagePaths[currentImageKey];
  if (!currentImage) {
    console.error(`Image not found for key: ${currentImageKey}`);
  }

  return (
    <View style={[styles.container ]}>
        {/* 닉네임 입력 필드 */}
        <TextInput 
          style={styles.nicknameInput}
          value={nickname}
          onChangeText={setNickname}
          editable={true} // 명시적으로 설정
          maxLength={10}
        />
      {/* 책 정보  */}
        {selectedBook ? (
          <>
            <Image source={{ uri: selectedBook.cover }} 
              style={[styles.bookCover,
               {width: cardWidth, // 반응형 너비
               height: cardHeight, // 반응형 높이
               top: cardTop, // 반응형 상단 위치
               left: cardLeft,
              } // 반응형 좌측 위치
            ]} />

            <Text 
              style={[styles.title,
                { 
                  top: infoTop, // 반응형 상단 위치
                  left: infoLeft,
                 } // 반응형 좌측 위치
              ]}>
              {selectedBook.title}
            </Text>
            <Text 
              style={[styles.author,
                { 
                  top: infoTop+27, // 반응형 상단 위치
                  left: infoLeft,
                 } // 반응형 좌측 위치
              ]}>{selectedBook.author}</Text> 
          </>
        ):null}

      {/* 사용자 text 영역 */}
      <TextInput  style={styles.userInput}
          value={nickname}
          onChangeText={setNickname}
          editable={true} // 명시적으로 설정
          maxLength={10}>

      </TextInput>
      
      {/* 카드 이미지  */}
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
    position: 'relative',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0, // 부모 기본 zIndex
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
    position: 'absolute',
    marginBottom: 10,
    zIndex: 2, 
  },
  title: {
    zIndex:2,
    position: 'absolute',
    fontSize: 10,
    fontWeight: "bold",
  },
  author: {
    position: 'absolute',
    zIndex:2,
    fontSize: 10,
    color: "#555",
  },
  nicknameInput: {
    position: 'absolute',
    top:"30%",
    left:"10%",
    zIndex:2,
    fontSize: 10,
    color: "white",
    textAlign: "center",
    transform: [{ rotate: "-3deg" }], // 45도 회전
  },
  userInput:{
    position: 'absolute',
    zIndex:2,
    color:"red",
    top:"50%",
  }
});

export default CreateCard;
