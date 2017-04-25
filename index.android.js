/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Image,
//   Animated,
// } from 'react-native';

// import Dimensions from 'Dimensions';

// const styles = StyleSheet.create({
//   view:{
//     flex: 1,
//   },
//   welcome: {
//     flex: 1,
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   TextInput: {
//     flex: 1,
//   },
//   text: {
//     flex: 2,
//     fontSize: 36,
//   },
// });

// class reactNativeApp extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       text: '',
//       bounceValue: new Animated.Value(0),
//     };

//   }

//   componentDidMount() {
//     this.state.bounceValue.setValue(2);     // 设置一个较大的初始值
//     Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
//       this.state.bounceValue,                 // 将`bounceValue`值动画化
//       {
//         toValue: 1,                         // 将其值以动画的形式改到一个较小值
//         friction: 1,                          // Bouncier spring
//       }
//     ).start(() => {console.log('动画正常运行结束')});                                // 开始执行动画;
//   }


//   render() {

//     return (
//       <View style={styles.view}>
//         <Text style={styles.welcome}>
//           Shenck's App!
//         </Text>

//         <TextInput
//           style={styles.TextInput}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text style={styles.text}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>

//         <Animated.Image                         // 可选的基本组件类型: Image, Text, View
//           source={require('./images/index/huaji.android.png')}
//           style={{
//             flex: 7,
//             transform: [                        // `transform`是一个有序数组（动画按顺序执行）
//               {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
//             ]
//           }}
//         />
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('reactNativeApp', () => reactNativeApp);


import {
  View,
  Button,
  AppRegistry,
  LayoutAnimation,
  UIManager,
} from 'react-native';

import Dimensions from 'Dimensions';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class LayoutAnimationApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w: 100,
      h: 100,
    };
  }

  componentWillMount() {
    //创建动画
    LayoutAnimation.spring();
  }

  _onPressAdd = () => {
    LayoutAnimation.spring();
    if (this.state.w <= Dimensions.get('window').width) {
      this.setState({
        w: this.state.w + 15,
        h: this.state.h + 15,
      });
    }
  }

  _onPressSub = () => {
    LayoutAnimation.spring();
    if (this.state.w >= 15) {
      this.setState({
        w: this.state.w - 15,
        h: this.state.h - 15,
      });
    }
  }

  render() {

    return (
      <View style={{ flex: 1, flexDirection: 'column',alignItems: 'center' }}>
        <View style={{ flex: 8 }}>
          <View style={{
            width: this.state.w,
            height: this.state.h,
            backgroundColor: 'red',
          }} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Button
              title='放大'
              onPress={this._onPressAdd}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              title='缩小'
              onPress={this._onPressSub}
            />
          </View>
        </View>

      </View>
    );

  }

}

AppRegistry.registerComponent('reactNativeApp', () => LayoutAnimationApp)

