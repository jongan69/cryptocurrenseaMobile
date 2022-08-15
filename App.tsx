import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "react-native-rapi-ui";
import useCachedResources from "./src/hooks/useCachedResources";
import Navigation from "./src/navigation";
import { AuthProvider } from "./src/provider/AuthProvider";

export default function App() {
  const isLoadingComplete = useCachedResources();

  const images = [
    require("./assets/images/login.png"),
    require("./assets/images/register.png"),
    require("./assets/images/forget.png"),
  ];
  
  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <ThemeProvider images={images}>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
        <StatusBar />
      </ThemeProvider>
    );
  }
}
