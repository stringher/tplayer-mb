import React from "react";
import {Image, View} from "react-native"
import logo from './img/logo.png'
import styles from "../login.screen/styles";

export default function ClientLogoComponent() {
    return (
        <Image syle={styles.logo} source={logo} />
    )
}
