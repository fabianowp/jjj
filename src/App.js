import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Config from 'react-native-config';
import firebase from 'react-native-firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAqC3ohgnqtO_G54xOZpuxbJ9h_5SJJX5A',
            authDomain: 'test-a6e51.firebaseapp.com',
            databaseURL: 'https://test-a6e51.firebaseio.com',
            projectId: 'test-a6e51',
            storageBucket: 'test-a6e51.appspot.com',
            messagingSenderId: '381218125631'
        });
    }
    render() {
        return (
            <View>
                <LoginForm />
            </View>
        );
    }
}


export default App;