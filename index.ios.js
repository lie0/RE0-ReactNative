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
  View,
  Navigator
} from 'react-native';

/**按钮事件Demo**/
import TouchableDemo from './Demo/TouchableDemo';


//Flexbox布局
import FlexboxDemo from './Demo/FlexboxDemo'


//Navigator导航
import NavigatorDemo from './Demo/NavigatorDemo'

class RE0_ReactNative extends Component {
  render() {
    let defaultName = 'NavigatorDemo';
    //首页的容器
    let defaultComponent = NavigatorDemo;
    return (
        <Navigator
            initialRoute={{ name: defaultName, component: defaultComponent }}
            configureScene={(route) => {
                return Navigator.SceneConfigs.HorizontalSwipeJump;
              }}
            renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
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
