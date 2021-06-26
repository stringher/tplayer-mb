import {StyleSheet, Dimensions} from "react-native";

const marginH = 40;
const marginV = 5;
const dim = Dimensions.get('screen');

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#444'
    },
    inputs: {
        alignSelf: 'stretch',
        height: 40,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        backgroundColor: 'transparent',
        color: 'lightgray',
        marginHorizontal: marginH,
        marginVertical: marginV,
        fontSize: 20
    },
    btn: {
        width: dim.width - 80,
        alignSelf: 'stretch',
        textAlign: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        fontSize: 15,
        backgroundColor: '#da0',
        marginTop: 10
    },
    btn_interno: {
        color: 'white',
        textAlign: 'center',
        borderColor: 'white',
        borderWidth: 1,
        marginHorizontal: 5,
        paddingVertical: 3,
        fontWeight: 'bold',
        borderRadius: 4
    },
    dropdown: {
        backgroundColor: "transparent",
        alignSelf: 'center',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: 'white',
        color: 'lightgray'
    },
    dropdown_container: {
    },
    dropdown_label: {
        color: 'lightgray'
    },
    dropdown_text: {
        fontSize: 20,
        color: 'lightgray'
    }
});
