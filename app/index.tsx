import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter,Stack } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen options={{headerShown:false}} />
      <Button
        title="Go to Create Page"
        onPress={() => router.push("/create")}
      />
    </View>
  );
}
