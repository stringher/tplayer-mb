import React from "react";
import {Image, View, Text,Button, StyleSheet, TouchableOpacity} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useDispatch} from "react-redux";
import ColorButton from "../btn/color.button";



export default function CapitulosScreen() {
    return (
          <View style={styles.screen}>

             <View style={styles.header} >
                                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                                      <Text style={styles.headerText}>Gênesis</Text>
                                </View>
                            </View>

              <View style={{flexDirection:"row"}}>
                 <View style={{flex:1}}>
                    <ColorButton text="1" style={styles.btn_cadastrar} internalStyle={styles.botoesinterno}/>
                   </View>
                   <View style={{flex:1}}>
                        <ColorButton text="2" style={styles.btn_cadastrar} internalStyle={styles.botoesinterno}/>
                   </View>
                       <View style={{flex:1}}>
                           <ColorButton text="3" style={styles.btn_cadastrar} internalStyle={styles.botoesinterno}/>
                      </View>
                      <View style={{flex:1}}>
                          <ColorButton text="4" style={styles.btn_cadastrar} internalStyle={styles.botoesinterno}/>
                     </View>
                     <View style={{flex:1}}>
                         <ColorButton text="5" style={styles.btn_cadastrar} internalStyle={styles.botoesinterno}/>
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
         header: {
                    marginTop: 10,
                    paddingBottom:10
                },
         headerText: {
                        color: 'white',
                        textAlign: 'center',
                        height:28,
                        top:70,
                        fontSize:24
                    },
    botoesinterno: {
    fontFamily : 'Roboto',
        backgroundColor: '#1E2E49',
        color: 'white',
        textAlign: 'center',
        borderColor: 'white',
        lineHeight: 45,
        marginHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 50,
        height: 50,
        width: 50,
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
