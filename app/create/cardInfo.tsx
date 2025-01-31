export const BookCoverPosition:Record<string, Record<string, any>> = {
    "인생책": { //check
      "1:1": { widthRatio: 0.2, heightRatio: 0.12, topRatio: 0.35, leftRatio: 0.747 },
      "4:5": { widthRatio: 0.15, heightRatio: 0.09, topRatio: 0.37, leftRatio: 0.65 },
      "16:9": { widthRatio: 0.1, heightRatio: 0.06, topRatio: 0.39, leftRatio: 0.608 },
    },
    "기간별": {
      "1:1": { widthRatio: 0.25, heightRatio: 0.15, topRatio: 0.34, leftRatio: 0.75 },
      "4:5": { widthRatio: 0.2, heightRatio: 0.1, topRatio: 0.36, leftRatio: 0.67 },
      "16:9": { widthRatio: 0.12, heightRatio: 0.07, topRatio: 0.38, leftRatio: 0.62 },
    },
    "읽고싶은책": {
      "1:1": { widthRatio: 0.16, heightRatio: 0.10, topRatio: 0.318, leftRatio: 0.42 }, //check
      "4:5": { widthRatio: 0.145, heightRatio: 0.089, topRatio: 0.322, leftRatio: 0.426 },//check
      "16:9": { widthRatio: 0.120, heightRatio: 0.074, topRatio: 0.338, leftRatio: 0.444 },//check
    },
    "책속한줄": {
      "1:1": { widthRatio: 0.16, heightRatio: 0.10, topRatio: 0.318, leftRatio: 0.42 }, //check
      "4:5": { widthRatio: 0.145, heightRatio: 0.089, topRatio: 0.322, leftRatio: 0.426 },//check
      "16:9": { widthRatio: 0.120, heightRatio: 0.074, topRatio: 0.338, leftRatio: 0.444 },//check
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