import { Loading } from "@components/Loading";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Routes } from "./src/routes";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading />}
      <StatusBar style="light" translucent />
    </ThemeProvider>
  );
}
