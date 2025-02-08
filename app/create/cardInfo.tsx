import { Dimensions} from "react-native";
const { width, height } = Dimensions.get("screen");

const FigmaWidth = 1080;

const scaleFont = (size: number) => (Dimensions.get("window").width / FigmaWidth) * size;

export const BookCoverPosition:Record<string, Record<string, any>> = {
    "인생책": { //check
      "1:1": { widthRatio: 0.199, heightRatio: 0.128, topRatio: 0.328, leftRatio: 0.747 }, //fixed
      "4:5": { widthRatio: 0.142, heightRatio: 0.091, topRatio: 0.351, leftRatio: 0.654 },//fixed
      "16:9": { widthRatio: 0.1, heightRatio: 0.0634, topRatio: 0.37, leftRatio: 0.608 }, //fixed
    },
    "기간별": {
      "1:1": { widthRatio: 0.25, heightRatio: 0.15, topRatio: 0.34, leftRatio: 0.79 },
      "4:5": { widthRatio: 0.2, heightRatio: 0.1, topRatio: 0.36, leftRatio: 0.67 },
      "16:9": { widthRatio: 0.12, heightRatio: 0.07, topRatio: 0.38, leftRatio: 0.62 },
    },
    "읽고싶은책": {
      "1:1": { widthRatio: 0.16, heightRatio: 0.10, topRatio: 0.30, leftRatio: 0.42 }, //fixed
      "4:5": { widthRatio: 0.14, heightRatio: 0.090, topRatio: 0.303, leftRatio: 0.430 },//fixed
      "16:9": { widthRatio: 0.118, heightRatio: 0.075, topRatio: 0.319, leftRatio: 0.445 },//fixed
    },
    "책속한줄": {
      "1:1": { widthRatio: 0.16, heightRatio: 0.10, topRatio: 0.31, leftRatio: 0.42 }, //check
      "4:5": { widthRatio: 0.145, heightRatio: 0.089, topRatio: 0.322, leftRatio: 0.426 },//check
      "16:9": { widthRatio: 0.120, heightRatio: 0.074, topRatio: 0.338, leftRatio: 0.444 },//check
    },
  };


  export const NicknameInput:Record<string, Record<string, any>> = {
    "인생책": { //check
      "1:1": {fontSize:scaleFont(24),   transform: [{ rotate: "3deg" }], color:"white",topRatio: 0.256, leftRatio: 0.087 }, //fixed
      "4:5":{fontSize:scaleFont(24),   transform: [{ rotate: "3deg" }], color:"white",topRatio: 0.294, leftRatio: 0.18 },  //fixed
      "16:9": {fontSize:scaleFont(18),   transform: [{ rotate: "3deg" }], color:"white",topRatio: 0.327, leftRatio: 0.27 },  //fixed
    },
    "기간별": {
      "1:1":{fontSize:scaleFont(24),   transform: [{ rotate: "-3deg" }], color:"white",topRatio: 0.328, leftRatio: 0.747 }, 
      "4:5":{fontSize:10,   transform: [{ rotate: "-3deg" }], color:"white",topRatio: 0.328, leftRatio: 0.747 }, 
      "16:9": {fontSize:10,   transform: [{ rotate: "-3deg" }], color:"white",topRatio: 0.328, leftRatio: 0.747 }, 
    },
    "읽고싶은책": {
      "1:1": {fontSize:scaleFont(24),   transform: [{ rotate: "0deg" }], color:"black",topRatio: 0.26, leftRatio: 0.385 }, //fixed
      "4:5":{fontSize:9,   transform: [{ rotate: "0deg" }], color:"black",topRatio: 0.267, leftRatio: 0.398 }, //fixed
      "16:9": {fontSize:8,   transform: [{ rotate: "0deg" }], color:"black",topRatio: 0.285, leftRatio: 0.415 }, //fixed
    },
    "책속한줄": {
      "1:1": {fontSize:10,   transform: [{ rotate: "-3deg" }], color:"white",topRatio: 0.328, leftRatio: 0.747 }, 
      "4:5":{fontSize:10,   transform: [{ rotate: "-3deg" }], color:"white",topRatio: 0.328, leftRatio: 0.747 }, 
      "16:9": {fontSize:10,   transform: [{ rotate: "-3deg" }], color:"white",topRatio: 0.328, leftRatio: 0.747 }, 
    },
  };
  // top:"50%",
  // left:"50%",
  // fontSize : 10,

  export const  Title_Author:Record<string, Record<string, any>> = {
    "인생책": { //check
      "1:1": {fontSize:scaleFont(30),   transform: [{ rotate: "0deg" }],titleTopRatio: 0.534,authorTopRatio:0.505, leftRatio: 0.537 }, 
      "4:5":{fontSize:scaleFont(24),   transform: [{ rotate: "0deg" }],titleTopRatio: 0.497, authorTopRatio: 0.477,leftRatio: 0.502 }, 
      "16:9": {fontSize:scaleFont(18),   transform: [{ rotate: "0deg" }],titleTopRatio: 0.472,authorTopRatio:0.456, leftRatio: 0.502  },  
    },
    "기간별": {
      "1:1": {fontSize:10,   transform: [{ rotate: "0deg" }],titleTopRatio: 0.534,authorTopRatio:0.505, leftRatio: 0.537 }, 
      "4:5":{fontSize:8,   transform: [{ rotate: "0deg" }],titleTopRatio: 0.497, authorTopRatio: 0.497,leftRatio: 0.502 }, 
      "16:9": {fontSize:6,   transform: [{ rotate: "0deg" }],titleTopRatio: 0.472,authorTopRatio:0.472, leftRatio: 0.502  }, 
    },
    "읽고싶은책": {
      "1:1": {fontSize:scaleFont(22),   transform: [{ rotate: "0deg" }],titleTopRatio: 0.44,authorTopRatio:0.45, leftRatio: 0.62 }, 
      "4:5":{fontSize:8,   transform: [{ rotate: "0deg" }],titleTopRatio: 0.497, authorTopRatio: 0.497,leftRatio: 0.537 }, 
      "16:9": {fontSize:6,   transform: [{ rotate: "0deg" }],titleTopRatio: 0.472,authorTopRatio:0.472, leftRatio: 0.502  }, 
    },
    "책속한줄": {
      "1:1": {fontSize:10,   transform: [{ rotate: "0deg" }],titleTopRatio: 0.534,authorTopRatio:0.505, leftRatio: 0.537 }, 
      "4:5":{fontSize:8,   transform: [{ rotate: "0deg" }],titleTopRatio: 0.497, authorTopRatio: 0.497,leftRatio: 0.502 }, 
      "16:9": {fontSize:6,   transform: [{ rotate: "0deg" }],titleTopRatio: 0.472,authorTopRatio:0.472, leftRatio: 0.502  }, 
    },
  };



  export const UserComment:Record<string, Record<string, any>> = {
    "인생책": { //check
      "1:1": {fontSize:10,   transform: [{ rotate: "0deg" }],topRatio: 0.315, leftRatio: 0.013,lineHeight:25,widthRatio:0.45}, 
      "4:5":{fontSize:8,   transform: [{ rotate: "0deg" }],topRatio: 0.335, leftRatio: 0.06,lineHeight:19.5,widthRatio:0.33 }, 
      "16:9": {fontSize:6,   transform: [{ rotate: "0deg" }],topRatio: 0.355, leftRatio: 0.108,lineHeight:13.5,widthRatio:0.23}, 
    },
    "기간별": {
      "1:1": {fontSize:10,   transform: [{ rotate: "0deg" }],topRatio: 0.315, leftRatio: 0.013,lineHeight:25,widthRatio:0.45}, 
      "4:5":{fontSize:8,   transform: [{ rotate: "0deg" }],topRatio: 0.335, leftRatio: 0.06,lineHeight:19.5,widthRatio:0.33 }, 
      "16:9": {fontSize:6,   transform: [{ rotate: "0deg" }],topRatio: 0.355, leftRatio: 0.108,lineHeight:13.5,widthRatio:0.23}, 
    },
    "읽고싶은책": {
      "1:1": {fontSize:10,   transform: [{ rotate: "0deg" }],topRatio: 0.315, leftRatio: 0.013,lineHeight:25,widthRatio:0.45}, 
      "4:5":{fontSize:8,   transform: [{ rotate: "0deg" }],topRatio: 0.335, leftRatio: 0.06,lineHeight:19.5,widthRatio:0.33 }, 
      "16:9": {fontSize:6,   transform: [{ rotate: "0deg" }],topRatio: 0.355, leftRatio: 0.108,lineHeight:13.5,widthRatio:0.23}, 
    },
    "책속한줄": {
      "1:1": {fontSize:10,   transform: [{ rotate: "0deg" }],topRatio: 0.315, leftRatio: 0.013,lineHeight:25,widthRatio:0.45}, 
      "4:5":{fontSize:8,   transform: [{ rotate: "0deg" }],topRatio: 0.335, leftRatio: 0.06,lineHeight:19.5,widthRatio:0.33 }, 
      "16:9": {fontSize:6,   transform: [{ rotate: "0deg" }],topRatio: 0.355, leftRatio: 0.108,lineHeight:13.5,widthRatio:0.23}, 
    },
  };




  // 이미지 경로 매핑
export const CardImagePaths: Record<string, any> = {
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