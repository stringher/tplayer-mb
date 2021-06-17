import React from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";

export default function ColorButton(props) {
    const textoStyle = {...props.style}
    delete (textoStyle.marginTop);
    delete (textoStyle.paddingVertical);
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={props.style}>
                <Text style={textoStyle}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}
