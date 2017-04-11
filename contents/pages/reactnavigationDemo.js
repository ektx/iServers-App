import React, { Component } from 'react';
import {
	AppRegistry,
	Text,
	View,
	Button,
} from 'react-native';

// 引入 navigation
import { StackNavigator } from 'react-navigation';

// 设置主界面内容
class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Welcome',
	};

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View>
				<Text>Hello, navigation!</Text>
				<Button 
					onPress={
						() => navigate('Chat', {usr: '宝宝'})
					}
					title="Chat with ..."
				/>
			</View>
		);
	}
}

// 设置聊天界面内容
class ChatScreen extends Component {
	static navigationOptions = {
		title: ({state}) => `Chat with ${state.params.usr}`
	};

	render() {
		const {params } = this.props.navigation.state;
		return (
			<View>
				<Text>Chat with {params.usr} </Text>
			</View>
		)
	}
}

// 设置跳转页面
const SimpleApp = StackNavigator({
	Home: {
		screen: HomeScreen
	},
	Chat: {
		screen: ChatScreen
	}
})

AppRegistry.registerComponent('iServers', () => SimpleApp);
