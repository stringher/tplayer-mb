import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import HomeScreen from "./components/home.screen";

const {Navigator, Screen} = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Navigator>
          <Screen name="home" component={HomeScreen} />
        </Navigator>
      </NavigationContainer>
  );
}
