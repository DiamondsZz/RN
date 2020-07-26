import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import router from './app/route/route';
const App = () => {
  return <View>{router()}</View>;
};

const styles = StyleSheet.create({});

export default App;
