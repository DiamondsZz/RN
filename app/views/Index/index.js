import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Image,
  StatusBar,
  BackHandler,
  Keyboard,
  Linking,
  Easing,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Index() {
  return (
    <View style={styles.indexHead}>
      <View style={styles.indexHeadInfo}>
        <Text style={styles.place}>
          杭州
          <AntDesign name="down" size={16} />
        </Text>
        <Text style={styles.weather}>多云 36°C</Text>
      </View>

      <View style={styles.input}>
        <TextInput />
      </View>
      <View style={styles.icons}>
        <Text>
          <AntDesign name="plus" size={24} />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  indexHead: {
    paddingTop: 14,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: '#FFC300',
    flexDirection: 'row',
    alignItems: 'center',
  },
  indexHeadInfo: {
    flex: 2,
    alignItems: 'center',
  },
  place: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  weather: {
    fontSize: 12,
  },
  input: {
    flex:6,
    height: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 16,
    marginRight: 16,
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
