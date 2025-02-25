import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Dimensions, TextInput ,ScrollView} from "react-native";
import Footer from "./footer";
import {Title_Author , CardImagePaths, NicknameInput,UserComment } from "./cardInfo";
import { BookCoverPosition } from "./cardInfo";
const { width, height } = Dimensions.get("screen");
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TruncatedText from "./TruncatedText";
import  { useFonts } from 'expo-font';

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

    // fontsLoaded: boolean;
}


const CreateCard: React.FC<CreateCardProps> = ({ selectedBook   }) => {
 
  const [fontsLoaded] = useFonts({
    "SUIT-Thin": require("../../assets/fonts/SUIT-Thin.ttf"),
    "SUIT-Light": require("../../assets/fonts/SUIT-Light.ttf"),
    "SUIT-Regular": require("../../assets/fonts/SUIT-Regular.ttf"),
    "SUIT-Medium": require("../../assets/fonts/SUIT-Medium.ttf"),
    "SUIT-SemiBold": require("../../assets/fonts/SUIT-SemiBold.ttf"),
    "SUIT-Bold": require("../../assets/fonts/SUIT-Bold.ttf"),
  });

  const [nickname,setNickname] = useState("윤짜요");
  const [userComment,setUserComment] = useState("");

  const [selectedTemplate, setSelectedTemplate] = useState("인생책");
  const [selectedRatio, setSelectedRatio] = useState("1:1");
  const [selectedBackground, setSelectedBackground] = useState(0);

  if (!fontsLoaded) {
    return null;
  }


  const scaleFont = (size: number) => (Dimensions.get("window").width / 1080) * size;



  const cardConfig = BookCoverPosition[selectedTemplate][selectedRatio];
  const cardWidth = width * cardConfig.widthRatio;
  const cardHeight = height * cardConfig.heightRatio;
  const cardTop = height * cardConfig.topRatio;
  const cardLeft = width * cardConfig.leftRatio;
 
  const nicknameConfig = NicknameInput[selectedTemplate][selectedRatio];
  const nicknameFontSize = nicknameConfig.fontSize;
  const nicknameTransform = nicknameConfig.transform;
  const nicknameColor = nicknameConfig.color;
  const nicknameTop = height * nicknameConfig.topRatio;
  const nicknameLeft = width * nicknameConfig.leftRatio;

  const titleAuthorConfig = Title_Author[selectedTemplate][selectedRatio];
  const titleAuthorSize = titleAuthorConfig.fontSize;
  const titleTop = height * titleAuthorConfig.titleTopRatio;
  const titleAuthorLeft = width * titleAuthorConfig.leftRatio;
  const AuthorTop = height*titleAuthorConfig.authorTopRatio;

  const userCommentConfig = UserComment[selectedTemplate][selectedRatio];
  const userCommentTop =  height * userCommentConfig.topRatio;
  const userCommentLeft =  height * userCommentConfig.leftRatio;
  const userCommentTransform = userCommentConfig.transform;
  const userCommentSize = userCommentConfig.fontSize;
  const userCommentLineHeight = userCommentConfig.lineHeight;
  const userCommentWidth = width* userCommentConfig.widthRatio;


const bookDetails = [
  { value: `${selectedBook?.title || 0}` },
  { value: `${selectedBook?.author || 0}` },
  { value: `${selectedBook?.publisher || 0}` },
  { value: `${selectedBook?.pubDate || 0}` },
  { value: `${selectedBook?.isbn || 0}` },
  { value: `${selectedBook?.priceSales || 0}원` },
];

  // 이미지 키 계산
  const currentImageKey = `${selectedTemplate}${selectedRatio}${selectedBackground}`;
  const currentImage = CardImagePaths[currentImageKey];
  if (!currentImage) {
    console.error(`Image not found for key: ${currentImageKey}`);
  }



  return (
    <View style={{ flex: 1 }}>
    <KeyboardAwareScrollView 
    contentContainerStyle={{ flexGrow: 1 }}
    >

       {/* 템플릿 별 데이터   */}
       {selectedTemplate === "인생책" && selectedBook && (
        <>
          {/* 닉네임 입력 필드 */}
          <TextInput 
            style={[
              styles.nicknameInput,              
              {          
                top: nicknameTop,
                left: nicknameLeft,
                fontSize:nicknameFontSize,
                color:nicknameColor,
                transform:nicknameTransform,
              },
            ]}
            value={`${nickname}'s 인생책`}
            onChangeText={setNickname}
            editable={true} // 명시적으로 설정
            maxLength={8}
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
          {/* title  */}
          <TruncatedText 
             text={selectedBook.title}
             maxLength={20}
             style={[
              styles.author_title,
              {
                fontFamily:"SUIT-Medium",
                top: titleTop,
                left: titleAuthorLeft,
                fontSize: titleAuthorSize,
              },
            ]}
          />
          {/* author */}

          <TruncatedText 
             text={selectedBook.author}
             maxLength={20}
             style={[
              styles.author_title,
              {
                fontFamily:"SUIT-Medium",
                top: AuthorTop,
                left: titleAuthorLeft,
                fontSize: titleAuthorSize,
              },
            ]}
          />
      
          {/* 사용자 text 영역 */}
          <TextInput  style={[styles.userInput,
          {
             lineHeight:userCommentLineHeight,
             top: userCommentTop,
             left: userCommentLeft,
             fontSize:userCommentSize,
             transform:userCommentTransform,
             width:userCommentWidth,
          },]}
              value={userComment}
              onChangeText={setUserComment}
              editable={true} // 명시적으로 설정
              maxLength={100}
              multiline={true}
              textAlignVertical="center"
              placeholder="인생을 바꾼 한 권의 책을 소개해주세요.">
          </TextInput>
        </>
      )}

      {selectedTemplate === "책속한줄" && selectedBook && (
        <>
         {/* 닉네임 입력 필드 */}
         <TextInput 
             style={[
              styles.nicknameInput,
              {          
                top: nicknameTop,
                left: nicknameLeft,
                fontSize:nicknameFontSize,
                fontFamily:nicknameConfig.fontFailmy,
                color:nicknameColor,
                transform:nicknameTransform,
              },      
             ]}
            value={`${nickname}'s 책 속 한 줄`}
            onChangeText={setNickname}
            editable={true} // 명시적으로 설정
            maxLength={20}
          />
      
           {/* 사용자 text 영역 */}
           <TextInput  style={[styles.userInput,
          {
             lineHeight:userCommentLineHeight,
             top: userCommentTop,
             left: userCommentLeft,
             fontSize:userCommentSize,
             transform:userCommentTransform,
             width:userCommentWidth,
             fontFamily:userCommentConfig.fontFamily,
          }]}
              value={userComment}
              onChangeText={setUserComment}
              editable={true} 
              maxLength={170}
              multiline={true}
              textAlignVertical="center"
              placeholder="책 속 한 줄을 작성해보세요."
              placeholderTextColor={"black"}
              >
          </TextInput>
         
            {/* title  */}
          <TruncatedText 
             text={`${selectedBook.author} | ${selectedBook.title}`}
             maxLength={20}
             style={[
              styles.author_title,
              {
                fontFamily: titleAuthorConfig.fontFailmy,
                top: titleTop,
                left: titleAuthorLeft,
                fontSize: titleAuthorSize,
                transform:titleAuthorConfig.transform
              },
            ]}
          />
        {/* page */}
        
        </>
      )}

      {selectedTemplate === "기간별" && selectedBook && (
        <>
          {/* 닉네임 입력 필드 */}
          <TextInput 
            style={[
              styles.nicknameInput,
              {
                top: nicknameTop,
                left: nicknameLeft,
                fontSize:nicknameFontSize,
                color:nicknameColor,
                transform:nicknameTransform,
            
              },
            ]}
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
                transform: cardConfig.transform,
                borderRadius:cardConfig.borderRadius,
              
              },
            ]}
          />
          <Image
            source={{ uri: selectedBook.cover }}
            style={[
              styles.bookCover,
              {
                width: cardWidth,
                height: cardHeight,
                top: width*cardConfig.topRatio2,
                left: width*cardConfig.leftRatio2,
                transform: cardConfig.transform2,
                borderRadius:cardConfig.borderRadius,
              },
            ]}
          /> 

          {/* INfo  */}
           <View 
              style={
                [styles.textContainer, 
                {top: titleTop,
                transform: titleAuthorConfig.transform,
                 paddingRight:titleAuthorConfig.paddingRight,
                 right:0,
            }]}>

             {bookDetails.map((item, index) => (
                <Text key={index} style={[styles.value,{  
                  fontSize:titleAuthorConfig.fontSize,
                  marginBottom:titleAuthorConfig.marginBottom,
               },]}>
                   {item.value.length>15 ? item.value.substring(0,15)+"...":item.value}
                </Text>
              ))} 
         </View>
          {/* 사용자 text 영역 */}
          <TextInput  style={[styles.userInput,
          {
             lineHeight:userCommentLineHeight,
             top: userCommentTop,
             left: userCommentLeft,
             fontSize:userCommentSize,
             transform:userCommentTransform,
             width:userCommentWidth,
          }]}
              value={userComment}
              onChangeText={setUserComment}
              editable={true} 
              maxLength={170}
              multiline={true}
              textAlignVertical="center"
              placeholder="주간, 월간, 연간 등 기간을 설정하여 도서를 추천해보세요."
              placeholderTextColor={"black"}
              >
          </TextInput>
        </>
      )}

      {selectedTemplate === "읽고싶은책" && selectedBook && (
        <>
          {/* 닉네임 입력 필드 */}
          <TextInput 
            style={[
              styles.nicknameInput,
              {
                top: nicknameTop,
                left: nicknameLeft,
                fontSize:nicknameFontSize,
                color:nicknameColor,
                transform:nicknameTransform,
              },
            ]}
            value={`${nickname}'s 읽고 싶은 책`}
            onChangeText={setNickname}
            editable={true} // 명시적으로 설정
            maxLength={20}
          />
          {/* 이미지 1 */}
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
 
        <View style={[styles.textContainer, {right:0,top: titleTop, left: titleAuthorLeft,paddingRight:titleAuthorConfig.paddingRight }]}>
             {bookDetails.map((item, index) => (
                <Text key={index} style={[styles.value,{  
                  marginBottom: index === 4 ? titleAuthorConfig.marginBottomMax : titleAuthorConfig.marginBottomDefault,
                  fontSize:titleAuthorConfig.fontSize             
               },]}
               >
                  {item.value.length>15 ? item.value.substring(0,15)+"...":item.value}
                </Text>
              ))} 
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
      </KeyboardAwareScrollView>


      {/* Footer 컴포넌트 */}
      <View style={styles.footerContainer}>
        <Footer
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          selectedRatio={selectedRatio}
          setSelectedRatio={setSelectedRatio}
          selectedBackground={selectedBackground}
          setSelectedBackground={setSelectedBackground}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  textContainer: {
     justifyContent: "space-between",
     position:"absolute",
     paddingBottom: 10, // 여유 공간 추가
     zIndex:1,
    // right:0,
  },

  value: {
    zIndex:2,
    textAlign: "right", // 오른쪽 끝 정렬
    fontFamily: "SUIT-Regular",
  },
  author_title:{
    position: 'absolute',
    zIndex:2,
  },
  footerContainer: {
    position: "relative",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
  },

  container: {
    justifyContent: "space-between",
    position:'absolute'
  },
  imageContainer: {
    position: 'relative',
   // flex: 1,
    top:height*0.188,
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
    zIndex: 2, 
  },
  nicknameInput: {
    position: 'absolute',
    zIndex:4,
    textAlign: "center",
  },
  userInput:{
    position: 'absolute',
    zIndex:3,
    flex:1,
    fontFamily:"SUIT-Regular",
  }
});

export default CreateCard;
