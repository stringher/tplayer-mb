import React, {PropTypes,} from 'react';
import {View, Text, StyleSheet,TouchableHighlight,ScrollView,Image, Component, AppRegistry} from "react-native";


  export default function FooterScreen(props) {
    return(
      <View style={styles.mainviewStyle}>
          <View style={styles.footer}>
          <TouchableHighlight style={styles.bottomButtons}>
              <Text style={styles.footerText}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButtons}>
              <Text style={styles.footerText}>B</Text>
          </TouchableHighlight>
          </View>
      </View>
    )
  }

class mainview extends React.Component {
 constructor(props) {
      super(props)

  }

}



var styles = StyleSheet.create({
  mainviewStyle: {
  flex: 1,
  flexDirection: 'column',
},
footer: {
  position: 'absolute',
  flex:0.1,
  left: 0,
  right: 0,
  bottom: -10,
  backgroundColor:'green',
  flexDirection:'row',
  height:80,
  alignItems:'center',
},
bottomButtons: {
  alignItems:'center',
  justifyContent: 'center',
  flex:1,
},
footerText: {
  color:'white',
  fontWeight:'bold',
  alignItems:'center',
  fontSize:18,
},
textStyle: {
  alignSelf: 'center',
  color: 'orange'
},
scrollViewStyle: {
  borderWidth: 2,
  borderColor: 'blue'
}
});