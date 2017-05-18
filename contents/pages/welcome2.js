import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welc2ome',
    headerVisible: false,
    headerRight: <Button title="Info" />
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
});

module.exports = SimpleApp;