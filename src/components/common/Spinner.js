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
        alignItem:'center',
        position:'absolute',
        zIndex:4,
        elevation : 3,
        right:0,
        left:0,
        top:0,
        bottom:0,
        backgroundColor:'rgba(109,109,109,0.5)' 
    }
}
export{Spinner}