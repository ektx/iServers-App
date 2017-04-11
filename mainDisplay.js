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

import Home from './contents/pages/home';
import Mine from './contents/pages/mine';

let { height, width } = Dimensions.get('window');

export default class WelcomeView extends Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedTabBatItem: 'home',
    }
  }

  render() {
    return (
      <View style={styles.container}>

        {/* nav */}
        <TabBarIOS
          barTintColor="#fff"
          style={{flex: 1}}
        >
          {/* home */}
          <TabBarIOS.Item
            icon={require('./contents/Img/tabBar/star@1x.png')}
            title="主页"
            // 气泡
            badge="99+"
            selected={this.state.selectedTabBatItem == 'home'}
            onPress = {()=>{ 
              this.setState({selectedTabBatItem: 'home'})
            }}
          >
            <NavigatorIOS
              style={styles.body}
              initialRoute = {{
                component: Home,
                title: '主页'
              }}
            />

          </TabBarIOS.Item>

          {/* user center */}
          <TabBarIOS.Item
            icon={require('./contents/Img/tabBar/user@1x.png')}
            title="我的"
            selected={this.state.selectedTabBatItem == 'search'}
            onPress = {()=>{ 
              this.setState({selectedTabBatItem: 'search'})
            }}
          >
            <NavigatorIOS
              style={{flex: 1}}
              initialRoute = {{
                component: Mine,
                title: '我的'
              }}
            />
          </TabBarIOS.Item>


        </TabBarIOS>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: height *.1,

    borderBottomWidth: 1,
    borderColor: '#ccc',


    backgroundColor: '#fff',
    // 垂直居中
    justifyContent: 'center',
    // 水平居中
    alignItems: 'center'
  },
  headerTxt: {
    color: '#09f',
    marginTop: 20,
  },
  body: {
    flex: 1,

    // 设置主轴的方向
    flexDirection: 'row',

    // 设置对齐方式
    // justifyContent: 'center',
    // alignItems: 'center'
  }
});