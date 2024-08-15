import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./Pages/Welcome";
import WeekOne from "./Pages/WeekOne";
import NewPage from "./Pages/NewPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="WeekOne" component={WeekOne} />
        <Stack.Screen name="NewPage" component={NewPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
