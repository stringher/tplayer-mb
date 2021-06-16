import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import HomeScreen from "./components/home.screen";
import LoginScreen from "./components/login.screen";
import RegistrationScreen from "./components/registration.screen";

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
    const logged = false

    function userNotLogged() {
        return (<>
            <Screen name="Login" component={LoginScreen} />
            <Screen name="Cadastro" component={RegistrationScreen} />
        </>);
    }
    function userLogged() {
        return (
            <>
                <Screen name="home" component={HomeScreen} />
            </>
        )
    }
  return (
      <NavigationContainer>
        <Navigator>
            {logged ? userLogged() : userNotLogged()}
        </Navigator>
      </NavigationContainer>
  );
}
