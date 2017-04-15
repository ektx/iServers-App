import React, { Component } from 'react';
import {
	AppRegistry,
	Text,
	View,
	Button,
} from 'react-native';

// 引入 navigation
import { TabNavigator, StackNavigator } from 'react-navigation';

// 设置主界面内容
class RecentChatsScreen extends Component {
	render() {
		return (
			<View>
			<Text>List of recent chats</Text>
			<Button
				onPress={
					() => this.props.navigation.navigate('Chat', { usr: '宝宝' })}
				title="Chat with 宝宝"
			/>
		</View>
		)
	}
}

class AllContactsScreen extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
			<Text>List of recent chats</Text>
			<Button
				onPress={
					() => navigate('Chat', { usr: '祝祝' })}
				title="Chat with 祝祝"
			/>
		</View>
		)
	}
}
// 设置跳转页面
const MainScreenNavigator = TabNavigator({
	Recent: {
		screen: RecentChatsScreen
	},
	All: {
		screen: AllContactsScreen
	}
});
MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

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
		screen: MainScreenNavigator
	},
	Chat: {
		screen: ChatScreen
	}
})

AppRegistry.registerComponent('iServers', () => SimpleApp);
