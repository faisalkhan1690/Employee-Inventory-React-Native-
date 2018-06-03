import React from 'react';
import {View,Text,TextInput} from 'react-native';

const Input = ({lable,value,onChangeText,secureTextEntry}) =>{
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.lableStyle}>{lable}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                value={value}
                autoCorrect={false}
                onChangeText={onChangeText}
                style={styles.inputStyle}
            />            
        </View>
    );
}

const styles={
    inputStyle:{
        color:'#000',
        paddingLeft:5,
        paddingRight:5,
        fontSize:18,
        lineHeight:23,
        flex:3
    },
    lableStyle:{
        paddingLeft:20,
        fontSize:18,
        flex:1
    },
    containerStyle:{
        height:40,
        flexDirection:'row',
        flex:1,
        alignItems:'center'
    }
}

export {Input};