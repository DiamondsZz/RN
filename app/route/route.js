import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Index from '../views/Index/index';
import Find from '../views/Find/index';
import Order from '../views/Order/index';
import Mine from '../views/Mine/index';
import AntDesign from 'react-native-vector-icons/AntDesign';

//创建底部Tab导航
const Tabs = createBottomTabNavigator();

//生成导航
const RootTabs = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: '#000',
          labelStyle: {
           fontSize:16
          },
        }}>
        <Tabs.Screen
          name="Home"
          component={Index}
          options={{
            tabBarLabel: '首页',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <AntDesign
                  name="home"
                  size={18}
                  color={focused ? '#FFC300' : '#000'}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Find"
          component={Find}
          options={{
            tabBarLabel: '发现',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <AntDesign
                  name="find"
                  size={18}
                  color={focused ? '#FFC300' : '#000'}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Order"
          component={Order}
          options={{
            tabBarLabel: '订单',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <AntDesign
                  name="filetext1"
                  size={18}
                  color={focused ? '#FFC300' : '#000'}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Mine"
          component={Mine}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <AntDesign
                  name="user"
                  size={18}
                  color={focused ? '#FFC300' : '#000'}
                />
              );
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
export default RootTabs;
