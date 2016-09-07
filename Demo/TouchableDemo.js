/**
 * lih
 * 16/9/7
 */
'use strict';

import React,{ Component }  from 'react';

import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'

export default class touchable_demo extends Component   {

    constructor(props) {
        super(props);
        this.state = { TouchableHighlightText : '这是一个可点击的TouchableHighlight' , TouchableOpacityText : '这是一个可点击的TouchableOpacity'}
        this._onTouchableHighlightClick = this._onTouchableHighlightClick.bind(this);
        this._onTouchableOpacityClick = this._onTouchableOpacityClick.bind(this);
    }

    //TouchableHighlight的点击事件
    _onTouchableHighlightClick() {
        this.setState( { TouchableHighlightText : '这是点击之后的TouchableHighlight' } )
    }

    //TouchableOpacity的点击事件
    _onTouchableOpacityClick() {
        this.setState( { TouchableOpacityText : '这是点击之后的TouchableOpacity' } )
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.touchableClass} underlayColor={'#ff0000'} onPress={this._onTouchableHighlightClick}>
                    <Text >{this.state.TouchableHighlightText}</Text>
                </TouchableHighlight>
                <TouchableOpacity style={styles.touchableClass} onPress={this._onTouchableOpacityClick}>
                    <Text >{this.state.TouchableOpacityText}</Text>
                </TouchableOpacity>
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
    touchableClass: {
        margin: 10,
    }
});