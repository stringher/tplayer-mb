import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from "react-native";
import face from "./img/bible.png"


const dim = Dimensions.get("window")

export default function GlythButton(props) {
    let imagem;
    let rede = "";
    let estiloBtn = { };
    let estiloTexto = { };
    if (props.type === 'bible') {
        imagem = bible;
        rede = "bible"
        estiloBtn = styles.btn_bible
        estiloTexto = styles.btn_txt_bible
    }
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={estiloBtn}>
                <Image source={imagem} />
                <Text style={estiloTexto}>Entrar com {rede}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn_bible:{
        paddingTop: 5,
        paddingLeft: 40,
        flexDirection: 'row',
        backgroundColor: '#1DA1F2',
        width: dim.width - 80,
        height: 40,
        borderRadius: 5,
        marginBottom: 10
    }
})
