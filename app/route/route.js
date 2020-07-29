import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Index from '../components/Index/index';
import Find from '../components/Find/index';
import Order from '../components/Order/index';
import Mine from '../components/Mine/index';
const Tabs = createBottomTabNavigator();

const RootTabs = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Index" component={Index} />
        <Tabs.Screen name="Find" component={Find} />
        <Tabs.Screen name="Order" component={Order} />
        <Tabs.Screen name="Mine" component={Mine} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
export default RootTabs;
