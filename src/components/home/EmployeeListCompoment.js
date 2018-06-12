import React, { Component } from 'react';
import {View, Text ,StyleSheet,FlatList} from 'react-native';
import {Card, CardSection} from '../common'

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


    static getDerivedStateFromProps(props, state){
         this.props.fetchEmpList();
      }

    render() {
        return (
            <Card>
                <CardSection>
                    <FlatList
                        data={this.props.empList}
                        renderItem={({item}) => <Text>{item.name}</Text>}
                        />
                </CardSection>
            </Card>
        );
    }

}


const styles=StyleSheet.create({

    addText:{
        fontSize: 18,
        color: 'white',
        fontWeight:'bold',
        paddingRight:10
    }
});

export default EmployeeListCompoment;