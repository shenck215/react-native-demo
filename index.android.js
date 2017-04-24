/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';

import Dimensions from 'Dimensions';

class reactNativeApp extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.welcome}>
          Shenck's App!
        </Text>

        <TextInput
          style={styles.TextInput}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={styles.text}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

        <Image style={styles.img} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  TextInput: {
    flex: 1,
  },
  welcome: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    flex: 2,
    fontSize: 42,
  },
  img: {
    flex: 9,
  }
});

AppRegistry.registerComponent('reactNativeApp', () => reactNativeApp);

// import { AppRegistry, ListView, Text, View } from 'react-native';

// class ListViewBasics extends Component {
//   // 初始化模拟数据
//   constructor(props) {
//     super(props);
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       dataSource: ds.cloneWithRows([
//         'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//       ])
//     };
//   }
//   render() {
//     return (
//       <View style={{flex: 1, paddingTop: 350}}>
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={(rowData) => <Text>{rowData}</Text>}
//         />
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('reactNativeApp',() => ListViewBasics);

