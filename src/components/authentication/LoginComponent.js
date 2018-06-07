import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import {Card,CardSection,Input,Button} from '../common';

export default class LoginComponent extends Component {

  render() {
  
    console.warn(this.props.authenticationData.userData)
    return (
      <View>
        <Card>
          <CardSection>
          <Input 
              lable="Email Id :"
              value={this.props.authenticationData.email}
              onChangeText={(email) => this.props.emailState(email)}
              />
          </CardSection>

          <CardSection>
          <Input 
              lable="Password :"
              value={this.props.authenticationData.password}
              onChangeText={(password) => this.props.passwordState(password)}
              secureTextEntry={true}
              />
          </CardSection>
          <Text>{this.props.authenticationData.errorMessage}</Text>
          <CardSection>
            <Button onPress={()=>{
              this.props.loginUser(this.props.authenticationData.emailId,this.props.authenticationData.password);
              }}>
              Login 
            </Button>
          </CardSection>
          <Text>Data</Text>
        </Card>
      </View>
    );
  }
}
