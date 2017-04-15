/*
	路由页面
	------------------------------
*/

import React, { Component } from 'react';
import {
	AppRegistry,
	Text,
	View,
	Image,
	Button,
} from 'react-native';

// 引入 navigation
import { TabNavigator, StackNavigator } from 'react-navigation';

// 引入登录页面
import LoginScreen from './pages/welcome';
// 首页
import MyHomeScreen from './pages/homeScreen';
// 我的
import userCenterScreen from './pages/userCenterScreen';

import projectPage from './pages/projectPageScreen';


const MyApp = TabNavigator({
	Home: {
		screen: MyHomeScreen,
	},
	userCenter: {
		screen: userCenterScreen,
	}
}, {
	tabBarOptions: {
		activeTintColor: '#e91e63',
	},
});


// 设置跳转页面
const mainApp = StackNavigator({
	Home: {
		screen: MyApp,
	},
	ProjectPage: {
		screen: projectPage,
	}
});

module.exports = mainApp;