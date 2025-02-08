import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';

interface TruncatedTextProps {
  text: string;
  maxLength: number;
  style: StyleProp<TextStyle>; // style 속성을 추가
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength, style }) => {
  const truncatedText = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  return <Text style={style}>{truncatedText}</Text>;
};

export default TruncatedText;
