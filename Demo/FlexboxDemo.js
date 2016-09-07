/**
 * lih
 * 16/9/7
 */
'use strict';

import React,{ Component }  from 'react';

import {
    View,
    StyleSheet,
    Text
} from 'react-native'


export default class FlexboxDemo extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'powderblue' ,justifyContent:'center'}}  >
                    <Text style={styles.welcome}>这是第一个容器</Text>
                </View>
                <View style={{flex: 3, backgroundColor: 'skyblue',justifyContent:'center',flexDirection: 'row'}} >
                    <View style={{flex: 1, backgroundColor: 'skyblue'}}>
                        <Text style={styles.welcome}>这是第二个容器1</Text>
                    </View>
                    <View style={{flex: 2, backgroundColor: '#ff0000'}}>
                        <Text style={styles.welcome}>这是第二个容器2</Text>
                    </View>
                </View>
                <View style={{flex: 2, backgroundColor: 'steelblue',justifyContent:'center'}} >
                    <Text style={styles.welcome}>这是第三个容器</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    welcome: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
    }
});


