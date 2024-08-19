// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="pasindex" />
//       <Stack.Screen name="index" />
//     </Stack>
//   );
// }
import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
    </Stack>
  );
}
