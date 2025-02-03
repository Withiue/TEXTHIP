import { Stack } from 'expo-router';
import Header from '../components/Header';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Ã¹ È­¸é' }} />
      <Stack.Screen 
      name="home/index" 
      options={{
        headerShown: true,
        header: () => <Header />
      }} />
      <Stack.Screen 
        name="create/card"
        options={{
          headerShown: true,
          header: () => <Header />
        }} />
      <Stack.Screen 
        name="share/index" 
        options={{
          headerShown: true,
          header: () => <Header />
        }}
      />
    </Stack>
  );
}