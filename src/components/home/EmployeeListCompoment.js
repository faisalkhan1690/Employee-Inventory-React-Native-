import React, { Component } from 'react';
import {View, Text ,StyleSheet,FlatList,TouchableWithoutFeedback} from 'react-native';
import {Card, CardSection,Spinner} from '../common'
import CommonStyle from '../../util/CommonStyles'

class EmployeeListCompoment extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Employee List',
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
        headerRight: (
        <View>
            <Text 
            style={styles.addText}
            onPress={()=>{
                navigation.navigate('AddEmployee')
            }}>Add</Text>
        </View>
        )
    });

    componentDidMount(){
        this.props.fetchEmpList();
    }

    renderListItem(item){
        return(
            <TouchableWithoutFeedback
             onPress={()=>{
                        this.props.navigation.navigate('AddEmployee',{
                            'name':item.name,
                            'phoneNumber':item.phoneNumber,
                            'shift':item.shift,
                            'action':'update',
                            'uid':item.uid
                        })
                    }}>
                <View style={styles.listItemStyle}>
            
                    <View style={styles.listSectionStyle}>
                        <Text style={styles.headingText}>Employee Name :</Text>
                        <Text style={styles.infoText}>{item.name}</Text>
                    </View>
                    <View style={styles.listSectionStyle}>
                        <Text style={styles.headingText}>Employee No :</Text>
                        <Text style={styles.infoText}>{item.phoneNumber}</Text>
                    </View>
                    <View style={styles.listSectionStyle}>
                        <Text style={styles.headingText}>Shift :</Text>
                        <Text style={styles.infoBlueText}>{item.shift}</Text>
                    </View>
                
                </View>
            </TouchableWithoutFeedback>
            )
    }

    render() {
        return (
            <View style={CommonStyle.screenBackground}>
                {this.props.empListData.isLoading? <Spinner size="large"/>:null}
                <Card>
                    <CardSection>
                        <FlatList
                            data={this.props.empListData.empList}
                            renderItem={({item}) => this.renderListItem(item)}
                            />
                    </CardSection>
                </Card>
            </View>
        );
    }

}


const styles=StyleSheet.create({

    addText:{
        fontSize: 18,
        color: 'white',
        fontWeight:'bold',
        paddingRight:10
    },
    headingText:{
        fontSize:16,
        color:'black',
        fontWeight:'600',
        paddingLeft:10,
        paddingRight:10

    },infoText:{
        fontSize:16 ,
        color:'black',
        paddingRight:10

    },infoBlueText:{
        fontSize:16 ,
        color:'#5D7ED3',
        paddingRight:10

    },
    listItemStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'column',
        borderColor:'#ddd'

    },
    listSectionStyle:{
        justifyContent:'flex-start',
        flexDirection:'row'
    }


});

export default EmployeeListCompoment;