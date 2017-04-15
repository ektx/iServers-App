import React, { Component } from 'react';
import {
	AppRegistry,
	Text,
	View,
	Image,
	Button,
	StyleSheet,
} from 'react-native';

// 引入 navigation
import { TabNavigator, StackNavigator } from 'react-navigation';

class MyHomeScreen extends Component {
	static navigationOptions = {
		title: 'Hello',
		tabBar: {
			label: '首页',
			// Note: By default the icon is only shown on iOS. Search the showIcon option below.
			icon: ({ tintColor }) => (
				<Image
					source={require('../../Img/tabBar/home@1x.png')}
					style={[styles.icon, {tintColor: tintColor}]}
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

class MyNotificationsScreen extends React.Component {
	static navigationOptions = {
		tabBar: {
			label: '我的',
			icon: ({ tintColor }) => (
				<Image
					source={require('../../Img/tabBar/user@1x.png')}
					style={[styles.icon, {tintColor: tintColor}]}
				/>
			),
		},
	}

	render() {
		return (
			<Button
				onPress={() => this.props.navigation.goBack()}
				title="Go back home"
			/>
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

const styles = StyleSheet.create({
	icon: {
		width: 26,
		height: 26,
	},
});

const MyApp = TabNavigator({
	Home: {
		screen: MyHomeScreen,
	},
	Notifications: {
		screen: MyNotificationsScreen,
	},
}, {
	tabBarOptions: {
		activeTintColor: '#e91e63',
	},
});
// MyApp.navigationOptions = {
//   title: 'My Chats',
// };

// 设置跳转页面
const SimpleApp = StackNavigator({
	Home: {
		screen: MyApp,
		navigationOptions: {
			// title: ({state}) => `${state.params.username}`
		}
	},
	Chat: {
		screen: ChatScreen,
	}
})

AppRegistry.registerComponent('iServers', () => SimpleApp);
