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

/**按钮事件Demo**/
import TouchableDemo from './Demo/TouchableDemo';


//Flexbox布局
import FlexboxDemo from './Demo/FlexboxDemo'

class RE0_ReactNative extends Component {
  render() {
    return (
        <FlexboxDemo/>
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
