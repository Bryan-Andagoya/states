import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { BottomTabNavigator } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
