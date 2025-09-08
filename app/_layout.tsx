import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    // <SafeAreaView>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
      </Stack>
    // </SafeAreaView>
  );
}
