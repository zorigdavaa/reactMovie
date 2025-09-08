import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground, ImageSourcePropType } from "react-native";

export function BarIcon(
  focused: boolean,
  Title: string,
  iconPath: ImageSourcePropType
) {
  if (focused) {
    return (
      <>
        <ImageBackground
          source={images.highlight}
          className="flex flew-row min-w-[80px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
        >
          <Image source={iconPath} tintColor="#151312" className="size-5" />
          {/* <Text>{Title}</Text> */}
        </ImageBackground>
      </>
    );
  } else {
    return <Image source={iconPath} tintColor="#151312" className="size-5" />;
  }
}
export default function tabsLayout() {
  return (
    // <Stack/>
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => BarIcon(focused, "Home", icons.home),
        }}
      />  
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => BarIcon(focused, "Search", icons.search),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => BarIcon(focused, "Profile", icons.star),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused }) => BarIcon(focused, "Saved", icons.save),
        }}
      />
    </Tabs>
  );
}
