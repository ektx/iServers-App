import React, { Component } from 'react';
import { WebView } from 'react-native';

// 引入 navigation
// import { TabNavigator, StackNavigator } from 'react-navigation';
let url = 'http://localhost:8000/ektx/';

class MyHomeScreen extends Component {


	static navigationOptions = {
	    headerVisible: false,
		title: ({state}) => `${state.params.data.name}`,
	}

	render() {
		const {state} = this.props.navigation;
		return (
			<WebView
			source={{uri: url + state.params.data.name}}
			/>
		);
	}
}

module.exports = MyHomeScreen;