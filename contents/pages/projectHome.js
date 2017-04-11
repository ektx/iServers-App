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

export default class ProjectHome extends Component {

  render() {
    return (
      <View style={styles.container}>

        <Text>项目页面</Text>

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