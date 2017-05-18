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
	    headerVisible: false,
		title: ({state}) => `${state.params.data.name}`,
	}

	render() {
		return (
			<Button
				onPress={() => this.props.navigation.navigate('Notifications')}
				title="Go to notifications k"
			/>
		);
	}
}

module.exports = MyHomeScreen;