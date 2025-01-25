import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Header from "./header";
import SearchScreen from "./search";

const CreatePage: React.FC = () => {
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Header/>
      {params.cover && (
        <Image source={{ uri: params.cover as string }} style={styles.coverImage}/>
      )}
      <Text style={styles.text}>제목: {params.title}</Text>
      <Text style={styles.text}>저자: {params.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  coverImage: {
    width: 100,
    height: 150,
 
  },
  text: {
    fontSize: 16,
   
 },
});

export default CreatePage;
