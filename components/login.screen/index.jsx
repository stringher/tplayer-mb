import React, {useState} from "react";
import {View, Text, TextInput, Button, Image} from "react-native";
import styles from './styles';
import {setLogin} from '../../slices/session.slice'
import {useDispatch} from "react-redux";
import ColorButton from "./color.button";
import ClientLogoComponent from "../client-logo.component";
import config from "../../config/config.json"

export default function LoginScreen(props) {
    const dispatch = useDispatch();
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    function doLogin() {
        fetch(`${config.server}/login`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario, senha
            })
        }).then(response =>response.json())
            .then((ans) => dispatch(setLogin(ans.jwt)))

    }

    return (
        <View style={styles.screen}>
            <ClientLogoComponent/>
            <TextInput style={styles.inputs} onChangeText={txt => setUsuario(txt)} placeholder="Email"
                       placeholderTextColor="lightgray"/>
            <TextInput style={styles.inputs} onChangeText={txt => setSenha(txt)} placeholder="Senha"
                       placeholderTextColor="lightgray" secureTextEntry={true}/>

            <ColorButton text="Entrar" style={styles.btn_entrar} internalStyle={styles.btn_entrar_interno}
                         onPress={doLogin}/>
            <ColorButton text="Cadastrar" style={styles.btn_cadastrar} internalStyle={styles.btn_cadastrar_interno}
                         onPress={() => props.navigation.navigate('Cadastro')}/>
        </View>
    );
};
