import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Saved = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Text>savesdss</Text>
      <View className="flex flex-row justify-between">
        <Button
          title="goto time trackings"
          onPress={() => router.navigate("/(timetracks)/Timetracking")}
        />
        <Button
          title="go to login"
          onPress={() => router.navigate("/(timetracks)/Login")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Saved;

const styles = StyleSheet.create({});
