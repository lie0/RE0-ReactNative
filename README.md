从零开始的react-native 
  
  1、'use strict';
    -使用严格
  
  1、添加按钮以及state的使用
    -TouchableDemo.js
        --TouchableHighlight 
            ---underlayColor={'#ff0000'} 表示点击时的颜色
            ---onPress={this._onclick} 按钮点击事件
            ---activeOpacity 透明度
        --TouchableOpacity
            ---onPress={this._onclick} 按钮点击事件
            ---activeOpacity 透明度
        --state
            ---this.state = { name : value } 设值
            ---this._onclick = this._onclick.bind(this); 初始化按钮事件,不然使用setState会报错,具体原因还不知道
            ---this.setState( { name : value } ) 重新设值         
   
            
    
    