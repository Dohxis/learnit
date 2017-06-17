import React, { Component } from 'react';
import {Image, Text, View, StyleSheet, Dimensions, Alert} from 'react-native';
import { Container, Content, Button, StyleProvider } from 'native-base';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import * as Progress from 'react-native-progress';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#1d1b25',
		justifyContent: 'space-between'
	},
	pic: {
		width: win.width/1.5,
		height: win.width/1.5,
		resizeMode: 'contain',
		marginTop: 0
	},
	name: {
			color: 'white',
			fontWeight: 'bold',
			fontSize: responsiveFontSize(4),
			marginTop: 20,
			marginBottom: 30,
			width: win.width,
			textAlign: 'center'
	},
	buttonText: {
		color:'white',
		flex: 1,
		paddingTop: 10,
		fontSize: 20
	},
	noButtonText: {
		color:'#1d1b25',
		flex: 1,
		paddingTop: 10,
		fontSize: 20
	}
});

const buttonTheme = {
		'NativeBase.Button': {
			bottom: 10,
			width: win.width - 40,
			height: 60, 
			justifyContent: 'center',
			alignItems: 'center',
			paddingTop: 5,
			borderColor: '#64dd17',
			backgroundColor: 'green',
			marginBottom: 5
		}
};


const noButtonTheme = {
		'NativeBase.Button': {
			bottom: 10,
			width: win.width - 40,
			height: 60, 
			justifyContent: 'center',
			alignItems: 'center',
			paddingTop: 5,
			borderColor: '#1d1b25',
			backgroundColor: '#1d1b25',
			marginBottom: 5
		}
};


export default class Learn extends Component {



	render() {

		return (
			<Container>
				<View style={styles.background}>
					<View>
						<Progress.Bar progress={this.props.progress}
							width={win.width} height={10} borderRadius = {0}
							borderWidth = {0} animate={false} color='green'
						/>
						<View ref="myRef">
							<Text style={{color: '#1d1b25'}}> {this.props.progress} </Text>
						</View>
						
						<Text style={styles.name}>{this.props.title}</Text>
					</View>
					
					{this.props.children}
					
					<StyleProvider style={(!this.props.done) ? noButtonTheme : buttonTheme}>
						<Button full onPress={() => alert('hi')} disabled={!this.props.done}>
							<Text style={(!this.props.done) ? styles.noButtonText : styles.buttonText}>Tęsti</Text>
						</Button>
					</StyleProvider>
				</View> 
			</Container>
		);
	}
}
