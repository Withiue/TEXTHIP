// 커스텀 폰트 전역 사용
import React from "react";
import {Text as RNText, TextProps} from 'react-native';

interface CustomTextProps extends TextProps {}

const CustomText: React.FC<CustomTextProps> = ({ style, ...rest }) => {
    const customStyle = {
        fontFamily: 'SUIT-Regular',
        color: '#1C1C1E',
    }

    return <RNText style={[customStyle, style]} {...rest} />
};

export default CustomText;