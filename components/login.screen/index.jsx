import React from "react";
import {View, Text, TextInput, Button} from "react-native";
import styles from './styles';
import {setLogin} from '../../slices/session.slice'
import {useDispatch} from "react-redux";

export default function LoginScreen(props) {
    const dispatch = useDispatch();
    return (
        <View style={styles.screen}>
            <Text>Tela de login</Text>
            <Button onPress={() => dispatch(setLogin('meu-jwt-de-mentira'))} title="Login"/>
            <Button onPress={() => props.navigation.navigate('Cadastro')} title="Criar cadastro"/>
        </View>
    )
};
