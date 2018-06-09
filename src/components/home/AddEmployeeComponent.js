import React, {Component} from 'react';
import {View} from 'react-native'
import {Card,CardSection,Input,ButtonComponent} from '../common'
import CommonStyle from '../../util/CommonStyles'

class AddEmployeeComponent extends Component{

    render(){
        return(
        <View style={CommonStyle.screenBackground}>
            <Card>
                <CardSection>
                    <Input 
                        lable="Name"
                        value={this.props.empData.email}
                        onChangeText={(email) => this.props.emailState(email)}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        lable="EmpId"
                        value={this.props.empData.empId}
                        onChangeText={(empId) => this.props.empState(empId)}
                    />
                </CardSection>
            </Card>
            
        </View>)
    };

}

export default AddEmployeeComponent;