import React, {Component} from 'react';
import {View,Text} from 'react-native'
import {Card,CardSection,Input,Button,TextPicker,Spinner} from '../common'
import CommonStyle from '../../util/CommonStyles'
import Snackbar from 'react-native-snackbar';

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


    static getDerivedStateFromProps(props, state){

        console.warn("props",props)
        if(props.empData.message!==''){
            if(props.empData.isSaveSuccess){
                Snackbar.show({
                    title: 'Done '+props.empData.message,
                    duration: Snackbar.LENGTH_SHORT,
                });
                props.navigation.goBack();
                
            }else if(!props.empData.isSaveSuccess) {
                Snackbar.show({
                    title: 'Fail '+props.empData.message,
                    duration: Snackbar.LENGTH_SHORT,
                });
            }
        }
        
      }

    render(){
        return(
        <View style={CommonStyle.screenBackground}>
        {this.props.empData.isLoading? <Spinner size="large"/>:null}
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
                        ()=>{
                            this.props.createUser(
                                this.props.empData.name,
                                this.props.empData.phoneNumber,
                                this.props.empData.shift
                            )}
                    }>
                    Create
                    </Button>
                </CardSection>
            </Card>
            
        </View>)
    };

}

export default AddEmployeeComponent;