import React from "react";
import {Image, View, Text,Button, StyleSheet, TouchableOpacity} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useDispatch} from "react-redux";
import ColorButton from "../btn/color.button";



export default function LivrosScreen(props) {
    return (
          <View style={styles.screen}>

              <View style={{flexDirection:"row"}}>
                 <View style={{flex:1}}>
                    <ColorButton text="Gênesis" style={styles.btn_cadastrar} internalStyle={styles.botoesinterno} onPress={() => props.navigation.navigate('Capitulos')}/>
                   </View>
                   <View style={{flex:1}}>
                        <ColorButton text="Êxodo" style={styles.btn_cadastrar} internalStyle={styles.botoesinterno}/>
                   </View>
                </View>
          <View style={{flexDirection:"row"}}>
                           <View style={{flex:1}}>
                              <ColorButton text="Levítico" style={styles.btn_cadastrar} internalStyle={styles.botoesinterno}/>
                             </View>
                             <View style={{flex:1}}>
                                  <ColorButton text="Josué" style={styles.btn_cadastrar} internalStyle={styles.botoesinterno}/>
                             </View>
           </View>

          </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    screen: {
            flex: 1,
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: 3,
            paddingHorizontal: 20,
            backgroundColor: '#132440'
        },
    botoesinterno: {
        color: 'white',
        textAlign: 'center',
        borderColor: 'white',
        borderWidth: 1,
        lineHeight: 33,
        marginHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 8,
        height: 40,
        width: 170,
        left: 5,
        top: 0,
        alignSelf: 'flex-end',
         zIndex: 2,
          marginTop: 14
    },
      botaoprincipal: {
         color: '#FBB03F',
         fontSize :14,
         borderRadius: 8,
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 20,
        paddingBottom: 100,
        marginLeft:6
      }
});
