import FontAwesome from "@expo/vector-icons/FontAwesome";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useFonts } from "expo-font";
import { router, Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { StatusBar } from "expo-status-bar";
export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 100,
  fade: true,
});

function RootLayout() {
  const { status } = useAuth();

  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Rem: require("../assets/fonts/rem.ttf"),
    Poppins: require("../assets/fonts/poppins.ttf"),
    Manrope: require("../assets/fonts/manrope.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "355391024350-c72n4g4mqhs0icd6g75p21mnj85hrgk0.apps.googleusercontent.com",
    });
  }, []);

  useEffect(() => {
    if (error || status === "error") throw error;
  }, [error, status]);

  useEffect(() => {
    if (loaded && status !== "loading") {
      SplashScreen.hideAsync();
      if (status === "false") {
        router.replace("/");
      } else if (status === "true") {
        router.replace("/home");
      }
    }
  }, [loaded, status]);

  if (!loaded || status === "loading") {
    return null;
  }

  return <Slot />;
}

export default function App() {
  return (
    <AuthProvider>
      <StatusBar
        backgroundColor="#0a0a0a"
        animated
        networkActivityIndicatorVisible
      />
      <RootLayout />
    </AuthProvider>
  );
}
