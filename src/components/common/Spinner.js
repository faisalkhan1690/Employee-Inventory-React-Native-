import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner=({size})=>{
    return(
        <View style={styles.indicatorStyle}>
            <ActivityIndicator size={size ||'large'}/>
        </View>
    );
}

const styles={
    indicatorStyle:{
        flex:1,
        justifyContent:'center',
        alignItem:'center'
    }
}
export{Spinner}