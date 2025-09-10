import { useRouter } from "expo-router";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const saved = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Text>savesd</Text>
      <Button
        title="goto time trackings"
        onPress={() => router.navigate("/others/timetracking")}
      />
      <Button
        title="go to login"
        onPress={() => router.navigate("/others/Login")}
      />
    </SafeAreaView>
  );
};

export default saved;

const styles = StyleSheet.create({});
