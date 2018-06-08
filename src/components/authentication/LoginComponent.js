import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import CommonStyle from '../../util/CommonStyles'

import {Card,CardSection,Input,Button,Spinner, Header} from '../common';

export default class LoginComponent extends Component {

  render() {

    return (
      <View style={CommonStyle.screenBackground}>
        {this.props.authenticationData.isLoading? <Spinner size="large"/>:null}
        <Header headerText="Login"/>
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
          <Text style={styles.errorTextStyle}>
            {this.props.authenticationData.errorMessage}
          </Text>
          <CardSection>

            <Button 
              onPress={
                ()=>{this.props.loginUser(this.props.authenticationData.emailId,this.props.authenticationData.password);}
              }>
              Login 
            </Button>
            
          </CardSection>
        </Card>
       
      </View>
    );
  }
}

const styles=StyleSheet.create({
  errorTextStyle:{
      fontSize:20,
      alignSelf:'center',
      color:'blue',
      padding:10
  }
});
