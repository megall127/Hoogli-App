/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import GlobalState from './src/globalState/GlobalState';
import Routes from './src/navigation/routes';
import CustomisableAlert from "react-native-customisable-alert";


const App =()=> {

  return (
    <GlobalState>
      <Routes/>
      </GlobalState>
  );
};

export default App;
