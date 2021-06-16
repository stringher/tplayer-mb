import React from "react";
import {View, Text, TextInput, Button} from "react-native";
import styles from './styles';

export default function RegistrationScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>Tela de Cadastro de Usuário</Text>
            <Button onPress={()=>props.navigation.navigate('Login')} title="Login" />
        </View>
    )
}
