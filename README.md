从零开始的react-native 
  
  1、'use strict';
    -使用严格
  
  2、添加按钮以及state的使用
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
   
            
    
  3、使用Flexbox布局
    -FlexboxDemo.js
        --flexDirection 
            row:沿着水平轴方向排列
            column:沿着竖直轴方向排列(默认)
        --flex 主容器一定要设置该属性,不然会造成不显示的情况
     
     
  4、导航 
    -
    
    