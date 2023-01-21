import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CalculatorScreen, CounterScreen, EffectScreen } from "../screens";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Counter") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Calculator") {
            iconName = focused ? "calculator" : "calculator-outline";
          } else if (route.name === "Effect") {
            iconName = focused ? "time" : "time-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "deepskyblue",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Counter" component={CounterScreen} />
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
      <Tab.Screen name="Effect" component={EffectScreen} />
    </Tab.Navigator>
  );
};
