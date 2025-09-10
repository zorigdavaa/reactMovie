import { icons } from "@/constants/icons";
import { Image, StyleSheet, Text, View } from "react-native";

const SearchBar = () => {
  return (
    <View>
      <Image source={icons.search} />
      <Text>SearchBarTest</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
