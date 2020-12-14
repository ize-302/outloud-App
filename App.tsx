import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "@use-expo/font";
import AppLoading from "expo-app-loading";

import Navigation from "./src";

const customFonts = {
  Recoleta: require("./assets/fonts/Recoleta-Bold.ttf"),
  SF_Regular: require("./assets/fonts/San-Francisco-Pro/SF-Pro-Display-Regular.otf"),
  SF_Medium: require("./assets/fonts/San-Francisco-Pro/SF-Pro-Display-Medium.otf"),
  SF_Bold: require("./assets/fonts/San-Francisco-Pro/SF-Pro-Display-Bold.otf"),
};

export default function App() {
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <React.Fragment>
      <Navigation />
    </React.Fragment>
  );
}
