import { TokenContext } from "@/contexts/TokenContext";
import { Stack } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";
import "./global.css";

export default function RootLayout() {
  const [token, setToken] = useState<string | null>(null);
  return (
    // <SafeAreaView>
    <TokenContext.Provider value={{ token, setToken }}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
        <Stack.Screen
          name="(timetracks)/login"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(timetracks)/timetracking"
          options={{ headerShown: false }}
        />
      </Stack>
      <Toast />
    </TokenContext.Provider>

    // </SafeAreaView>
  );
}
