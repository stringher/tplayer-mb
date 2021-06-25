import React from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";

export default function ColorButton(props) {
    const textoStyle = {...props.style}
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={props.style}>
                <Text style={props.internalStyle || {}}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}
