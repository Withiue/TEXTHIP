// 온보딩 화면
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; 

export default function FirstPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First screen</Text>
      <Link href="/onboarding" style={styles.button}>
        웰컴 화면으로
      </Link>
      <Link href="/home" style={styles.button}>
        홈 화면으로
      </Link>
      <Link href="/share" style={styles.button}>
        공유 화면으로
      </Link>
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
