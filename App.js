import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { RestaurantsScreen } from "./src/screens/restaurants.screen";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return (
      <>
        <Text>Loading</Text>
      </>
    );
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar />
      </ThemeProvider>
    </>
  );
}
