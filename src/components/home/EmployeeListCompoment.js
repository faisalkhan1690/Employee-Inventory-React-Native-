import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

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

    render() {
        return (
            <View>
                <Text>Hello</Text>
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
    }
});

export default EmployeeListCompoment;