import { Stack } from 'expo-router/stack';
import { Redirect, useRouter } from 'expo-router'; // Import useRouter

export default function Layout() {
  const router = useRouter();

  if (router.pathname === '/') {
    return <Redirect href="/tabs" />;
  }

  return (
    <Stack>
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
    </Stack>
  );
}
