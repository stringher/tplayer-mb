import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native'

const dim = Dimensions.get("window")
export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 3,
        paddingHorizontal: 40
    },
    inputs: {
        alignSelf: 'stretch',
        height: 40,
        borderBottomWidth: 1,
        borderColor: 'darkgray'
    },
    logo: { },
    btn_entrar: {
        width: dim.width - 80,
        color: 'white',
        alignSelf: 'stretch',
        textAlign: 'center',
        paddingVertical: 10,
        backgroundColor: 'green',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10
    },
    btn_cadastrar: {
        width: dim.width - 80,
        color: 'white',
        alignSelf: 'stretch',
        textAlign: 'center',
        paddingVertical: 10,
        backgroundColor: 'red',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10
    }
});
