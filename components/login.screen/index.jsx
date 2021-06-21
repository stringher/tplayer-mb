import React, {useState} from "react";
import {View, Text, TextInput, Button, Image} from "react-native";
import styles from './styles';
import {setLogin} from '../../slices/session.slice'
import {useDispatch} from "react-redux";
import GlythButton from "./glyth.button";
import ColorButton from "./color.button";
import ClientLogoComponent from "../client-logo.component";

export default function LoginScreen(props) {
    const dispatch = useDispatch();
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View style={styles.screen}>
            <ClientLogoComponent />
            <TextInput style={styles.inputs} onChangeText={txt => setUsuario(txt) } placeholder="Email" />
            <TextInput style={styles.inputs} onChangeText={txt => setSenha(txt) }  placeholder="Senha"  secureTextEntry={true} />

            <ColorButton text="Entrar" style={styles.btn_entrar} onPress={() => dispatch(setLogin('meu-jwt-de-mentira'))} />
            <ColorButton text="Cadastrar" style={styles.btn_cadastrar} onPress={() => props.navigation.navigate('Cadastro')} />

            <Text>Ou</Text>

            <GlythButton type="facebook"  />
            <GlythButton type="instagram"  />
            <GlythButton type="twitter"  />
        </View>
    )
};
