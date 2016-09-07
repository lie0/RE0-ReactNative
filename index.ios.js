/**
 * lih
 * 16/9/7
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TouchableDemo from './TouchableDemo';

class RE0_ReactNative extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TouchableDemo/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('RE0_ReactNative', () => RE0_ReactNative);
