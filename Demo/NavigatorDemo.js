/**
 * 这是一个导航demo
 * lih 9/8/
 */
import React from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import FlexboxDemo from '../Demo/FlexboxDemo'

import TouchableDemo from '../Demo/TouchableDemo'

export default class NavigatorDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressFlexboxDemoButton() {
        const { navigator } = this.props;
        navigator.push({
            name: 'FlexboxDemo',
            component: FlexboxDemo,
        })
    }

    _pressTouchableDemoButton() {
        const { navigator } = this.props;
        navigator.push({
            name: 'TouchableDemo',
            component: TouchableDemo,
        })
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:3 , justifyContent:'center'}}>
                    <TouchableOpacity onPress={this._pressFlexboxDemoButton.bind(this)}>
                        <Text style={{ textAlign : 'left' }}>点我跳转到:FlexboxDemo.js</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._pressTouchableDemoButton.bind(this)}>
                        <Text style={{ textAlign : 'left' ,marginTop:10 }}>点我跳转到:TouchableDemo.js</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}></View>
            </View>
        );
    }
}
