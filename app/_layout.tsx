// 링크 설정하는 곳
import { Stack } from 'expo-router';
import Header from '../components/Header';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="index" options={{ title: '첫 화면' }} />
        <Stack.Screen name="onboarding" />
        <Stack.Screen 
        name="home/index" 
        options={{
          headerShown: true,
          header: () => <Header />
        }} />
        <Stack.Screen 
          name="create/index"
          options={{
            headerShown: true,
            header: () => <Header />
          }} />
        <Stack.Screen 
          name="share/index" 
          options={{
            headerShown: false,
            header: () => <Header />
          }}
        />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}