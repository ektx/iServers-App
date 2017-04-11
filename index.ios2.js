/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import Welcomeview from './welcome';
// import Welcomeview from './mainDisplay';
import Welcomeview from './contents/pages/reactnavigationDemo';

export default class iServers extends Component {
  render() {
    return (
      <Welcomeview />
    );
  }
}

AppRegistry.registerComponent('iServers', () => iServers);
