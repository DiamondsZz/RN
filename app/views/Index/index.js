import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Head from './Head/index';
import Body from './Body';
export default function Index() {
  return (
    <View>
      {Head()}
      <Body> </Body>
    </View>
  );
}

const styles = StyleSheet.create({});
