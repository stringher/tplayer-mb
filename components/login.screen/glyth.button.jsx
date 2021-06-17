import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from "react-native";
import face from "./img/facebook.png"
import instagram from "./img/instagram.png"
import twitter from "./img/twitter.png"

const dim = Dimensions.get("window")

export default function GlythButton(props) {
    let imagem;
    let rede = "";
    let estiloBtn = { };
    let estiloTexto = { };
    if (props.type === 'twitter') {
        imagem = twitter;
        rede = "Twitter"
        estiloBtn = styles.btn_twitter
        estiloTexto = styles.btn_txt_twitter
    } else if (props.type === 'instagram') {
        imagem = instagram;
        rede = "Instagram"
        estiloBtn = styles.btn_instagram
        estiloTexto = styles.btn_txt_instagram
    } else if (props.type === 'facebook') {
        imagem = face;
        rede = "Facebook"
        estiloBtn = styles.btn_facebook
        estiloTexto = styles.btn_txt_facebook
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
    btn_twitter:{
        paddingTop: 5,
        paddingLeft: 40,
        flexDirection: 'row',
        backgroundColor: '#1DA1F2',
        width: dim.width - 80,
        height: 40,
        borderRadius: 5,
        marginBottom: 10
    },
    btn_facebook: {
        paddingTop: 5,
        paddingLeft: 55,
        flexDirection: 'row',
        backgroundColor: '#4267B2',
        width: dim.width - 80,
        height: 40,
        borderRadius: 5,
        marginBottom: 10
    },
    btn_instagram:{
        paddingTop: 3,
        paddingLeft: 40,
        flexDirection: 'row',
        backgroundColor: '#8a3ab9',
        width: dim.width - 80,
        height: 40,
        borderRadius: 5,
        marginBottom: 10
    },
    btn_txt_twitter: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 4
    },
    btn_txt_instagram: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 8
    },
    btn_txt_facebook: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 6
    }
})
