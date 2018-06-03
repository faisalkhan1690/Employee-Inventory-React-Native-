import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class LoginComponent extends Component {

  componentWillMount(){
    const firebase = require("firebase");
    var config = {
      apiKey: "AIzaSyBjYXWgX6nXJ8SxvP_aL1F0w_gZhnz1ohI",
      authDomain: "employeeinventory-7644e.firebaseapp.com",
      databaseURL: "https://employeeinventory-7644e.firebaseio.com",
      projectId: "employeeinventory-7644e",
      storageBucket: "employeeinventory-7644e.appspot.com",
      messagingSenderId: "313718255560"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <View >
        <Text>Hello</Text>
      </View>
    );
  }
}
