import React, {useState}  from "react";
import {View, Text, TextInput, Button} from "react-native";
import styles from './styles';
import ColorButton from "../login.screen/color.button";

export default function RegistrationScreen(props) {
    const [nome, setNome]= useState();
    const [email, setEmail]= useState();
    const [nascimento, setNascimento]= useState();
    const [sexo, setSexo]= useState();
    const [senha, setSenha]= useState();
    const [senha2, setSenha2]= useState();

    return (
        <View style={styles.screen}>
            <TextInput style={styles.inputs} placeholderTextColor='lightgray' placeholder="Nome" value={nome} onChangeText={(text)=> setNome(Text) } />
            <TextInput style={styles.inputs} placeholderTextColor='lightgray' placeholder="Email" value={email} onChangeText={(text)=> setEmail(Text) } />
            <TextInput style={styles.inputs} placeholderTextColor='lightgray' placeholder="Data Nascimento" value={nascimento}  onChangeText={(text)=> setNascimento(Text) } />
            <TextInput style={styles.inputs} placeholderTextColor='lightgray' placeholder="Sexo" value={sexo} onChangeText={(text)=> setSexo(Text) } />
            <TextInput style={styles.inputs} placeholderTextColor='lightgray' placeholder="Senha" value={senha} secureTextEntry={true}  onChangeText={(text)=> setSenha(Text) } />
            <TextInput style={styles.inputs} placeholderTextColor='lightgray' placeholder="Senha" value={senha2} secureTextEntry={true}   onChangeText={(text)=> setSenha2(Text) } />
            <ColorButton style={styles.btn} onPress={() => props.navigation.navigate('Login')} text="Cadastrar"/>
        </View>
    )
};
