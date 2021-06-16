import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from 'react-redux'
import store from './store';
import MainNavigator from "./components/main-navigator";

export default function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <MainNavigator />
          </NavigationContainer>
      </Provider>
  );
}
