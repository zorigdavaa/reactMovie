import { icons } from "@/constants/icons";
import { Image, StyleSheet, TextInput, View } from "react-native";

interface Props {
  placeHolder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeHolder, onPress }: Props) => {
  return (
    <View className="flex-row w-80 h-10 bg-white items-center rounded-xl">
      <Image source={icons.search} />
      <TextInput
        onPress={() => {}}
        placeholder={placeHolder}
        value=""
        onChangeText={onPress}
        className="flex-1 ml-2 text-white w-full round"
      />

      {/* <Text>SearchBarTest</Text> */}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
