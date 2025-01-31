import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import Footer from "./footer";
import { CardImagePaths } from "./cardInfo";
import { BookCoverPosition } from "./cardInfo";
const { width, height } = Dimensions.get("screen");
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//인생책 타이틀 , author
const legend_title_author:Record<string,any> = {
  "1:1": { topRatio: 0.537, leftRatio: 0.55 },
  "4:5": { widthRatio: 0.45, heightRatio: 0.6, topRatio: 0.2, leftRatio: 0.25 },
  "16:9": { widthRatio: 0.6, heightRatio: 0.4, topRatio: 0.3, leftRatio: 0.2 },
};

interface CreateCardProps {
  selectedBook: {
    id: string;
    title: string;
    author: string; 
    cover: string; 
    pubDate:Date; 
    isbn:string; 
    priceSales:number;
    publisher:string;  } | null;
}



const CreateCard: React.FC<CreateCardProps> = ({ selectedBook }) => {

  const [nickname,setNickname] = useState("윤짜요");
  const [userComment,setUserComment] = useState("");

  const [selectedTemplate, setSelectedTemplate] = useState("인생책");
  const [selectedRatio, setSelectedRatio] = useState("1:1");
  const [selectedBackground, setSelectedBackground] = useState(0);

  const cardConfig = BookCoverPosition[selectedTemplate][selectedRatio];
  const cardWidth = width * cardConfig.widthRatio;
  const cardHeight = height * cardConfig.heightRatio;
  const cardTop = height * cardConfig.topRatio;
  const cardLeft = width * cardConfig.leftRatio;
 
  

  const infoConfig = legend_title_author[selectedRatio];
  const infoTop = height * infoConfig.topRatio;
  const infoLeft = width * infoConfig.leftRatio;
 

  // 이미지 키 계산
  const currentImageKey = `${selectedTemplate}${selectedRatio}${selectedBackground}`;
  const currentImage = CardImagePaths[currentImageKey];
  if (!currentImage) {
    console.error(`Image not found for key: ${currentImageKey}`);
  }

  if (selectedTemplate === "읽고싶은책" && selectedBook) {
    console.log("읽고싶은책 템플릿 데이터:", selectedBook);
  }


  return (
    <KeyboardAwareScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
      
      {/* 템플릿 별 데이터   */}
      {selectedTemplate === "인생책" && selectedBook && (
        <>
          {/* 닉네임 입력 필드 */}
          <TextInput 
            style={styles.nicknameInput}
            value={`${nickname}'s 인생책 추천`}
            onChangeText={setNickname}
            editable={true} // 명시적으로 설정
            maxLength={20}
          />
          <Image
            source={{ uri: selectedBook.cover }}
            style={[
              styles.bookCover,
              {
                width: cardWidth,
                height: cardHeight,
                top: cardTop,
                left: cardLeft,
              },
            ]}
          />
          <Text>{selectedBook.title}</Text>
          <Text>{selectedBook.author}</Text>
          {/* 사용자 text 영역 */}
          <TextInput  style={styles.userInput}
              value={userComment}
              onChangeText={setUserComment}
              editable={true} // 명시적으로 설정
              maxLength={100}
              placeholder="한 줄만 써주세요">
          </TextInput>
        </>
      )}

      {selectedTemplate === "책속한줄" && selectedBook && (
        <>
      
          {/* 닉네임 입력 필드 */}
          <TextInput 
            style={styles.nicknameInput}
            value={`${nickname}'s 책 속 한 줄`}
            onChangeText={setNickname}
            editable={true} // 명시적으로 설정
            maxLength={20}
          />
         
          <View style={styles.want_info}>
            <Text >{selectedBook.title}</Text>
            <Text>{selectedBook.author}</Text>
          </View>
          
        </>
      )}

      {selectedTemplate === "기간별" && selectedBook && (
        <>
          {/* 닉네임 입력 필드 */}
          <TextInput 
            style={styles.nicknameInput}
            value={`${nickname}'s 이번 달 추천 도서`}
            onChangeText={setNickname}
            editable={true} // 명시적으로 설정
            maxLength={20}
          />
          <Image
            source={{ uri: selectedBook.cover }}
            style={[
              styles.bookCover,
              {
                width: cardWidth,
                height: cardHeight,
                top: cardTop,
                left: cardLeft,
              },
            ]}
          />
          <View style={styles.want_info}>
            <Text >{selectedBook.title}</Text>
            <Text>{selectedBook.author}</Text>
            <Text>{`${selectedBook.publisher}출판사`}</Text>
            <Text>{`${selectedBook.isbn}: 바코드 번호`}</Text>
            <Text>{`${selectedBook.priceSales}: 가격`}</Text>
            <Text>{`${selectedBook.pubDate}:출판일`}</Text>
          </View>
          {/* 사용자 text 영역 */}
          <TextInput  style={styles.userInput}
              value={userComment}
              onChangeText={setUserComment}
              editable={true} // 명시적으로 설정
              maxLength={100}
              placeholder="한 줄만 써주세요">
          </TextInput>
        </>
      )}

      {selectedTemplate === "읽고싶은책" && selectedBook && (
        <>
          {/* 닉네임 입력 필드 */}
          <TextInput 
            style={styles.nicknameInput}
            value={`${nickname}'s 읽고 싶은 책`}
            onChangeText={setNickname}
            editable={true} // 명시적으로 설정
            maxLength={20}
          />
          <Image
            source={{ uri: selectedBook.cover }}
            style={[
              styles.bookCover,
              {
                width: cardWidth,
                height: cardHeight,
                top: cardTop,
                left: cardLeft,
              },
            ]}
          />
          <View style={styles.want_info}>
            <Text >{selectedBook.title}</Text>
            <Text>{selectedBook.author}</Text>
            <Text>{`${selectedBook.publisher}출판사`}</Text>
            <Text>{`${selectedBook.isbn}: 바코드 번호`}</Text>
            <Text>{`${selectedBook.priceSales}: 가격`}</Text>
            <Text>{`${selectedBook.pubDate}:출판일`}</Text>
          </View>
    
        </>
      )}


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
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  want_info:{
    zIndex:2,
    top:"10%",
    color:"red",
  },
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
