import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-blue-500 text-xl font-bold">
        Welcome to NativeWind!
      </Text>
      <Text className="text-red-500 mt-4">
        New red text below the blue one
      </Text>
    </View>
  );
}
