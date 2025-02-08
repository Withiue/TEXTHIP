import React from "react";
import { View, Dimensions, Image, StyleSheet } from "react-native";

export default function CardImage() {
    const { width: screenWidth } = Dimensions.get('window');
    const imgPath = require('@/assets/images/legend11pink.png');
    
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
}