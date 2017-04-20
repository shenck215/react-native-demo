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

export default class reactNativeApp extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          Shenck's React Native Demo!
        </Text>

        <TextInput
          style={styles.TextInput}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={styles.text}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

        <Image style={styles.img} source={require('./images/index/huaji.android.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInput: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  welcome: {
    padding: 10,
    paddingBottom: 0,
    marginLeft: 4,
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    padding: 10, 
    fontSize: 42,
  },
  img: {
    top: 20,
    width: Dimensions.get('window').width,
    height: 400,
  }
});

AppRegistry.registerComponent('reactNativeApp', () => reactNativeApp);
