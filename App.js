import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from 'react-redux'
import store from './store';
import MainNavigator from "./components/main-navigator";
import Toast from 'react-native-toast-message';

export default function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <MainNavigator />
          </NavigationContainer>
          <Toast ref={(ref) => Toast.setRef(ref)} />
      </Provider>
  );
}
