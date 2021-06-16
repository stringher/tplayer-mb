import React from "react";
import {View, Text, TextInput, Button} from "react-native";
import styles from './styles';

export default function LoginScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>Tela de login</Text>
            <Button onPress={()=>props.navigation.navigate('Cadastro')} title="Criar cadastro" />
        </View>
    )
}
