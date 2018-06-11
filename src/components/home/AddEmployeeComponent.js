import React, {Component} from 'react';
import {View,Text} from 'react-native'
import {Card,CardSection,Input,Button,TextPicker} from '../common'
import CommonStyle from '../../util/CommonStyles'

class AddEmployeeComponent extends Component{
    
    options =['Monday','Tuesday','Wednessday','Thrusday','Friday'];

    static navigationOptions = ({ navigation }) => ({
        title: 'Add Employee',
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 20,
            color: 'white',
            flex: 1,
            tintColor: 'white',
        },
        headerTintColor:'white',
        headerStyle: {
            height: 55,
            backgroundColor: '#5D7ED3',
        },
        headerRight: (<View/>)
    });

    render(){
        console.warn(this.props)
        return(
        <View style={CommonStyle.screenBackground}>
            <Card>
                <CardSection>
                    <Input 
                        lable="Name"
                        value={this.props.empData.name}
                        onChangeText={(name) => this.props.nameState(name)}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        lable="Phone No"
                        value={this.props.empData.phoneNumber}
                        onChangeText={(phoneNumber) => this.props.phoneNumberState(phoneNumber)}
                    />
                </CardSection>

                <CardSection>
                    <TextPicker
                        lable='Shift'
                        selectedValue={this.props.empData.shift}
                        onValueChange={(shift)=>this.props.shiftState(shift)}>
                        {this.options}
                    </TextPicker>
                </CardSection>
                <CardSection>
                <Button 
                    onPress={
                        ()=>{alert("Under Developemnt")}
                    }>
                    Create
                    </Button>
                </CardSection>
            </Card>
            
        </View>)
    };

}

export default AddEmployeeComponent;