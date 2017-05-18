/*
	登录页面
	----------------------------------

	@author: ektx <530675800@qq.com>
	@date: 2017-4-18 六
*/
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Dimensions
} from 'react-native';

import Button from '../component/button-v1';

let { height, width } = Dimensions.get('window');

export default class WelcomeView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			passwd: ''
		}
	}

	static navigationOptions = {
		title: 'Login',
		header: ({ navigate }) => ({
			visible: false
		})
	};

	login = (val)=> {
				// this.props.navigation.navigate('Home')
		
		fetch('http://192.168.0.106:8000/loginIn', {
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user: this.state.name,
				passwd: this.state.passwd,
			})
		})
		.then( (response) => response.json() )
		.then( (resJson) => {
			if (resJson.success) {
				this.props.navigation.navigate('Home')
			} else {
				alert(resJson.msg)
			}
		})
		.catch(err => {
			console.log(err)
		})

	}

	render() {
		return (
			<View style={styles.container}>
				{ /* 头像 */ }
				<Image source={require('../logo.png')} style={styles.usrico}/>

				{ /* 帐号 */ }
				<TextInput
					ref="name" 
					style={styles.txtInt} 
					placeholder="用户名/邮箱" 
					value={this.state.name} 
					// 如果为true，键盘会在文本框内没有文字的时候禁用确认按钮。
					// 默认值为false。
					enablesReturnKeyAutomatically={true}
					// 是否要在文本框右侧显示“清除”按钮。
					clearButtonMode="while-editing" 
					onChangeText={(name) => {
						this.setState({name})
					}}
					onSubmitEditing={(evetn) => {
						// 如果密码没有时
						if (!this.state.passwd) {
							//自动定位到密码上
							this.refs.passwd.focus()
						} else {
							this.refs['login-btn'].props.press();
						}
					}}
				/>
				
				{ /* 密码 */ }
				<TextInput 
					ref="passwd" 
					password={true} 
					placeholder="密码" 
					clearButtonMode="while-editing" 
					enablesReturnKeyAutomatically={true} 
					style={styles.txtInt} 
					value={this.state.passwd}
					onChangeText={(passwd) => {
						this.setState({passwd})
					}}
					onSubmitEditing={(evetn) => {
						// 如果密码没有时
						if (!this.state.name) {
							//自动定位到密码上
							this.refs.name.focus()
						} else {
							this.refs['login-btn'].props.press();
						}
					}}
				/>

				<Button ref="login-btn" value="确认" boxStyle={styles.logoBtn} txtStyle={styles.logoTxt} press={this.login} />


				<View style={styles.loginHelp}>
					<Text style={styles.lhTxt}>找回密码</Text>
					<Text style={styles.lhTxt}>注册帐号</Text>
				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#f5f5f5',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},

	usrico: {
		width: width*.4,
		height: width*.4,
		borderRadius: width*.2,
		marginTop: height*.1,
		marginBottom: height*.1,
		// borderWidth: 2,
		// borderColor: 'white'
	},
	txtInt: {
		height: 45,
		backgroundColor: '#fff',
		marginBottom: 1,
		textAlign: 'center'
	},

	loginHelp: {
		width: width*.8,
		// 定位
		position: 'absolute',
		bottom: 20,

		// 设置主轴的方向
		flexDirection: 'row',

		// 设置对齐方式
		justifyContent: 'space-between'
	},

	lhTxt: {
		color: '#333'
	},

	logoBtn: {
		width: width * .95,
		borderWidth: 0,
		backgroundColor: '#f90',
		margin: 10
	},
	logoTxt: {
		lineHeight: 32,
		color: '#fff',
		fontSize: 16
	}
});