import React, {Component} from 'react';
import {View,Text} from 'react-native'
import {Card,CardSection,Input,Button,TextPicker,Spinner} from '../common'
import CommonStyle from '../../util/CommonStyles'
import Snackbar from 'react-native-snackbar';

class AddEmployeeComponent extends Component{
    
    options =['Monday','Tuesday','Wednessday','Thrusday','Friday'];
    uid='';

    constructor(){
        super();
        this.state={};
    }
    

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
        if(state===null){
            props.empData.name='';
            props.empData.phoneNumber='';
            props.empData.shift='';
            props.empData.isSavedClicked=false;
            props.empData.isSaveSuccess='';
        }
        if(state!=null){
            return props
        }

        if(props.empData.isSavedClicked){
            if(props.empData.isSaveSuccess){
                Snackbar.show({
                    title: 'User has been created',
                    duration: Snackbar.LENGTH_SHORT,
                });
                props.navigation.goBack();
                
            }else{
                Snackbar.show({
                    title: 'User has not created',
                    duration: Snackbar.LENGTH_SHORT,
                });
            }
        }else if(props.empData.isUpdateClicked){
            if(props.empData.isUpdateSuccess){
                Snackbar.show({
                    title: 'User has been Updated',
                    duration: Snackbar.LENGTH_SHORT,
                });
                props.navigation.goBack();
                
            }else {
                Snackbar.show({
                    title: 'User has not Updated',
                    duration: Snackbar.LENGTH_SHORT,
                });
            }
        }else if(props.empData.isDeleteClicked){
            if(props.empData.isDeleteSuccess){
                Snackbar.show({
                    title: 'User has been Deleted',
                    duration: Snackbar.LENGTH_SHORT,
                });
                props.navigation.goBack();
                
            }else{
                Snackbar.show({
                    title: 'User has not Deleted',
                    duration: Snackbar.LENGTH_SHORT,
                });
            }
        }

        return props
    }

    componentDidMount(){
        const { navigation } = this.props;
        const name = navigation.getParam('name', '');
        const phoneNumber = navigation.getParam('phoneNumber', '');
        const shift = navigation.getParam('shift', '');
        this.uid = navigation.getParam('uid', '');
        this.props.nameState(name)
        this.props.phoneNumberState(phoneNumber)
        this.props.shiftState(shift)
    }


    render(){
        const { navigation } = this.props;
        const actionName = navigation.getParam('action', '');

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

                {actionName==='update'?
                <CardSection>
                    <Button 
                        onPress={
                            ()=>{
                                this.props.updateUser(
                                    this.props.empData.name,
                                    this.props.empData.phoneNumber,
                                    this.props.empData.shift,
                                    this.uid 
                                )
                            }
                        }>
                        Update
                    </Button>
                    <Button 
                        onPress={
                            ()=>{
                                this.props.deleteUser(this.uid) 
                            }
                        }>
                        Delete
                    </Button>
                </CardSection>
                :
                <CardSection>
                    <Button 
                        onPress={
                            ()=>{
                                this.props.createUser(
                                    this.props.empData.name,
                                    this.props.empData.phoneNumber,
                                    this.props.empData.shift
                                
                                )
                            }
                        }>
                        Create
                    </Button>
                </CardSection>
                }
            </Card>
            
        </View>)
    };

}

export default AddEmployeeComponent;