import React from 'react';
import { View, Dimensions, Image, StyleSheet, ImageSourcePropType } from "react-native";

interface CardImageProps {
    imgPath: ImageSourcePropType;
}

const CardImage = ({ imgPath }: CardImageProps) => {
    const { width: screenWidth } = Dimensions.get('window');    

    const styles = StyleSheet.create({
        container: {
            width: screenWidth,
            height: screenWidth,
            alignItems: 'center',
            justifyContent: 'center',
        },
        imageContainer: {
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
        }
    });

    return (
        <View style={styles.container}>
            <Image style={styles.imageContainer} source={imgPath} />
        </View>
    );
};

export default CardImage;