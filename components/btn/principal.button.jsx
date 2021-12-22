import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function PrincipalButton(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <ImageBackground source={require("../img/bible.png")} style={{}}>
          <Text style={props.internalStyle || {}}>{props.text}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
              height: 180,
                        width: 200,
                        borderRadius: 8,
                        top:55,
                        marginHorizontal: -5

  },
  title: {
     color: '#FBB03F',
    paddingRight: 40,
    paddingLeft: 40,
    paddingTop: 40,
    paddingBottom: 5
  }
});




