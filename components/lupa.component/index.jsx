import React from "react";
import {Image, View} from "react-native"
import logo from './img/lupa.png'
import styles from "../login.screen/styles";

export default function LupaComponent() {
    return (
        <Image syle={styles.logo} source={logo} />
    )
}
