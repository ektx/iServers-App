
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';

export default class Button extends Component {
	
	myPressFun = ()=> {
		// 点击
		const { press } = this.props;

		if (press) press(this.props.value);
	}

	render() {
		const { 
			value, 
			baColor, 
			boxStyle, 
			txtStyle,
			press 
		} = this.props;

		return (
			<TouchableOpacity 
				style={[styles.btnBox, boxStyle]} 
				onPress={this.myPressFun}
			>
				<Text style={[styles.txtBox, txtStyle]}>{value}</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	btnBox: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 3,
		padding: 5,
		backgroundColor: '#fff'
	},
	txtBox: {
		color: '#333',
	    textAlign: 'center'
	}
})