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
	ListView,
	Dimensions,
	TouchableOpacity
} from 'react-native';

// 引入时间组件
import Moment from 'moment';
// 时间组件本地化
import MomentLocale from 'moment/locale/zh-cn';

import Head from './head';
import ProjectHome from './projectHome';

import { StackNavigator } from 'react-navigation';

let { height, width } = Dimensions.get('window');

export default class WelcomeView extends Component {
	// 初始化模拟数据
	constructor(props) {
		super();

		let ds =  new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			});

		this.state = {
			usr: ds.cloneWithRows([]),
			usrLength: 0 
		}
		
		this.getUser()


	}

	// 跳转页面
	pushToProjectHome = (data) => {
		this.props.navigation.navigate('ProjectPage', {data: data})
	}

	getUser = ()=>{

		// 本地模拟数据
		// let url = 'http://192.168.0.106:9000/iServer/其它/moke.json';
		// cnodejs api
		let url = 'http://192.168.0.106:8000/api/v1/ektx/';

		fetch(url)
		.then( res => res.json())
		.then( res => {
			// 更新状态
			this.setState({
				// 更新项目
				usr: this.state.usr.cloneWithRows( res.project ),
				// 取出项目总数
				usrLength: res.project.length
			})
		})
		.catch(err => {
			console.log(err)
		})
	}

	listViewRenderRow (rowData) {
		return (
			<TouchableOpacity
				style={styles.rowCell}
				onPress={ () => 
					this.pushToProjectHome( rowData )
				 }
			>
				<View>
					<Text style={styles.header}>{rowData.name}</Text>
					<View>
						<Text style={styles.helpInfo}>创建于: {Moment(rowData.ctime).fromNow()}</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}

	renderHeader () {
		return (
			<View>
				<Text>skakl</Text>
			</View>
		)
	}

	_renderFooter () {
		return (
			<View style={styles.footerBox}>
				<Text style={styles.footerTxt}>共有项目 {this.state.usrLength} 个</Text>
			</View>
		)
	}

	static navigationOptions = {
		title: '首页',
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
			<View style={styles.container}>
				<ListView
					enableEmptySections={true}
					style={styles.listViewBox}
					dataSource={this.state.usr}
					renderRow={this.listViewRenderRow.bind(this)}
					renderHeader={this.renderHeader}
					renderFooter={() => this._renderFooter()}
				/>
			</View>
		)
	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	listViewBox : {
		flex: 1,
	},
	// 单个信息
	rowCell: {
		flex: 1,
		width: width,
		paddingLeft: 10,
		paddingRight: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
		backgroundColor: '#fff'
	},

	header: {
		fontSize: 20,
		color: '#39f',
		paddingTop: 8,
		paddingBottom: 4
	},

	helpInfo: {
		fontSize: 14,
		color: '#666',
		paddingBottom: 10
	},

	footerBox: {
		height: 42,
		alignItems: 'center',
		justifyContent: 'center'
	},
	footerTxt: {
		color: '#666'
	}

});