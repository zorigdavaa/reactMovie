import SearchBar from "@/components/searchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"></Image>
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image
          source={icons.logo}
          className="w-12 h-10 mt-20 mb-5 mx-auto"
        ></Image>
        <View className="flex-1" mt-5>
          <SearchBar onPress={() => router.push("/search")} placeHolder= "Search for a move" />
        </View>
      </ScrollView>
    </View>
  );
}
