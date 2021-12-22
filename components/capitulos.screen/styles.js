import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native'

const dim = Dimensions.get("window")

const botoesInterno = {
    color: 'white',
    textAlign: 'center',
    borderColor: 'white',
    borderWidth: 1,
    marginHorizontal: 5,
    paddingVertical: 3,
    fontWeight: 'bold',
    borderRadius: 4
};

const botoes = {
    width: dim.width - 80,
    alignSelf: 'stretch',
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 15,
    marginTop: 10
}
export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 3,
        paddingHorizontal: 40,
        backgroundColor: '#132440'
    },
    inputs: {
        alignSelf: 'stretch',
        height: 40,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        color: 'lightgray'
    },
    logo: { },
    btn_entrar: {
        backgroundColor: 'black',
        ...botoes
    },
    btn_cadastrar: {
        backgroundColor: '#da0',
        ...botoes
    },
    btn_entrar_interno: botoesInterno,
    btn_cadastrar_interno: botoesInterno
});
