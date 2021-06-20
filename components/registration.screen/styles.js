import {StyleSheet, Dimensions} from "react-native";

const marginH = 40;
const marginV = 5;
const dim = Dimensions.get('screen');

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    inputs: {
        alignSelf: 'stretch',
        height: 40,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        backgroundColor: 'transparent',
        marginHorizontal: marginH,
        marginVertical: marginV,
        fontSize: 20
    },
    btn: {
        width: dim.width - 80,
        color: 'white',
        alignSelf: 'stretch',
        textAlign: 'center',
        paddingVertical: 10,
        backgroundColor: '#1DA1F2',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10
    }
});
