import React from 'react';
import {View,Text,Picker} from 'react-native';

const TextPicker = (props) =>{
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.lableStyle}>{props.lable}</Text>
            <Picker
                selectedValue={props.selectedValue}
                style={styles.pickerStyle}
                mode='dropdown'
                onValueChange={props.onValueChange}>
                    {props.children.map((item, index) => 
                        {return (<Picker.Item label={item} value={item}/>)})
                    }
            </Picker>
        </View>
    );
}

const styles={
    pickerStyle:{
        color:'#000',
        paddingLeft:5,
        paddingRight:5,
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

export {TextPicker};