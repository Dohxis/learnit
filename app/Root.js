import {
  StackNavigator,
} from 'react-navigation';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Intro from './pages/Intro'

export default class Root extends Component {
	render(){
		return(
			<View>
				<Intro/>
			</View>
		);
	}
}
