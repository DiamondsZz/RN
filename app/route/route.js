import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Index from '../views/Index/index';
import Find from '../views/Find/index';
import Order from '../views/Order/index';
import Mine from '../views/Mine/index';
const Tabs = createBottomTabNavigator();

const RootTabs = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="首页" component={Index} />
        <Tabs.Screen name="发现" component={Find} />
        <Tabs.Screen name="订单" component={Order} />
        <Tabs.Screen name="我的" component={Mine} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
export default RootTabs;
