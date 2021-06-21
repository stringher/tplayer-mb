import React, {useState}  from "react";
import {View, Text, TextInput, Picker} from "react-native";
import styles from './styles';
import ColorButton from "../login.screen/color.button";
import ClientLogoComponent from "../client-logo.component";

export default function RegistrationScreen(props) {
    const [nome, setNome]= useState();
    const [email, setEmail]= useState();
    const [nascimento, setNascimento]= useState();
    const [sexo, setSexo]= useState();
    const [senha, setSenha]= useState();
    const [senha2, setSenha2]= useState();

    function updateNascimento(data) {
        const nasc = data.trim()
        if (nasc == "" || (/^(([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{1,4})|([0-9]{1,2}\/[0-9]{1,2}\/?)|([0-9]{1,2})\/?)$/g).test(nasc)) {
            setNascimento(nasc)
        }
    }
    return (
        <View style={styles.screen}>
            <ClientLogoComponent />
            <TextInput style={styles.inputs} placeholderTextColor='lightgray' placeholder="Nome" value={nome} onChangeText={(text)=> setNome(text) } />
            <TextInput style={styles.inputs} placeholderTextColor='lightgray' placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
            <TextInput style={styles.inputs} placeholderTextColor='lightgray' placeholder="Data Nascimento" value={nascimento}  onChangeText={updateNascimento} />
            <TextInput style={styles.inputs} placeholderTextColor='lightgray' placeholder="Sexo" value={sexo} onChangeText={(text)=> setSexo(text) } />
            <TextInput style={styles.inputs} placeholderTextColor='lightgray' placeholder="Senha" value={senha} secureTextEntry={true}  onChangeText={(text)=> setSenha(text) } />
            <TextInput style={styles.inputs} placeholderTextColor='lightgray' placeholder="Senha" value={senha2} secureTextEntry={true}   onChangeText={(text)=> setSenha2(text) } />
            <ColorButton style={styles.btn} onPress={() => props.navigation.navigate('Login')} text="Cadastrar"/>
        </View>
    )
};
