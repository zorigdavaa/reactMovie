import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="Login"
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Timetracking"
        options={{ headerShown: true }}
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
