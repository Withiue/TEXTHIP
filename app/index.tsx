import React from "react";
import { Text, View, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First screen</Text>
      <Button
        title="웰컴 화면으로"
        onPress={() => router.push("/onboarding")}
      />
      <Button
        title="홈 화면으로"
        onPress={() => router.push("/home")}
      />
      <Button
        title="카드 만들기 화면으로"
        onPress={() => router.push("/create")}
      />
      <Button
        title="공유 화면으로"
        onPress={() => router.push("/share")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});