import React from "react";
import {Image, View, Text,Button,TextInput, StyleSheet, TouchableOpacity, ScrollView, TouchableHighlight, Component, AppRegistry} from "react-native";
import {StatusBar} from "expo-status-bar";
import bible from './img/bible.png';
import ColorButton from "./btn/color.button";
import PrincipalButton from "./btn/principal.button";
import LupaComponent from "./lupa.component";
import house from './img/house.png'
import config from './img/config.png'
import share from './img/share.png'




export default function HomeScreen(props) {
    return (
          <View style={styles.screen}>
              <View style={{flexDirection:"row"}}>
                  <View style={{flex:1}}>
                       <PrincipalButton text="Antigo Testamento" style={styles.btn_cadastrar} internalStyle={styles.botaoprincipal} onPress={() => props.navigation.navigate('Livros')}/>
                  </View>
                  <View style={{flex:1}}>
                      <PrincipalButton text="Novo Testamento" style={styles.btn_cadastrar} internalStyle={styles.botaoprincipal} onPress={() => props.navigation.navigate('Footer')}/>
                   </View>
               </View>
              <View style={{flexDirection:"row"}}>
                 <View style={{flex:1}}>
                    <ColorButton text="Casamento" style={styles.btn_cadastrar} internalStyle={styles.botoesinterno}/>
                   </View>
                   <View style={{flex:1}}>
                        <ColorButton text="Familia" style={styles.btn_cadastrar} internalStyle={styles.botoesinterno}/>
                   </View>
                    <View style={{flex:1}}>
                        <ColorButton text="Natal" style={styles.btn_cadastrar} internalStyle={styles.botoesinterno}/>
                    </View>
                </View>

                <View style={styles.footer}>
                 <Image style={styles.house} source={house} />
                  <TouchableHighlight style={styles.bottomButtons}>
                      <Text style={styles.footerText}>Home</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.bottomButtons}>
                      <Text style={styles.footerText}>PlayList</Text>
                  </TouchableHighlight>
                  <Image style={styles.house} source={share} />
                  <TouchableHighlight style={styles.bottomButtons}>
                                                <Text style={styles.footerText}>Compartilhar</Text>
                </TouchableHighlight>
                <Image style={styles.house} source={config} />
                <TouchableHighlight style={styles.bottomButtons}>
              <Text style={styles.footerText}>Configurações</Text>
          </TouchableHighlight>
                          </View>

        <View style={styles.header} >
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
             <LupaComponent/>
                <TextInput style={styles.btn_buscar}    />
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
      header: {
            marginTop: 10,
        },
    screen: {
            flex: 1,
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: 3,
            paddingHorizontal: 20,
            backgroundColor: '#132440'
        },
         btn_buscar: {
         backgroundColor: '#314058',
         borderRadius: 5,
          width :330,
          height :30,
          top:10
         },
    botoesinterno: {
        color: '#FBB03F',
        textAlign: 'center',
        borderColor: 'white',
        borderWidth: 1,
        lineHeight: 90,
        marginHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 8,
        height: 100,
        width: 100,
        left: 0,
        top: 0,
        alignSelf: 'flex-end',
        position: 'absolute',
         zIndex: 2,
          marginTop: 280
    },
      botaoprincipal: {
         color: '#FBB03F',
         fontFamily:'Roboto',
         textAlign: 'center',
         fontSize :16,
         alignSelf: 'flex-end',
         borderRadius: 8,
         left: 0,
         right: 100,
              top: 0,
              height: 160,
               lineHeight: 80,
                                width: 160
      },
      mainviewStyle: {
        flex: 1,
        flexDirection: 'column',
      },
      footer: {
        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        flexDirection:'row',
        height:90,
        alignItems:'center',
      },
      bottomButtons: {
        alignItems:'center',
        justifyContent: 'center',
        flex:1,
      },
          house: {
           height: 15,
                         width: 19
            },
      footerText: {
        color:'white',
        alignItems:'center',
        fontSize:11,
      },
      textStyle: {
        alignSelf: 'center',
        color: 'orange'
      },
      scrollViewStyle: {
        borderWidth: 2,
        borderColor: 'blue'
      }
});
