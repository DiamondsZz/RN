import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Index from '../views/Index/index';
import Find from '../views/Find/index';
import Order from '../views/Order/index';
import Mine from '../views/Mine/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Tabs = createBottomTabNavigator();

const RootTabs = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Home"
          component={Index}
          options={{
            tabBarLabel: '首页',
            tabBarIcon: () => <AntDesign name="home" size={16} />,
          }}
        />
        <Tabs.Screen
          name="Find"
          component={Find}
          options={{
            tabBarLabel: '发现',
            tabBarIcon: () => <AntDesign name="find" size={16} />,
          }}
        />
        <Tabs.Screen
          name="Order"
          component={Order}
          options={{
            tabBarLabel: '订单',
            tabBarIcon: () => <AntDesign name="filetext1" size={16} />,
          }}
        />
        <Tabs.Screen
          name="Mine"
          component={Mine}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: () => <AntDesign name="user" size={16} />,
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
export default RootTabs;
