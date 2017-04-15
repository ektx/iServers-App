import React, { Component } from 'react';
import {
	AppRegistry,
	Text,
	View,
	Image,
	Button,
} from 'react-native';

// 引入 navigation
// import { TabNavigator, StackNavigator } from 'react-navigation';

class MyHomeScreen extends Component {
	static navigationOptions = {
		title: 'Hello',
		tabBar: {
			label: '首页',
			// Note: By default the icon is only shown on iOS. Search the showIcon option below.
			icon: ({ tintColor }) => (
				<Image
					source={require('../Img/tabBar/home@1x.png')}
					style={[{tintColor: tintColor}]}
				/>
			),
		},
	}

	render() {
		return (
			<Button
				onPress={() => this.props.navigation.navigate('Notifications')}
				title="Go to notifications"
			/>
		);
	}
}

module.exports = MyHomeScreen;