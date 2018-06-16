import React, { Component } from 'react';
import {View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import AuthenticationContainer from './src/containers/authentication/AuthenticationContainer';
import EmployeeListContainer from './src/containers/home/EmployeeListContainer';
import AddEmployeeContainer from './src/containers/home/AddEmployeeContainer';


export default class App extends Component {

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

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }
  
  render() {
    return (
        <RootStack/>
    );
  }
}

const RootStack = StackNavigator({

  Login: {
    screen: AuthenticationContainer
  },
  Home: {
    screen: EmployeeListContainer
  },
  AddEmployee:{
    screen:AddEmployeeContainer
  }
}); 

