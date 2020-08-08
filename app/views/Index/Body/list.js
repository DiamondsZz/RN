import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Longlist} from 'beeshell';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = [
      {
        label: 222,
      },
    ];

    return (
      <Longlist
        ref={c => {
          this._longlist = c;
        }}
        total={22}
        data={{list}}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                marginBottom: 12,
                paddingVertical: 30,
                backgroundColor: '#fff',
              }}>
              <Text>{item.label}</Text>
            </View>
          );
        }}
        onEndReached={() => {}}
        onRefresh={() => {}}
      />
    );
  }
}

const styles = StyleSheet.create({});
