import FontAwesome from "@expo/vector-icons/FontAwesome";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from "react";
import "react-native-reanimated";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Rem: require("../assets/fonts/rem.ttf"),
    Poppins: require("../assets/fonts/poppins.ttf"),
    Manrope: require("../assets/fonts/manrope.ttf"),
    ...FontAwesome.font,
  });

  const [initialRoute, setInitialRoute] = useState("index");

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "355391024350-c72n4g4mqhs0icd6g75p21mnj85hrgk0.apps.googleusercontent.com",
    });
    console.log("Google Signin Configured");

    const checkToken = async () => {
      const token = await SecureStore.getItemAsync('token');
      if (token) {
        setInitialRoute("home/index");
      }
    };

    checkToken();
  }, []);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav initialRoute={initialRoute} />;
}

function RootLayoutNav({ initialRoute }: { initialRoute: string }) {
  return (
    <Stack initialRouteName={initialRoute}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home/index" options={{ headerShown: false }} />
      <Stack.Screen name="menu/index" options={{ headerShown: false }} />
      <Stack.Screen name="cart/index" options={{ headerShown: false }} />
    </Stack>
  );
}
