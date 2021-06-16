import React from "react";
import LoginScreen from "./login.screen";
import RegistrationScreen from "./registration.screen";
import HomeScreen from "./home.screen";
import {useSelector} from "react-redux";
import {createNativeStackNavigator} from "react-native-screens/native-stack";

const {Navigator, Screen} = createNativeStackNavigator();


export default function MainNavigator() {
    const session = useSelector(state => state.session);

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
        <Navigator>
            {session.jwt ? userLogged() : userNotLogged()}
        </Navigator>
    )
}
