import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";

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
          className="flex flew-row min-w-[80px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
        >
          <Image source={iconPath} tintColor="black" className="size-5" />
          <Text>{Title}</Text>
        </ImageBackground>
      </>
    );
  } else {
    return (
      <View>
        <Image source={iconPath} tintColor="grey" className="size-5" />
      </View>
    );
  }
}
export default function tabsLayout() {
  return (
    // <Stack/>
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,

        tabBarItemStyle: {
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          marginHorizontal: 50,
          marginBottom: 40,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="Index"
        options={{
          headerShown: true,
          title: "Home",
          tabBarIcon: ({ focused }) => BarIcon(focused, "Home", icons.home),
        }}
      />
      <Tabs.Screen
        name="Login"
        options={{
          headerShown: true,
          title: "Login",
          tabBarIcon: ({ focused }) => BarIcon(focused, "Login", icons.save),
        }}
      />
      {/* <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => BarIcon(focused, "Profile", icons.star),
        }}
      />
      <Tabs.Screen
        name="Saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused }) => BarIcon(focused, "Saved", icons.save),
        }}
      /> */}
    </Tabs>
  );
}
