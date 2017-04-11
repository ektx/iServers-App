/*
  主界面
  -------------------------------------
  @author: zwl(530675800@qq.com)
  @Date: 2017-4-7 五
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TabBarIOS,
  NavigatorIOS,
  Dimensions
} from 'react-native';

let { height, width } = Dimensions.get('window');

export default class WelcomeView extends Component {

  render() {
    return (
      <View style={styles.container}>

        <Text>Home</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  }
});